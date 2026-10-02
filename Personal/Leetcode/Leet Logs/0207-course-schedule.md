---
id: 207
title: "Course Schedule"
url: https://leetcode.com/problems/course-schedule/description/
difficulty: Medium
tags: [Depth-First Search, Breadth-First Search, Graph Theory, Topological Sort, Directed Acyclic Graph]
attempts: 1
first_attempt: 2026-10-01
last_attempt: 2026-10-01
total_submissions: 2
total_ac: 2
total_runs: 7
---

# 207. Course Schedule

> Medium · Depth-First Search / Breadth-First Search / Graph Theory / Topological Sort / Directed Acyclic Graph · [Problem link](https://leetcode.com/problems/course-schedule/description/)


> [!abstract]- Problem
> There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you **must** take course `bi` first if you want to take course `ai`.
>
> - For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.
>
> Return `true` if you can finish all courses. Otherwise, return `false`.
>
> **Example 1:**
>
> ```
> Input: numCourses = 2, prerequisites = [[1,0]]
> Output: true
> Explanation: There are a total of 2 courses to take.
> To take course 1 you should have finished course 0. So it is possible.
> ```
>
> **Example 2:**
>
> ```
> Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
> Output: false
> Explanation: There are a total of 2 courses to take.
> To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
> ```
>
> **Constraints:**
>
> - `1 <= numCourses <= 2000`
> - `0 <= prerequisites.length <= 5000`
> - `prerequisites[i].length == 2`
> - `0 <= ai, bi < numCourses`
> - All the pairs prerequisites[i] are **unique**.

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%20207.%20Course%20Schedule)

## Attempt 1 · 2026-10-01 Thu
⏱ start 13:54 → first submit 14:12 · coding 18 min → AC 14:12 · 2 submits / 2 AC · 7 runs · 23 min on problem

### ✅ Accepted · Python · 14:12 (4 ms · 13.5 MB)
> [!success]- Code
> ```python
> class Solution(object):
>     def canFinish(self, numCourses, prerequisites):
>         """
>         :type numCourses: int
>         :type prerequisites: List[List[int]]
>         :rtype: bool
>         """
>         courses = [i for i in range(numCourses)]
>         # course: num of prereq
>         indegree = {i: 0 for i in range(numCourses)}
>         # prereq : courses
>         adj = {i: [] for i in range(numCourses)}
>         for edge in prerequisites:
>             source = edge[1]
>             destination = edge[0]
>
>             indegree[destination] += 1
>             adj[source].append(destination)
>
>         q = deque()
>         for key, value in indegree.items():
>             if value == 0:
>                 q.append(key)
>
>         taken = 0
>         while q:
>             course = q.popleft()
>             taken += 1
>
>             freed = adj[course]
>             for pre in freed:
>                 indegree[pre] -= 1
>                 if indegree[pre] == 0:
>                     q.append(pre)
>         if taken == numCourses: return True
>         else: return False
> ```

### ✅ Accepted · Python · 14:12 (156 ms · 13.6 MB)
> [!success]- Code
> ```python
> class Solution(object):
>     def canFinish(self, numCourses, prerequisites):
>         """
>         :type numCourses: int
>         :type prerequisites: List[List[int]]
>         :rtype: bool
>         """
>         courses = [i for i in range(numCourses)]
>         # course: num of prereq
>         indegree = {i: 0 for i in range(numCourses)}
>         # prereq : courses
>         adj = {i: [] for i in range(numCourses)}
>         for edge in prerequisites:
>             source = edge[1]
>             destination = edge[0]
>
>             indegree[destination] += 1
>             adj[source].append(destination)
>         print(adj)
>         print(indegree)
>
>         q = deque()
>         for key, value in indegree.items():
>             if value == 0:
>                 q.append(key)
>
>         taken = 0
>         while q:
>             course = q.popleft()
>             taken += 1
>
>             freed = adj[course]
>             for pre in freed:
>                 indegree[pre] -= 1
>                 if indegree[pre] == 0:
>                     q.append(pre)
>         if taken == numCourses: return True
>         else: return False
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
