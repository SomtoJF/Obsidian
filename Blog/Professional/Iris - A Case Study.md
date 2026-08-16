I have been working consistently on browser automation tasks for the past few months and I have come across the dreaded golden challenge. My credentials? check out [ApplyWithIris](https://applywithiris.com). It has a feature where we automatically apply to jobs for you by having AI handle the application in a browser on a VPS/VM. 

Let's start by defining some core terms. We'll go with the simplest definitions possible here.
- **Agent**: An LLM with tools that enable it act on the result of it's reasoning.
- **Browser-Use Agent**: An Agent with browser based tools that allow it perform actions on the browser. 

## The Architecture
I think the best way to describe Iris' architecture is as both **Client-Server** and **Layered**. The core codebase (*excl. the chrome extension and marketing page*) are basically 3 main parts. 
- The Frontend built with React-vite
- The API server built with Gin Golang
- The Temporal server/worker built with Golang
### How do these map to each architecture stated prior
#### Client-Server (The macro architecture)
At a high level, the system uses the **Client-Server** model. The system is split into separate physical components that communicate over a network:
- **The Client:** The React frontend
- **The Servers:**
    - The **Backend API** built with Go, which serves data and business logic.
    - The **Temporal Worker** also built with Go, which handles background tasks and long-running workflows. 
#### The Layered View (The Micro Architecture)
When we look _inside_ the backend API itself, it uses a **Layered Architecture**. 

```
┌────────────────────────────────────────────────────────┐
│ CLIENT (Next.js Frontend)                              │
│ • Component Layer (UI / React)                         │
│ • Data Fetching Layer (fetch calling the API)          │
└─────────────────────────┬──────────────────────────────┘
                          │ Network Request
                          ▼
┌────────────────────────────────────────────────────────┐
│ SERVER 1 (Backend API)                                 │
│ • API Layer (Routes / Controllers)                     │
│ • Business Layer (Services / Validation)               │
│ • Persistence Layer (ORM).                             │
└─────────────────────────┬──────────────────────────────┘
                          │ Triggers Workflow
                          ▼
┌────────────────────────────────────────────────────────┐
│ SERVER 2 (Temporal Worker)                             │
│ • Workflow Layer (Orchestration & State Machine)       │
│ • Activity Layer (Heavy lifting / Third-party APIs)    │
└────────────────────────────────────────────────────────┘
```

> I'm going to skip explaining the frontend and the API. There's nothing interesting there. All the fun stuff happens in the Temporal worker.

## A little about Temporal
First of all, it has come to my attention that many of you 🫵🏽 don't use Temporal.
![[Pasted image 20260816134201.png|320]]

If you've never heard of or used Temporal before, you're missing out. What most people think about when they hear Temporal, or at least the first thing that comes up when you search it up is it's fault-tolerance and dynamic error handling. Which is in-fact at the core of it's functionalities. But temporal gives so much more. With AI agents, ==Temporal gives you visibility==. 

It does this using two core constructs:
- **Activities**: An Activity is a function that executes a single, small, well-defined task. This could be a DB operation, an API call etc. 
- **Workflows**: A workflow is basically collection of activities (small tasks) that solve a problem. 

In our specific case, the workflow was the Job Application and it called numerous smaller activities to achieve that goal.

![[Screenshot 2026-08-16 at 13.25.13.png]]
_Execution flow of a workflow in Temporal_

Combine this with Sentry, PostHog and/or any other error tracking/monitoring tool and you have all you need to figure out what went wrong when something breaks.

## Temporal, job applications and the browser-use agent
Here's a rundown of the design. Job applications run inside of a Temporal workflow. In the workflow, which we'll call `JobApplicationWorkflow`, the core design is that of a perception loop. The workflow:
- Loads the application data.
- Spins up an incognito tab on the browser and opens the job application page.
- Then in a loop:
	- Takes screenshots of the page, tags the screenshots and pulls the page's accessibility tree.
	- Feeds all the data into an LLM "planner"
	- The planner calls tools that click buttons, type etc.
The loop runs until the planner successfully submits the application. **This is an extremely simplified explanation of things** but you get the gist.

## The major challenge with browser automation
While testing the initial prototype, I came across a recurring problem that wanted to take my life. I event get chills writing about it. **The problem of bot detection**.
![[Pasted image 20260816135317.png|435]]

> **Bot detection**

I went through the complete 5 stages of grief trying to solve this one. Let's talk about the two stages that lasted the most. 
### Denial: Solutions I tried
> As you read this section picture me doing this every 30 minutes. 

![[Pasted image 20260816135819.png|320]]
The first thing I did ...and what would probably be your first step on any browser automation projects you might have worked on would be to run the browser in **stealth mode**. Most browser libraries give you this out of the box or provide a plugin for this so it's not a problem to implement at all. ==I used go-rod==. The golden question:

> Did it work?

Of course not, if you solve a problem on the first try then it wasn't a problem _duh_. Honestly, I don't even think this does anything if you ask me. Then again, I've never not run an automated browser in stealth mode so I don't how the experience would've been without. 

Next, I ran the browser in `NewUserMode`. This preset reuses the regular user data folder and login sessions (like existing cookies or extensions) so automation runs inside your established personal profile. I am aware of the danger of doing this. _Session pollution_ where one application's state pollutes another application. But that wasn't exactly possible in my setup. The agent didn't have the ability to perform any login operations, there were strict guardrails that stopped it from doing anything outside of the pages related to the job application it was filling and every application ran in an incognito context.

> Still didn't work of course.

Finally, I decided to approach it differently. Since it was impossible for the agent to completely avoid detection, let's give the agent the ability to solve captchas instead. So I got to researching. After a few days and couple of conversations with my mentors .*..ChatGPT, Claude and Gemini of course*, I was ready to build a tool to do this. The solution was to outsource the captcha tasks using either 2captcha or capsolver. Plan was simple enough. 

> At every loop iteration, right after taking the screenshot, we will run a script to check the DOM for any captcha prompts. 

If we find one, we call a function that reads the DOM for the arguments to the Capsolver API call and make the call in a Temporal Activity. Capsolver handles it and we get a code/token in return for us to feed back to the captcha iframe/element in the DOM. The challenge was that it is difficult to get the `TaskType` (one of the arguments needed for the Capsolver endpoint requires) from the DOM. To solve this problem, I had Claude Code run tens of applications I knew would trigger captchas and debug `TaskType` errors as they surfaced. With this, the agent was able to solve quite a number of captcha types reliably.
### Acceptance: My final decision
![[Pasted image 20260816135846.png|373]]