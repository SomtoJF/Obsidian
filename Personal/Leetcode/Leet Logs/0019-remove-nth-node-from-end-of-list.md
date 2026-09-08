---
id: 19
title: "Remove Nth Node From End of List"
url: https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
difficulty: Medium
tags: [Linked List, Two Pointers]
attempts: 1
first_attempt: 2026-09-05
last_attempt: 2026-09-05
total_submissions: 4
total_ac: 1
total_runs: 5
---

# 19. Remove Nth Node From End of List

> Medium · Linked List / Two Pointers · [Problem link](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)


> [!abstract]- Problem
> Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg)
> ```
> Input: head = [1,2,3,4,5], n = 2
> Output: [1,2,3,5]
> ```
>
> **Example 2:**
>
> ```
> Input: head = [1], n = 1
> Output: []
> ```
>
> **Example 3:**
>
> ```
> Input: head = [1,2], n = 1
> Output: [1]
> ```
>
> **Constraints:**
>
> - The number of nodes in the list is `sz`.
> - `1 <= sz <= 30`
> - `0 <= Node.val <= 100`
> - `1 <= n <= sz`
>
> **Follow up:** Could you do this in one pass?

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%2019.%20Remove%20Nth%20Node%20From%20End%20of%20List)

## Attempt 1 · 2026-09-05 Sat
⏱ start 20:29 → first submit 20:35 · coding 6 min → AC 20:40 · 4 submits / 1 AC · 5 runs · 42 min on problem

### ✅ Accepted · Python · 20:40 (0 ms · 12.4 MB)
> [!success]- Code
> ```python
> # Definition for singly-linked list.
> # class ListNode(object):
> #     def __init__(self, val=0, next=None):
> #         self.val = val
> #         self.next = next
> class Solution(object):
>     def removeNthFromEnd(self, head, n):
>         """
>         :type head: Optional[ListNode]
>         :type n: int
>         :rtype: Optional[ListNode]
>         """
>         if not head:
>             return head
>
>         fast = head
>         slow = head
>         slowPrev = None
>         i = 0
>         while i < n and fast:
>             fast = fast.next
>             i += 1
>
>         while fast:
>             fast = fast.next
>             slowPrev = slow
>             slow = slow.next
>
>         if not slowPrev:
>             return slow.next
>         slowPrev.next = slow.next
>         return head
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
