---
id: 108
title: "Convert Sorted Array to Binary Search Tree"
url: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/
difficulty: Easy
tags: [Array, Divide and Conquer, Tree, Binary Search Tree, Binary Tree]
attempts: 2
first_attempt: 2026-09-06
last_attempt: 2026-09-07
total_submissions: 3
total_ac: 1
total_runs: 17
---

# 108. Convert Sorted Array to Binary Search Tree

> Easy · Array / Divide and Conquer / Tree / Binary Search Tree / Binary Tree · [Problem link](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/)


> [!abstract]- Problem
> Given an integer array `nums` where the elements are sorted in **ascending order**, convert *it to a****height-balanced*** *binary search tree*.
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg)
> ```
> Input: nums = [-10,-3,0,5,9]
> Output: [0,-3,9,-10,null,5]
> Explanation: [0,-10,5,null,-3,null,9] is also accepted:
> ```
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2021/02/18/btree.jpg)
> ```
> Input: nums = [1,3]
> Output: [3,1]
> Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
> ```
>
> **Constraints:**
>
> - `1 <= nums.length <= 104`
> - `-104 <= nums[i] <= 104`
> - `nums` is sorted in a **strictly increasing** order.

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%20108.%20Convert%20Sorted%20Array%20to%20Binary%20Search%20Tree)

## Attempt 1 · 2026-09-06 Sun
⏱ start 13:55 → first submit 14:14 · coding 19 min · 2 submitted (no AC yet) · 11 runs · 34 min on problem

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 2 · 2026-09-07 Mon
⏱ start 19:29 → first submit 19:41 · coding 12 min → AC 19:41 · 1 submit / 1 AC · 6 runs · 195 min on problem

### ✅ Accepted · Python · 19:41 (6 ms · 15.3 MB)
> [!success]- Code
> ```python
> # Definition for a binary tree node.
> # class TreeNode(object):
> #     def __init__(self, val=0, left=None, right=None):
> #         self.val = val
> #         self.left = left
> #         self.right = right
> class Solution(object):
>     def sortedArrayToBST(self, nums):
>         """
>         :type nums: List[int]
>         :rtype: Optional[TreeNode]
>
>         idea here is to break the array into smaller pieces by appending to the tree the midpoints
>         """
>         if not nums:
>             return None
>
>         if len(nums) < 2:
>             return TreeNode(nums[0])
>
>         midIndex = (len(nums) - 1) // 2
>         node = TreeNode(nums[midIndex])
>         node.left = self.sortedArrayToBST(nums[:midIndex])
>         node.right = self.sortedArrayToBST(nums[midIndex + 1:])
>
>         return node
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
