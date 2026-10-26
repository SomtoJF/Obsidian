---
id: 100
title: "Same Tree"
url: https://leetcode.com/problems/same-tree/description/
difficulty: Easy
tags: [Tree, Depth-First Search, Breadth-First Search, Binary Tree]
attempts: 1
first_attempt: 2026-10-09
last_attempt: 2026-10-09
total_submissions: 2
total_ac: 1
total_runs: 5
---

# 100. Same Tree

> Easy · Tree / Depth-First Search / Breadth-First Search / Binary Tree · [Problem link](https://leetcode.com/problems/same-tree/description/)


> [!abstract]- Problem
> Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.
>
> Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2020/12/20/ex1.jpg)
> ```
> Input: p = [1,2,3], q = [1,2,3]
> Output: true
> ```
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2020/12/20/ex2.jpg)
> ```
> Input: p = [1,2], q = [1,null,2]
> Output: false
> ```
>
> **Example 3:**
>
> ![](https://assets.leetcode.com/uploads/2020/12/20/ex3.jpg)
> ```
> Input: p = [1,2,1], q = [1,1,2]
> Output: false
> ```
>
> **Constraints:**
>
> - The number of nodes in both trees is in the range `[0, 100]`.
> - `-104 <= Node.val <= 104`

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%20100.%20Same%20Tree)

## Attempt 1 · 2026-10-09 Fri
⏱ start 21:15 → first submit 21:24 · coding 9 min → AC 21:24 · 2 submits / 1 AC · 5 runs · 9 min on problem

### ✅ Accepted · Python · 21:24 (0 ms · 12.4 MB)
> [!success]- Code
> ```python
> # Definition for a binary tree node.
> # class TreeNode(object):
> #     def __init__(self, val=0, left=None, right=None):
> #         self.val = val
> #         self.left = left
> #         self.right = right
> class Solution(object):
>     def isSameTree(self, p, q):
>         """
>         :type p: Optional[TreeNode]
>         :type q: Optional[TreeNode]
>         :rtype: bool
>         """
>         if not p and not q:
>             return True
>
>         pq = deque()
>         pq.append(p)
>         qq = deque()
>         qq.append(q)
>
>         while pq or qq:
>             n1 = pq.popleft()
>             n2 = qq.popleft()
>
>             if not n1 or not n2: return False
>             if n1.val != n2.val: return False
>             # print(n1.val, n2.val)
>
>             if n1.left or n2.left:
>                 pq.append(n1.left)
>                 qq.append(n2.left)
>
>             if n1.right or n2.right:
>                 pq.append(n1.right)
>                 qq.append(n2.right)
>
>         return True
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
