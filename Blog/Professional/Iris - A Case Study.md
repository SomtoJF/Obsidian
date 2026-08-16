I have been working consistently on browser automation tasks for the past few months and I have come across the dreaded golden challenge. My credentials? check out [ApplyWithIris](https://applywithiris.com). It has a feature where we automatically apply to jobs for you by having AI handle the application in a browser on a VPS/VM. 

Let's start by defining some core terms. We'll go with the simplest definitions possible here.
- Agent: An LLM with tools that enable it act on the result of it's reasoning.
- Browser-Use Agent: An Agent with browser based tools that allow it perform actions on the browser. 

## The Architecture
I think the best way to describe Iris' architecture is as both **Client-Server** and **Layered**. The core codebase (*excl. the chrome extension and marketing page*) are basically 3 main parts. 
- The Frontend built with React-vite
- The API server built with Gin Golang
- The Temporal server/worker built with Golang
### How do these map to each architecture stated prior
#### Client-Server (The macro architecture)
At a high level, the system uses the **Client-Server** model. The system is split into separate physical components that communicate over a network:
- **The Client:** The Next.js frontend
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
