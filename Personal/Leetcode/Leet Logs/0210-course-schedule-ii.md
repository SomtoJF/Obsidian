---
id: 210
title: "Course Schedule II"
url: https://leetcode.com/problems/course-schedule-ii/description/
difficulty: Medium
tags: [Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort]
attempts: 4
first_attempt: 2026-09-14
last_attempt: 2026-09-20
total_submissions: 9
total_ac: 1
total_runs: 38
---

# 210. Course Schedule II

> Medium · Depth-First Search / Breadth-First Search / Graph Theory / Topological Sort · [Problem link](https://leetcode.com/problems/course-schedule-ii/description/)


> [!abstract]- Problem
> There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you **must** take course `bi` first if you want to take course `ai`.
>
> - For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.
>
> Return *the ordering of courses you should take to finish all courses*. If there are many valid answers, return **any** of them. If it is impossible to finish all courses, return **an empty array**.
>
> **Example 1:**
>
> ```
> Input: numCourses = 2, prerequisites = [[1,0]]
> Output: [0,1]
> Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
> ```
>
> **Example 2:**
>
> ```
> Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
> Output: [0,2,1,3]
> Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
> So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
> ```
>
> **Example 3:**
>
> ```
> Input: numCourses = 1, prerequisites = []
> Output: [0]
> ```
>
> **Constraints:**
>
> - `1 <= numCourses <= 2000`
> - `0 <= prerequisites.length <= numCourses * (numCourses - 1)`
> - `prerequisites[i].length == 2`
> - `0 <= ai, bi < numCourses`
> - `ai != bi`
> - All the pairs `[ai, bi]` are **distinct**.

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%20210.%20Course%20Schedule%20II)

## Attempt 1 · 2026-09-14 Mon
⏱ start 15:39 · 5 runs · 28 min on problem

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 2 · 2026-09-16 Wed
⏱ start 22:33 → first submit 22:35 · coding 2 min · 3 submitted (no AC yet) · 5 runs · 68 min on problem

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 3 · 2026-09-18 Fri
⏱ start 19:34 → first submit 20:15 · coding 40 min · 3 submitted (no AC yet) · 20 runs

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 4 · 2026-09-20 Sun
⏱ start 18:17 → first submit 18:30 · coding 13 min → AC 18:31 · 3 submits / 1 AC · 8 runs · 17 min on problem

### ✅ Accepted · Python · 18:31 (6 ms · 13.4 MB)
> [!success]- Code
> ```python
> class Solution(object):
>     def findOrder(self, numCourses, prerequisites):
>         """
>         :type numCourses: int
>         :type prerequisites: List[List[int]]
>         :rtype: List[int]
>
>         Topological sort
>         """
>         adj = {i : [] for i in range(numCourses)}
>         indegree = {i: 0 for i in range(numCourses)}
>
>         for edge in prerequisites:
>             pre = edge[1]
>             course = edge[0]
>
>             adj[pre].append(course)
>             indegree[course] += 1
>
>         q = deque()
>         res = []
>
>         for k,v in indegree.items():
>             if v == 0:
>                 q.append(k)
>                 res.append(k)
>
>         while q:
>             curr = q.popleft()
>             for course in adj[curr]:
>                 indegree[course] -= 1
>                 if indegree[course] == 0:
>                     q.append(course)
>                     res.append(course)
>
>         if len(res) != numCourses:
>             return []
>         # print(adj)
>         # print(indegree)
>
>         return res
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
