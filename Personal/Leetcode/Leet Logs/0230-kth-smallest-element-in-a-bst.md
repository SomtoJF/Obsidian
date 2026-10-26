---
id: 230
title: "Kth Smallest Element in a BST"
url: https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/
difficulty: Medium
tags: [Tree, Depth-First Search, Binary Search Tree, Binary Tree]
attempts: 3
first_attempt: 2026-10-06
last_attempt: 2026-10-09
total_submissions: 2
total_ac: 1
total_runs: 22
---

# 230. Kth Smallest Element in a BST

> Medium · Tree / Depth-First Search / Binary Search Tree / Binary Tree · [Problem link](https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/)


> [!abstract]- Problem
> Given the `root` of a binary search tree, and an integer `k`, return *the* `kth` *smallest value (**1-indexed**) of all the values of the nodes in the tree*.
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/01/28/kthtree1.jpg)
> ```
> Input: root = [3,1,4,null,2], k = 1
> Output: 1
> ```
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2021/01/28/kthtree2.jpg)
> ```
> Input: root = [5,3,6,2,4,null,null,1], k = 3
> Output: 3
> ```
>
> **Constraints:**
>
> - The number of nodes in the tree is `n`.
> - `1 <= k <= n <= 104`
> - `0 <= Node.val <= 104`
>
> **Follow up:** If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%20230.%20Kth%20Smallest%20Element%20in%20a%20BST)

## Attempt 1 · 2026-10-06 Tue
⏱ start 15:16 → (in progress)

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 2 · 2026-10-08 Thu
⏱ start 20:49 · 17 runs · 102 min on problem

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 3 · 2026-10-09 Fri
⏱ start 20:30 → first submit 20:33 · coding 3 min → AC 20:35 · 2 submits / 1 AC · 5 runs · 6 min on problem

### ✅ Accepted · Python3 · 20:35 (0 ms · 22.2 MB)
> [!success]- Code
> ```python
> # Definition for a binary tree node.
> # class TreeNode:
> #     def __init__(self, val=0, left=None, right=None):
> #         self.val = val
> #         self.left = left
> #         self.right = right
> class Solution:
>     def kthSmallest(self, root: TreeNode | None, k: int) -> int:
>         def inorder(root: TreeNode) -> int | None:
>             nonlocal k
>             if not root:
>                 return None
>
>             left = inorder(root.left)
>             if left is not None:
>                 return left
>             # print(root.val)
>             if k == 1:
>                 return root.val
>             k -= 1
>             return inorder(root.right)
>
>         return inorder(root)
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
