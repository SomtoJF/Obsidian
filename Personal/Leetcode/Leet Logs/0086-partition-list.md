---
id: 86
title: "Partition List"
url: https://leetcode.com/problems/partition-list/description/
difficulty: Medium
tags: [Linked List, Two Pointers]
attempts: 2
first_attempt: 2026-08-22
last_attempt: 2026-09-11
total_submissions: 2
total_ac: 2
total_runs: 10
---

# 86. Partition List

> Medium · Linked List / Two Pointers · [Problem link](https://leetcode.com/problems/partition-list/description/)


> [!abstract]- Problem
> Given the `head` of a linked list and a value `x`, partition it such that all nodes **less than** `x` come before nodes **greater than or equal** to `x`.
>
> You should **preserve** the original relative order of the nodes in each of the two partitions.
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/01/04/partition.jpg)
> ```
> Input: head = [1,4,3,2,5,2], x = 3
> Output: [1,2,2,4,3,5]
> ```
>
> **Example 2:**
>
> ```
> Input: head = [2,1], x = 2
> Output: [1,2]
> ```
>
> **Constraints:**
>
> - The number of nodes in the list is in the range `[0, 200]`.
> - `-100 <= Node.val <= 100`
> - `-200 <= x <= 200`

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%2086.%20Partition%20List)

## Attempt 1 · 2026-08-22 Sat
⏱ start 16:17 → first submit 16:25 · coding 8 min → AC 16:25 · 1 submit / 1 AC · 3 runs · 24 min on problem

### ✅ Accepted · Python · 16:25 (3 ms · 12.5 MB)
> [!success]- Code
> ```python
> # Definition for singly-linked list.
> # class ListNode(object):
> #     def __init__(self, val=0, next=None):
> #         self.val = val
> #         self.next = next
> class Solution(object):
>     def partition(self, head, x):
>         """
>         :type head: Optional[ListNode]
>         :type x: int
>         :rtype: Optional[ListNode]
>         """
>         current = head
>         less_dummy = ListNode(0)
>         more_dummy = ListNode(0)
>         more_tail = more_dummy
>         less_tail = less_dummy
>
>         while current is not None:
>             next_current = current.next
>             temp = current
>             temp.next = None
>             if current.val < x:
>                 less_tail.next = temp
>                 less_tail = less_tail.next
>             else:
>                 more_tail.next = temp
>                 more_tail = more_tail.next
>             current = next_current
>
>         less_tail.next = more_dummy.next
>         return less_dummy.next
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-





## Attempt 2 · 2026-09-11 Fri
⏱ start 14:19 → first submit 14:37 · coding 19 min → AC 14:37 · 1 submit / 1 AC · 7 runs · 19 min on problem

### ✅ Accepted · Python · 14:37 (4 ms · 12.3 MB)
> [!success]- Code
> ```python
> # Definition for singly-linked list.
> # class ListNode(object):
> #     def __init__(self, val=0, next=None):
> #         self.val = val
> #         self.next = next
> class Solution(object):
>     def partition(self, head, x):
>         """
>         :type head: Optional[ListNode]
>         :type x: int
>         :rtype: Optional[ListNode]
>
>         we will use a dummy node
>         iterate through the main list
>             every node less than x add to tail of dummy and remove from main list
>
>         in the end we will append the dummy to the main (the main will have all the less nodes removed)
>         """
>
>         dummy = ListNode(0)
>         dummytail = dummy
>         # greater dummy
>         greater = ListNode(0)
>         greatertail = greater
>         main = head
>
>         while main:
>             mainnext = main.next
>             main.next = None
>             if main.val < x:
>                 print(main.val)
>                 dummytail.next = main
>                 dummytail = dummytail.next
>             else:
>                 greatertail.next = main
>                 greatertail = greatertail.next
>             main = mainnext
>
>         if dummy.next is None:
>             return head
>
>         dummytail.next = greater.next
>         return dummy.next
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
