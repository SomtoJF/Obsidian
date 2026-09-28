---
id: 572
title: "Subtree of Another Tree"
url: https://leetcode.com/problems/subtree-of-another-tree/description/
difficulty: Easy
tags: [Tree, Depth-First Search, String Matching, Binary Tree, Hash Function]
attempts: 2
first_attempt: 2026-09-24
last_attempt: 2026-09-28
total_submissions: 4
total_ac: 1
total_runs: 14
---

# 572. Subtree of Another Tree

> Easy · Tree / Depth-First Search / String Matching / Binary Tree / Hash Function · [Problem link](https://leetcode.com/problems/subtree-of-another-tree/description/)


> [!abstract]- Problem
> Given the roots of two binary trees `root` and `subRoot`, return `true` if there is a subtree of `root` with the same structure and node values of` subRoot` and `false` otherwise.
>
> A subtree of a binary tree `tree` is a tree that consists of a node in `tree` and all of this node's descendants. The tree `tree` could also be considered as a subtree of itself.
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/04/28/subtree1-tree.jpg)
> ```
> Input: root = [3,4,5,1,2], subRoot = [4,1,2]
> Output: true
> ```
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2021/04/28/subtree2-tree.jpg)
> ```
> Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
> Output: false
> ```
>
> **Constraints:**
>
> - The number of nodes in the `root` tree is in the range `[1, 2000]`.
> - The number of nodes in the `subRoot` tree is in the range `[1, 1000]`.
> - `-104 <= root.val <= 104`
> - `-104 <= subRoot.val <= 104`

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%20572.%20Subtree%20of%20Another%20Tree)

## Attempt 1 · 2026-09-24 Thu
⏱ start 14:02 → first submit 14:15 · coding 13 min · 2 submitted (no AC yet) · 10 runs · 20 min on problem

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
To check if `subRoot` is a subtree of `root`, we can serialize both trees into strings and check if one is a substring of the other. This avoids complex tree comparisons.
![diagram](https://assets.leetcode.com/users/images/0eea5159-82c9-4c4c-9cba-5eb201e84076_1746636408.9985013.png)
1. Convert both `root` and `subRoot` into a string using preorder traversal.
2. Use a unique marker like `,#` for nulls to avoid false positives.
3. Check if the serialized `subRoot` is a substring of the serialized `root`.

This transforms the problem into string matching.
```python
class Solution(object): 
	def isSubtree(self, root, subRoot): 
		def ser(n): 
			if not n: return ',#' 
			return ',' + str(n.val) + ser(n.left) + ser(n.right) 
		return ser(subRoot) in ser(root)
```


## Attempt 2 · 2026-09-28 Mon
⏱ start 11:32 → first submit 11:32 · coding 1 min → AC 11:53 · 2 submits / 1 AC · 4 runs · 87 min on problem

### ✅ Accepted · Python · 11:53 (83 ms · 12.6 MB)
> [!success]- Code
> ```python
> # Definition for a binary tree node.
> # class TreeNode(object):
> #     def __init__(self, val=0, left=None, right=None):
> #         self.val = val
> #         self.left = left
> #         self.right = right
> class Solution(object):
>     def isSubtree(self, root, subRoot):
>         """
>         :type root: Optional[TreeNode]
>         :type subRoot: Optional[TreeNode]
>         :rtype: bool
>
>         BFS to find the node in tree
>         BFS target and subroot to make sure all the required nodes are present
>         """
>
>         targets = []
>         q = deque()
>         q.append(root)
>
>         while q:
>             node = q.popleft()
>             if node.val == subRoot.val:
>                 targets.append(node)
>
>             if node.left:
>                 q.append(node.left)
>             if node.right:
>                 q.append(node.right)
>
>         res = False
>         for node in targets:
>             if res: break
>
>             q = deque()
>             q.append(node)
>
>             sq = deque()
>             sq.append(subRoot)
>             curr = True
>             while q or sq:
>                 n = q.popleft()
>                 sn = sq.popleft()
>                 if not n or not sn:
>                     curr = False
>                     break
>                 if n.val != sn.val:
>                     curr = False
>                     break
>
>                 if n.left or sn.left:
>                     q.append(n.left)
>                     sq.append(sn.left)
>                 if n.right or sn.right:
>                     q.append(n.right)
>                     sq.append(sn.right)
>
>             res = curr
>
>         return res
>         print(targets)
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
