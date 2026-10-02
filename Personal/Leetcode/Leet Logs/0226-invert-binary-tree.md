---
id: 226
title: "Invert Binary Tree"
url: https://leetcode.com/problems/invert-binary-tree/description/
difficulty: Easy
tags: [Tree, Depth-First Search, Breadth-First Search, Binary Tree]
attempts: 1
first_attempt: 2026-10-01
last_attempt: 2026-10-01
total_submissions: 1
total_ac: 1
total_runs: 1
---

# 226. Invert Binary Tree

> Easy · Tree / Depth-First Search / Breadth-First Search / Binary Tree · [Problem link](https://leetcode.com/problems/invert-binary-tree/description/)


> [!abstract]- Problem
> Given the `root` of a binary tree, invert the tree, and return *its root*.
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg)
> ```
> Input: root = [4,2,7,1,3,6,9]
> Output: [4,7,2,9,6,3,1]
> ```
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg)
> ```
> Input: root = [2,1,3]
> Output: [2,3,1]
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
> - The number of nodes in the tree is in the range `[0, 100]`.
> - `-100 <= Node.val <= 100`

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%20226.%20Invert%20Binary%20Tree)

## Attempt 1 · 2026-10-01 Thu
⏱ start 14:16 → first submit 14:20 · coding 4 min → AC 14:20 · 1 submit / 1 AC · 1 run · 13 min on problem

### ✅ Accepted · Python · 14:20 (4 ms · 12.3 MB)
> [!success]- Code
> ```python
> # Definition for a binary tree node.
> # class TreeNode(object):
> #     def __init__(self, val=0, left=None, right=None):
> #         self.val = val
> #         self.left = left
> #         self.right = right
> class Solution(object):
>     def invertTree(self, root):
>         """
>         :type root: Optional[TreeNode]
>         :rtype: Optional[TreeNode]
>         """
>         if not root: return None
>
>         root.left, root.right = root.right, root.left
>         self.invertTree(root.left)
>         self.invertTree(root.right)
>         return root
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
