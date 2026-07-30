>>For complex software engineering tasks, a developer doesn’t need an answer in 500 milliseconds. They need the _right_ answer, even if it takes several minutes or hours. This willingness to trade speed for depth unlocks the ability to use a massive context window, which is the foundation for everything that makes Claude Code so effective. It allows for a simpler architecture that doesn’t need to handoff or constantly compress memory or rely on complex retrieval-augmented generation (RAG) systems, which can sometimes be brittle.

## Claude Code High Level Architecture
At its core, Claude Code operates on a simple, iterative loop that follows the popular ReAct (Reasoning and Acting) framework:

1. **Query:** The user provides a task.
2. **Plan:** The agent creates a step-by-step plan using its `TodoWrite` tool.
3. **Reason:** It thinks about the next logical action.
4. **Act:** It executes a tool (e.g., read a file, run a search, write code).
5. **Observe:** It analyzes the output from the tool.
6. **Repeat:** It reasons about the result, updates the plan, and continues to the next action.