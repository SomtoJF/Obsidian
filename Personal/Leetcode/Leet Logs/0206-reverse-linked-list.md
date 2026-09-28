---
id: 206
title: "Reverse Linked List"
url: https://leetcode.com/problems/reverse-linked-list/description/
difficulty: Easy
tags: [Linked List, Recursion]
attempts: 2
first_attempt: 2026-08-22
last_attempt: 2026-09-25
total_submissions: 2
total_ac: 2
total_runs: 2
---

# 206. Reverse Linked List

> Easy · Linked List / Recursion · [Problem link](https://leetcode.com/problems/reverse-linked-list/description/)


> [!abstract]- Problem
> Given the `head` of a singly linked list, reverse the list, and return *the reversed list*.
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)
> ```
> Input: head = [1,2,3,4,5]
> Output: [5,4,3,2,1]
> ```
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg)
> ```
> Input: head = [1,2]
> Output: [2,1]
> ```
>
> **Example 3:**
>
> ```
> Input: head = []
> Output: []
> ```
>
> **Constraints:**
>
> - The number of nodes in the list is the range `[0, 5000]`.
> - `-5000 <= Node.val <= 5000`
>
> **Follow up:** A linked list can be reversed either iteratively or recursively. Could you implement both?

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%20206.%20Reverse%20Linked%20List)

## Attempt 1 · 2026-08-22 Sat
⏱ start 16:56 → first submit 17:00 · coding 4 min → AC 17:00 · 1 submit / 1 AC · 1 run · 20 min on problem

### ✅ Accepted · Python · 17:00 (0 ms · 14.3 MB)
> [!success]- Code
> ```python
> # Definition for singly-linked list.
> # class ListNode(object):
> #     def __init__(self, val=0, next=None):
> #         self.val = val
> #         self.next = next
> class Solution(object):
>     def reverseList(self, head):
>         """
>         :type head: Optional[ListNode]
>         :rtype: Optional[ListNode]
>         """
>         dummy = ListNode(0)
>         while head is not None:
>             nextHead = head.next
>             current = head
>             dummyNext = dummy.next
>             current.next = dummyNext
>             dummy.next = current
>             head = nextHead
>
>         return dummy.next
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 2 · 2026-09-25 Fri
⏱ start 23:01 → first submit 23:03 · coding 2 min → AC 23:03 · 1 submit / 1 AC · 1 run · 10 min on problem

### ✅ Accepted · Python · 23:03 (3 ms · 14.5 MB)
> [!success]- Code
> ```python
> # Definition for singly-linked list.
> # class ListNode(object):
> #     def __init__(self, val=0, next=None):
> #         self.val = val
> #         self.next = next
> class Solution(object):
>     def reverseList(self, head):
>         """
>         :type head: Optional[ListNode]
>         :rtype: Optional[ListNode]
>         """
>         dummy = None
>         node = head
>         while node:
>             nodeNext = node.next
>             node.next = dummy
>             dummy = node
>             node = nodeNext
>
>         return dummy
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
