---
id: 1971
title: "Find if Path Exists in Graph"
url: https://leetcode.com/problems/find-if-path-exists-in-graph/description/
difficulty: Easy
tags: [Depth-First Search, Breadth-First Search, Union-Find, Graph Theory]
attempts: 3
first_attempt: 2026-09-06
last_attempt: 2026-11-16
total_submissions: 13
total_ac: 2
total_runs: 33
---

# 1971. Find if Path Exists in Graph

> Easy · Depth-First Search / Breadth-First Search / Union-Find / Graph Theory · [Problem link](https://leetcode.com/problems/find-if-path-exists-in-graph/description/)


> [!abstract]- Problem
> There is a **bi-directional** graph with `n` vertices, where each vertex is labeled from `0` to `n - 1` (**inclusive**). The edges in the graph are represented as a 2D integer array `edges`, where each `edges[i] = [ui, vi]` denotes a bi-directional edge between vertex `ui` and vertex `vi`. Every vertex pair is connected by **at most one** edge, and no vertex has an edge to itself.
>
> You want to determine if there is a **valid path** that exists from vertex `source` to vertex `destination`.
>
> Given `edges` and the integers `n`, `source`, and `destination`, return `true`*if there is a **valid path** from*`source`*to*`destination`*, or*`false`*otherwise**.*
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/08/14/validpath-ex1.png)
> ```
> Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
> Output: true
> Explanation: There are two paths from vertex 0 to vertex 2:
> - 0 → 1 → 2
> - 0 → 2
> ```
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2021/08/14/validpath-ex2.png)
> ```
> Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
> Output: false
> Explanation: There is no path from vertex 0 to vertex 5.
> ```
>
> **Constraints:**
>
> - `1 <= n <= 2 * 105`
> - `0 <= edges.length <= 2 * 105`
> - `edges[i].length == 2`
> - `0 <= ui, vi <= n - 1`
> - `ui != vi`
> - `0 <= source, destination <= n - 1`
> - There are no duplicate edges.
> - There are no self edges.

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%201971.%20Find%20if%20Path%20Exists%20in%20Graph)

## Attempt 1 · 2026-09-06 Sun
⏱ start 13:03 → first submit 13:24 · coding 22 min · 6 submitted (no AC yet) · 5 runs · 52 min on problem

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 2 · 2026-09-07 Mon
⏱ start 18:55 → first submit 19:14 · coding 18 min → AC 19:26 · 5 submits / 1 AC · 14 runs · 34 min on problem

### ✅ Accepted · Python · 19:26 (633 ms · 98 MB)
> [!success]- Code
> ```python
> class Solution(object):
>     def validPath(self, n, edges, source, destination):
>         """
>         :type n: int
>         :type edges: List[List[int]]
>         :type source: int
>         :type destination: int
>         :rtype: bool
>
>         represent graph as an adjacency list
>         traverse from source using BFS
>             if you find the destination return true
>
>         return false
>         """
>
>         """
>         {
>             a: [1 ,2],
>             b: [3, 4]
>         }
>         """
>         if n == 1 and source == destination == 0:
>             return True
>
>         i = 0
>         adjList = {}
>         while i < len(edges):
>             vertex1 = edges[i][0]
>             vertex2 = edges[i][1]
>
>             if vertex1 not in adjList:
>                 adjList[vertex1] = [vertex2]
>             else:
>                 adjList[vertex1].append(vertex2)
>
>             if vertex2 not in adjList:
>                 adjList[vertex2] = [vertex1]
>             else:
>                 adjList[vertex2].append(vertex1)
>
>             i += 1
>
>         # implement BFS
>         queue = deque()
>         visited = set()
>         if source in adjList:
>             queue.append(source)
>             visited.add(source)
>
>         while queue:
>             val = queue.popleft()
>             if destination in adjList[val] or destination == val:
>                 return True
>             for vtx in adjList[val]:
>                 if vtx not in visited:
>                     queue.append(vtx)
>                     visited.add(vtx)
>
>         return False
>
>         print(adjList)
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 3 · 2026-11-16 Mon
⏱ start 16:28 → first submit 16:48 · coding 20 min → AC 16:50 · 2 submits / 1 AC · 14 runs · 23 min on problem

### ✅ Accepted · Python3 · 16:50 (8959 ms · 103.3 MB)
> [!success]- Code
> ```python
> """
> - undirected graph
> """
> class Solution:
>     def validPath(self, n: int, edges: list[list[int]], source: int, destination: int) -> bool:
>         adj = {i: [] for i in range(n)}
>         for edge in edges:
>             s = edge[0]
>             d = edge[1]
>
>             if (source == s and d == destination) or (source == d and destination == s):
>                 return True
>
>             adj[s].append(d)
>             adj[d].append(s)
>
>         # print(adj)
>         q = deque()
>         q.append(source)
>         visited = set()
>
>         while q:
>             node = q.popleft()
>             # print(node)
>             if node == destination:
>                 return True
>             visited.add(node)
>             for vertex in adj[node]:
>                 if vertex in visited:
>                     continue
>                 q.append(vertex)
>
>         return False
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
