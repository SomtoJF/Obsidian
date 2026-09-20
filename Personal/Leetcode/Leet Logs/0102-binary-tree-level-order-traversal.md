---
id: 102
title: "Binary Tree Level Order Traversal"
url: https://leetcode.com/problems/binary-tree-level-order-traversal/description/
difficulty: Medium
tags: [Tree, Breadth-First Search, Binary Tree]
attempts: 2
first_attempt: 2026-09-08
last_attempt: 2026-09-09
total_submissions: 1
total_ac: 1
total_runs: 18
---

# 102. Binary Tree Level Order Traversal

> Medium · Tree / Breadth-First Search / Binary Tree · [Problem link](https://leetcode.com/problems/binary-tree-level-order-traversal/description/)


> [!abstract]- Problem
> Given the `root` of a binary tree, return *the level order traversal of its nodes' values*. (i.e., from left to right, level by level).
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/02/19/tree1.jpg)
> ```
> Input: root = [3,9,20,null,null,15,7]
> Output: [[3],[9,20],[15,7]]
> ```
>
> **Example 2:**
>
> ```
> Input: root = [1]
> Output: [[1]]
> ```
>
> **Example 3:**
>
> ```
> Input: root = []
> Output: []
> ```
>
> **Constraints:**
>
> - The number of nodes in the tree is in the range `[0, 2000]`.
> - `-1000 <= Node.val <= 1000`

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%20102.%20Binary%20Tree%20Level%20Order%20Traversal)

## Attempt 1 · 2026-09-08 Tue
⏱ start 21:01 · 11 runs · 34 min on problem

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 2 · 2026-09-09 Wed
⏱ start 22:02 → first submit 22:50 · coding 48 min → AC 22:50 · 1 submit / 1 AC · 7 runs · 54 min on problem

### ✅ Accepted · Python · 22:50 (3 ms · 13.2 MB)
> [!success]- Code
> ```python
> # Definition for a binary tree node.
> # class TreeNode(object):
> #     def __init__(self, val=0, left=None, right=None):
> #         self.val = val
> #         self.left = left
> #         self.right = right
> class Solution(object):
>     def levelOrder(self, root):
>         """
>         :type root: Optional[TreeNode]
>         :rtype: List[List[int]]
>         BFS
>         """
>         if not root:
>             return []
>         q = deque()
>         q.append(root)
>         res = []
>
>         while q:
>             ls = len(q)
>             curr = []
>             for _ in range(ls):
>                 node = q.popleft()
>                 curr.append(node.val)
>                 if node.left:
>                     q.append(node.left)
>                 if node.right:
>                     q.append(node.right)
>             res.append(curr)
>
>         return res
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
