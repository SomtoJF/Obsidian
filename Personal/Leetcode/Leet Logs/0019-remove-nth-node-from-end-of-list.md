---
id: 19
title: "Remove Nth Node From End of List"
url: https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
difficulty: Medium
tags: [Linked List, Two Pointers]
attempts: 4
first_attempt: 2026-09-05
last_attempt: 2026-11-20
total_submissions: 9
total_ac: 4
total_runs: 19
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


## Attempt 2 · 2026-09-11 Fri
⏱ start 14:12 → first submit 14:17 · coding 5 min → AC 14:17 · 1 submit / 1 AC · 2 runs · 6 min on problem

### ✅ Accepted · Python · 14:17 (0 ms · 12.4 MB)
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
>
>         fast = head
>         slow = head
>         slowPrev = None
>
>         i = 0
>         while fast and i < n:
>             i += 1
>             fast = fast.next
>
>         while fast:
>             fast = fast.next
>             slowPrev = slow
>             slow = slow.next
>
>         if slowPrev is None:
>             return slow.next
>
>         slowPrev.next = slow.next
>         return head
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 3 · 2026-11-16 Mon
⏱ start 17:51 → first submit 18:06 · coding 15 min → AC 18:20 · 3 submits / 1 AC · 9 runs · 35 min on problem

### ✅ Accepted · Python3 · 18:20 (0 ms · 19.2 MB)
> [!success]- Code
> ```python
> # Definition for singly-linked list.
> # class ListNode:
> #     def __init__(self, val=0, next=None):
> #         self.val = val
> #         self.next = next
> class Solution:
>     def removeNthFromEnd(self, head: ListNode | None, n: int) -> ListNode | None:
>         if not head:
>             return head
>
>         if n == 0:
>             return head.next
>
>         fast = head
>         slow = head
>         slowprev = None
>
>         i = 1
>         while fast and i <= n:
>             i = i + 1
>             fast = fast.next
>
>         while fast:
>             slowprev = slow
>             slow = slow.next
>             fast = fast.next
>
>         if not slowprev:
>             return slow.next
>         # print("slow", slow)
>         # print("slowprev", slowprev)
>         slowprev.next = slow.next
>         return head
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 4 · 2026-11-20 Fri
⏱ start 22:51 → first submit 22:56 · coding 5 min → AC 22:56 · 1 submit / 1 AC · 3 runs · 6 min on problem

### ✅ Accepted · Python3 · 22:56 (0 ms · 19.3 MB)
> [!success]- Code
> ```python
> # Definition for singly-linked list.
> # class ListNode:
> #     def __init__(self, val=0, next=None):
> #         self.val = val
> #         self.next = next
> class Solution:
>     def removeNthFromEnd(self, head: ListNode | None, n: int) -> ListNode | None:
>         if not head:
>             return head
>
>         fast = head
>         slow = head
>         slowprev = None
>         for x in range(0, n):
>             fast = fast.next
>
>         while fast:
>             slowprev = slow
>             slow = slow.next
>             fast = fast.next
>
>         if not slowprev:
>             return slow.next
>
>         slowprev.next = slow.next
>         return head
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
