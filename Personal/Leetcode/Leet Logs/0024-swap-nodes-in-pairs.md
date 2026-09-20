---
id: 24
title: "Swap Nodes in Pairs"
url: https://leetcode.com/problems/swap-nodes-in-pairs/description/
difficulty: Medium
tags: [Linked List, Recursion]
attempts: 4
first_attempt: 2026-09-07
last_attempt: 2026-09-20
total_submissions: 1
total_ac: 1
total_runs: 13
---

# 24. Swap Nodes in Pairs

> Medium · Linked List / Recursion · [Problem link](https://leetcode.com/problems/swap-nodes-in-pairs/description/)


> [!abstract]- Problem
> Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
>
> **Example 1:**
>
> **Input:** head = [1,2,3,4]
>
> **Output:** [2,1,4,3]
>
> **Explanation:**
>
> ![](https://assets.leetcode.com/uploads/2020/10/03/swap_ex1.jpg)
>
> **Example 2:**
>
> **Input:** head = []
>
> **Output:** []
>
> **Example 3:**
>
> **Input:** head = [1]
>
> **Output:** [1]
>
> **Example 4:**
>
> **Input:** head = [1,2,3]
>
> **Output:** [2,1,3]
>
> **Constraints:**
>
> - The number of nodes in the list is in the range `[0, 100]`.
> - `0 <= Node.val <= 100`

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%2024.%20Swap%20Nodes%20in%20Pairs)

## Attempt 1 · 2026-09-07 Mon
⏱ start 23:11 · 5 runs · 29 min on problem

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 2 · 2026-09-08 Tue
⏱ start 20:58 · 1 min on problem

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 3 · 2026-09-13 Sun
⏱ start 11:54 · 2 runs · 3 min on problem

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 4 · 2026-09-20 Sun
⏱ start 18:34 → first submit 18:59 · coding 25 min → AC 18:59 · 1 submit / 1 AC · 6 runs

### ✅ Accepted · Python · 18:59 (0 ms · 12.5 MB)
> [!success]- Code
> ```python
> # Definition for singly-linked list.
> # class ListNode(object):
> #     def __init__(self, val=0, next=None):
> #         self.val = val
> #         self.next = next
> class Solution(object):
>     def swapPairs(self, head):
>         """
>         :type head: Optional[ListNode]
>         :rtype: Optional[ListNode]
>
>         1 -> 2 -> 3 = 2 -> 1 -> 3
>         1 = 1
>         1 -> 2 = 2 -> 1
>
>         check that list has at least 2 none-None nodes
>         makeshift do while loop top make sure first iteration always executes
>         """
>         if not head or not head.next:
>             return head
>
>         slow = head
>         fast = head.next
>         dummy = ListNode(0)
>         dummytail = dummy
>         while fast:
>             fastNext = fast.next
>
>             fast.next = slow
>             slow.next = None
>
>             dummytail.next = fast
>             dummytail = dummytail.next.next
>
>             if fastNext is None or fastNext.next is None:
>                 if fastNext:
>                     dummytail.next = fastNext
>                 return dummy.next
>
>             else:
>                 slow = fastNext
>                 fast = fastNext.next
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
