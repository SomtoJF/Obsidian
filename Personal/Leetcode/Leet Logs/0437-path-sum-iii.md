---
id: 437
title: "Path Sum III"
url: https://leetcode.com/problems/path-sum-iii/description/
difficulty: Medium
tags: [Tree, Depth-First Search, Binary Tree]
attempts: 2
first_attempt: 2026-09-28
last_attempt: 2026-09-29
total_submissions: 8
total_ac: 1
total_runs: 19
---

# 437. Path Sum III

> Medium · Tree / Depth-First Search / Binary Tree · [Problem link](https://leetcode.com/problems/path-sum-iii/description/)


> [!abstract]- Problem
> Given the `root` of a binary tree and an integer `targetSum`, return *the number of paths where the sum of the values along the path equals* `targetSum`.
>
> The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/04/09/pathsum3-1-tree.jpg)
> ```
> Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
> Output: 3
> Explanation: The paths that sum to 8 are shown.
> ```
>
> **Example 2:**
>
> ```
> Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
> Output: 3
> ```
>
> **Constraints:**
>
> - The number of nodes in the tree is in the range `[0, 1000]`.
> - `-109 <= Node.val <= 109`
> - `-1000 <= targetSum <= 1000`

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%20437.%20Path%20Sum%20III)

## Attempt 1 · 2026-09-28 Mon
⏱ start 12:59 → (in progress) · 8 runs

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 2 · 2026-09-29 Tue
⏱ start 13:11 → first submit 13:15 · coding 4 min → AC 13:50 · 8 submits / 1 AC · 11 runs · 40 min on problem

### ✅ Accepted · Python · 13:50 (4 ms · 13.9 MB)
> [!success]- Code
> ```python
> # Definition for a binary tree node.
> # class TreeNode(object):
> #     def __init__(self, val=0, left=None, right=None):
> #         self.val = val
> #         self.left = left
> #         self.right = right
> class Solution(object):
>     def pathSum(self, root, targetSum):
>         """
>         :type root: Optional[TreeNode]
>         :type targetSum: int
>         :rtype: int
>         """
>         if root and not root.left and not root.right:
>             if root.val != targetSum: return 0
>             else: return 1
>
>         sumList = {0: 1}
>         def countTargets(root, currSum):
>             if not root:
>                 return 0
>
>             count = 0
>             currSum += root.val
>             listIndex = currSum - targetSum
>             if listIndex in sumList:
>                 count = sumList[listIndex]
>
>             if currSum in sumList:
>                 sumList[currSum] += 1
>             else:
>                 sumList[currSum] = 1
>
>             leftTargets = countTargets(root.left, currSum)
>             rightTargets = countTargets(root.right, currSum)
>
>             sumList[currSum] -= 1
>             return count + leftTargets + rightTargets
>
>         return countTargets(root,0)
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
