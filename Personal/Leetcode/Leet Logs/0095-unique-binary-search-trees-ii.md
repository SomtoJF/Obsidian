---
id: 95
title: "Unique Binary Search Trees II"
url: https://leetcode.com/problems/unique-binary-search-trees-ii/description/
difficulty: Medium
tags: [Dynamic Programming, Backtracking, Tree, Binary Search Tree, Binary Tree]
attempts: 3
first_attempt: 2026-09-23
last_attempt: 2026-10-01
total_submissions: 2
total_ac: 1
total_runs: 4
---

# 95. Unique Binary Search Trees II

> Medium · Dynamic Programming / Backtracking / Tree / Binary Search Tree / Binary Tree · [Problem link](https://leetcode.com/problems/unique-binary-search-trees-ii/description/)


> [!abstract]- Problem
> Given an integer `n`, return *all the structurally unique **BST'**s (binary search trees), which has exactly*`n`*nodes of unique values from* `1` *to* `n`. Return the answer in **any order**.
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/01/18/uniquebstn3.jpg)
> ```
> Input: n = 3
> Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
> ```
>
> **Example 2:**
>
> ```
> Input: n = 1
> Output: [[1]]
> ```
>
> **Constraints:**
>
> - `1 <= n <= 8`

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%2095.%20Unique%20Binary%20Search%20Trees%20II)

## Attempt 1 · 2026-09-23 Wed
⏱ start 14:15 → (in progress)

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 2 · 2026-09-24 Thu
⏱ start 13:49 → first submit 13:54 · coding 5 min → AC 13:54 · 1 submit / 1 AC · 3 runs · 10 min on problem

### ✅ Accepted · Python · 13:54 (11 ms · 16.7 MB)
> [!success]- Code
> ```python
> # Definition for a binary tree node.
> # class TreeNode(object):
> #     def __init__(self, val=0, left=None, right=None):
> #         self.val = val
> #         self.left = left
> #         self.right = right
> class Solution(object):
>     def generateTrees(self, n):
>         """
>         :type n: int
>         :rtype: List[Optional[TreeNode]]
>         """
>         def generate(start, end):
>             if start > end:
>                 return [None]
>             res = []
>             for i in range(start, end + 1):
>                 for left in generate(start, i -1):
>                     for right in generate(i + 1, end):
>                         root = TreeNode(i, left, right)
>                         res.append(root)
>
>             return res
>
>
>         return generate(1, n)
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 3 · 2026-10-01 Thu
⏱ start 12:54 → first submit 13:24 · coding 30 min · 1 submitted (no AC yet) · 1 run · 41 min on problem

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
