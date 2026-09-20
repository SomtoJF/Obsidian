---
id: 98
title: "Validate Binary Search Tree"
url: https://leetcode.com/problems/validate-binary-search-tree/description/
difficulty: Medium
tags: [Tree, Depth-First Search, Binary Search Tree, Binary Tree]
attempts: 2
first_attempt: 2026-09-13
last_attempt: 2026-09-14
total_submissions: 3
total_ac: 1
total_runs: 6
---

# 98. Validate Binary Search Tree

> Medium · Tree / Depth-First Search / Binary Search Tree / Binary Tree · [Problem link](https://leetcode.com/problems/validate-binary-search-tree/description/)


> [!abstract]- Problem
> Given the `root` of a binary tree, *determine if it is a valid binary search tree (BST)*.
>
> A **valid BST** is defined as follows:
>
> - The left subtree of a node contains only nodes with keys **strictly less than** the node's key.
> - The right subtree of a node contains only nodes with keys **strictly greater than** the node's key.
> - Both the left and right subtrees must also be binary search trees.
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg)
> ```
> Input: root = [2,1,3]
> Output: true
> ```
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg)
> ```
> Input: root = [5,1,4,null,null,3,6]
> Output: false
> Explanation: The root node's value is 5 but its right child's value is 4.
> ```
>
> **Constraints:**
>
> - The number of nodes in the tree is in the range `[1, 104]`.
> - `-231 <= Node.val <= 231 - 1`

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%2098.%20Validate%20Binary%20Search%20Tree)

## Attempt 1 · 2026-09-13 Sun
⏱ start 11:00 → first submit 11:06 · coding 6 min · 1 submitted (no AC yet) · 2 runs · 54 min on problem

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 2 · 2026-09-14 Mon
⏱ start 14:59 → first submit 15:08 · coding 9 min → AC 15:08 · 2 submits / 1 AC · 4 runs · 40 min on problem

### ✅ Accepted · Python · 15:08 (3 ms · 16.7 MB)
> [!success]- Code
> ```python
> # Definition for a binary tree node.
> # class TreeNode(object):
> #     def __init__(self, val=0, left=None, right=None):
> #         self.val = val
> #         self.left = left
> #         self.right = right
> class Solution(object):
>     def isValidBST(self, root):
>         """
>         :type root: Optional[TreeNode]
>         :rtype: bool
>         """
>         return self.isValid(root, None, None)
>
>     def isValid(self, root, lower, upper):
>         if not root:
>             return True
>
>         if lower is not None:
>             if not lower < root.val:
>                 return False
>         if upper is not None:
>             if not root.val < upper:
>                 return False
>
>         left = self.isValid(root.left, lower, root.val)
>         if left is False:
>             return False
>
>         right = self.isValid(root.right, root.val, upper)
>         if right is False:
>             return False
>
>         return left and right
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
