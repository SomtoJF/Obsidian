---
id: 143
title: "Reorder List"
url: https://leetcode.com/problems/reorder-list/description/
difficulty: Medium
tags: [Linked List, Two Pointers, Stack, Recursion]
attempts: 1
first_attempt: 2026-08-22
last_attempt: 2026-08-22
total_submissions: 1
total_ac: 1
total_runs: 11
---

# 143. Reorder List

> Medium · Linked List / Two Pointers / Stack / Recursion · [Problem link](https://leetcode.com/problems/reorder-list/description/)


> [!abstract]- Problem
> You are given the head of a singly linked-list. The list can be represented as:
>
> ```
> L0 → L1 → … → Ln - 1 → Ln
> ```
>
> *Reorder the list to be on the following form:*
>
> ```
> L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
> ```
>
> You may not modify the values in the list's nodes. Only nodes themselves may be changed.
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/03/04/reorder1linked-list.jpg)
> ```
> Input: head = [1,2,3,4]
> Output: [1,4,2,3]
> ```
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2021/03/09/reorder2-linked-list.jpg)
> ```
> Input: head = [1,2,3,4,5]
> Output: [1,5,2,4,3]
> ```
>
> **Constraints:**
>
> - The number of nodes in the list is in the range `[1, 5 * 104]`.
> - `1 <= Node.val <= 1000`

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%20143.%20Reorder%20List)

## Attempt 1 · 2026-08-22 Sat
⏱ start 17:16 → first submit 23:03 · coding 347 min → AC 23:03 · 1 submit / 1 AC · 11 runs · 388 min on problem

### ✅ Accepted · Python · 23:03 (11 ms · 30.1 MB)
> [!success]- Code
> ```python
> # Definition for singly-linked list.
> # class ListNode(object):
> #     def __init__(self, val=0, next=None):
> #         self.val = val
> #         self.next = next
> class Solution(object):
>     def reorderList(self, head):
>         """
>         :type head: Optional[ListNode]
>         :rtype: None Do not return anything, modify head in-place instead.
>         """
>         # find midpoint of list
>         fast = head
>         slow = head
>         while fast.next and fast.next.next:
>             slow = slow.next
>             fast = fast.next.next
>
>         second = slow.next
>         slow.next = None
>
>         # reverse the second half of the list
>         dummy = ListNode(0)
>         while second:
>             dummyNext = dummy.next
>             secondNext = second.next
>
>             dummy.next = second
>             second.next = dummyNext
>             second = secondNext
>
>         head2 = dummy.next
>         # weave the two lists
>         res = ListNode(0)
>         res_tail = res
>         while head or head2:
>             if head:
>                 headNext = head.next
>                 head.next = None
>
>                 res_tail.next = head
>                 head = headNext
>                 res_tail = res_tail.next
>             if head2:
>                 head2Next = head2.next
>                 head2.next = None
>
>                 res_tail.next = head2
>                 head2 = head2Next
>                 res_tail = res_tail.next
>
>         return res.next
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
