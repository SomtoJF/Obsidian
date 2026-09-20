---
id: 110
title: "Balanced Binary Tree"
url: https://leetcode.com/problems/balanced-binary-tree/description/
difficulty: Easy
tags: [Tree, Depth-First Search, Binary Tree]
attempts: 2
first_attempt: 2026-09-08
last_attempt: 2026-09-13
total_submissions: 4
total_ac: 1
total_runs: 29
---

# 110. Balanced Binary Tree

> Easy · Tree / Depth-First Search / Binary Tree · [Problem link](https://leetcode.com/problems/balanced-binary-tree/description/)


> [!abstract]- Problem
> Given a binary tree, determine if it is **height-balanced**.
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg)
> ```
> Input: root = [3,9,20,null,null,15,7]
> Output: true
> ```
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg)
> ```
> Input: root = [1,2,2,3,3,null,null,4,4]
> Output: false
> ```
>
> **Example 3:**
>
> ```
> Input: root = []
> Output: true
> ```
>
> **Constraints:**
>
> - The number of nodes in the tree is in the range `[0, 5000]`.
> - `-104 <= Node.val <= 104`

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%20110.%20Balanced%20Binary%20Tree)

## Attempt 1 · 2026-09-08 Tue
⏱ start 21:34 → first submit 21:55 · coding 21 min · 3 submitted (no AC yet) · 21 runs · 28 min on problem

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 2 · 2026-09-13 Sun
⏱ start 10:34 → first submit 10:42 · coding 8 min → AC 10:42 · 1 submit / 1 AC · 8 runs · 26 min on problem

### ✅ Accepted · Python · 10:42 (1 ms · 17.2 MB)
> [!success]- Code
> ```python
> # Definition for a binary tree node.
> # class TreeNode(object):
> #     def __init__(self, val=0, left=None, right=None):
> #         self.val = val
> #         self.left = left
> #         self.right = right
> class Solution(object):
>     def isBalanced(self, root):
>         """
>         :type root: Optional[TreeNode]
>         :rtype: bool
>         """
>         return self.height(root, 0) != -1
>
>     def height(self, root, height):
>         if not root:
>             return height
>         height += 1
>
>         lefth = self.height(root.left, height)
>         if lefth == -1:
>             return lefth
>         righth = self.height(root.right, height)
>         if righth == -1:
>             return righth
>
>         if abs(righth - lefth) > 1:
>             return -1
>
>         return max(lefth, righth)
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
