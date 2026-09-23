---
id: 236
title: "Lowest Common Ancestor of a Binary Tree"
url: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
difficulty: Medium
tags: [Tree, Depth-First Search, Binary Tree, Binary Lifting, Lowest Common Ancestor]
attempts: 2
first_attempt: 2026-09-14
last_attempt: 2026-09-23
total_submissions: 6
total_ac: 1
total_runs: 25
---

# 236. Lowest Common Ancestor of a Binary Tree

> Medium · Tree / Depth-First Search / Binary Tree / Binary Lifting / Lowest Common Ancestor · [Problem link](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/)


> [!abstract]- Problem
> Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
>
> According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow **a node to be a descendant of itself**).”
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2018/12/14/binarytree.png)
> ```
> Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
> Output: 3
> Explanation: The LCA of nodes 5 and 1 is 3.
> ```
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2018/12/14/binarytree.png)
> ```
> Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
> Output: 5
> Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
> ```
>
> **Example 3:**
>
> ```
> Input: root = [1,2], p = 1, q = 2
> Output: 1
> ```
>
> **Constraints:**
>
> - The number of nodes in the tree is in the range `[2, 105]`.
> - `-109 <= Node.val <= 109`
> - All `Node.val` are **unique**.
> - `p != q`
> - `p` and `q` will exist in the tree.

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%20236.%20Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree)

## Attempt 1 · 2026-09-14 Mon
⏱ start 16:07 → first submit 16:28 · coding 21 min · 2 submitted (no AC yet) · 16 runs · 36 min on problem

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 2 · 2026-09-23 Wed
⏱ start 13:35 → first submit 13:52 · coding 17 min → AC 14:03 · 4 submits / 1 AC · 9 runs

### ✅ Accepted · Python · 14:03 (229 ms · 64.9 MB)
> [!success]- Code
> ```python
> # Definition for a binary tree node.
> # class TreeNode(object):
> #     def __init__(self, x):
> #         self.val = x
> #         self.left = None
> #         self.right = None
>
> class Solution(object):
>     def lowestCommonAncestor(self, root, p, q):
>         """
>         :type root: TreeNode
>         :type p: TreeNode
>         :type q: TreeNode
>         :rtype: TreeNode
>
>         bfs and build an adj list of node:parent
>         trace p parents and add to a set
>         trace q parent until you find a node in the set
>         if you get to root without finding node in the set return None
>         """
>
>         if not root:
>             return None
>         if p == q:
>             return p
>
>         adj = {root: None}
>         que = deque()
>         que.append(root)
>
>         while que:
>             node = que.popleft()
>             if node.left:
>                 que.append(node.left)
>                 adj[node.left] = node
>             if node.right:
>                 que.append(node.right)
>                 adj[node.right] = node
>         visited = set()
>         visited.add(p)
>         curr = p
>         while curr is not None:
>             parent = adj[curr]
>             visited.add(parent)
>             curr = parent
>
>         curr = q
>         while curr is not None:
>             if curr in visited:
>                 return curr
>             parent = adj[curr]
>             curr = parent
>
>         # print(adj)
>         return None
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
