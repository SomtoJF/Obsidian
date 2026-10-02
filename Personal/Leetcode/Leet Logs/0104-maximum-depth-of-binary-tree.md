---
id: 104
title: "Maximum Depth of Binary Tree"
url: https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
difficulty: Easy
tags: [Tree, Depth-First Search, Breadth-First Search, Binary Tree]
attempts: 1
first_attempt: 2026-10-01
last_attempt: 2026-10-01
total_submissions: 1
total_ac: 1
total_runs: 1
---

# 104. Maximum Depth of Binary Tree

> Easy · Tree / Depth-First Search / Breadth-First Search / Binary Tree · [Problem link](https://leetcode.com/problems/maximum-depth-of-binary-tree/description/)


> [!abstract]- Problem
> Given the `root` of a binary tree, return *its maximum depth*.
>
> A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg)
> ```
> Input: root = [3,9,20,null,null,15,7]
> Output: 3
> ```
>
> **Example 2:**
>
> ```
> Input: root = [1,null,2]
> Output: 2
> ```
>
> **Constraints:**
>
> - The number of nodes in the tree is in the range `[0, 104]`.
> - `-100 <= Node.val <= 100`

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%20104.%20Maximum%20Depth%20of%20Binary%20Tree)

## Attempt 1 · 2026-10-01 Thu
⏱ start 13:48 → first submit 13:51 · coding 4 min → AC 13:51 · 1 submit / 1 AC · 1 run · 4 min on problem

### ✅ Accepted · Python · 13:51 (11 ms · 26.8 MB)
> [!success]- Code
> ```python
> # Definition for a binary tree node.
> # class TreeNode(object):
> #     def __init__(self, val=0, left=None, right=None):
> #         self.val = val
> #         self.left = left
> #         self.right = right
> class Solution(object):
>     def maxDepth(self, root):
>         """
>         :type root: Optional[TreeNode]
>         :rtype: int
>         """
>         def depth(node):
>             if not node:
>                 return 0
>
>             leftDepth = 1 + depth(node.left)
>             rightDepth = 1 + depth(node.right)
>
>             return max(leftDepth, rightDepth)
>         return depth(root)
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
