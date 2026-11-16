---
id: 61
title: "Rotate List"
url: https://leetcode.com/problems/rotate-list/description/
difficulty: Medium
tags: [Linked List, Two Pointers]
attempts: 2
first_attempt: 2026-09-07
last_attempt: 2026-11-16
total_submissions: 5
total_ac: 2
total_runs: 18
---

# 61. Rotate List

> Medium · Linked List / Two Pointers · [Problem link](https://leetcode.com/problems/rotate-list/description/)


> [!abstract]- Problem
> Given the `head` of a linked list, rotate the list to the right by `k` places.
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2020/11/13/rotate1.jpg)
> ```
> Input: head = [1,2,3,4,5], k = 2
> Output: [4,5,1,2,3]
> ```
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2020/11/13/roate2.jpg)
> ```
> Input: head = [0,1,2], k = 4
> Output: [2,0,1]
> ```
>
> **Constraints:**
>
> - The number of nodes in the list is in the range `[0, 500]`.
> - `-100 <= Node.val <= 100`
> - `0 <= k <= 2 * 109`

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%2061.%20Rotate%20List)

## Attempt 1 · 2026-09-07 Mon
⏱ start 22:44 → first submit 23:02 · coding 19 min → AC 23:03 · 2 submits / 1 AC · 14 runs · 27 min on problem

### ✅ Accepted · Python · 23:03 (0 ms · 12.5 MB)
> [!success]- Code
> ```python
> # Definition for singly-linked list.
> # class ListNode(object):
> #     def __init__(self, val=0, next=None):
> #         self.val = val
> #         self.next = next
> class Solution(object):
>     def rotateRight(self, head, k):
>         """
>         :type head: Optional[ListNode]
>         :type k: int
>         :rtype: Optional[ListNode]
>         """
>         if not head or not head.next:
>             return head
>
>         length = 1
>         ptr = head
>         while ptr.next:
>             ptr = ptr.next
>             length += 1
>
>         if k >= length:
>             k = k % length
>
>         # print(k)
>         # print(length)
>         slow = head
>         fast = head
>         i = 0
>         while i < k:
>             fast = fast.next
>             i += 1
>
>         while fast.next:
>             slow = slow.next
>             fast = fast.next
>
>         newHead = slow.next
>         nhTail = newHead
>         slow.next = None
>
>         # attach tail of newHead to head
>         while nhTail and nhTail.next:
>             nhTail = nhTail.next
>
>         if not nhTail:
>             return head
>         nhTail.next = head
>
>         return newHead
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 2 · 2026-11-16 Mon
⏱ start 13:21 → first submit 13:30 · coding 9 min → AC 13:35 · 3 submits / 1 AC · 4 runs · 17 min on problem

### ✅ Accepted · Python3 · 13:35 (0 ms · 19.2 MB)
> [!success]- Code
> ```python
> # Definition for singly-linked list.
> # class ListNode:
> #     def __init__(self, val=0, next=None):
> #         self.val = val
> #         self.next = next
> class Solution:
>     def rotateRight(self, head: ListNode | None, k: int) -> ListNode | None:
>         if not head or k == 0:
>             return head
>         slow = head
>         fast = head
>
>         length = 0
>         while fast:
>             length = length + 1
>             fast = fast.next
>
>         fast = head
>         shift = k % length
>         if shift == 0:
>             return head
>         for i in range(shift):
>             fast = fast.next
>
>         while fast and fast.next:
>             slow = slow.next
>             fast = fast.next
>
>         slownext = slow.next
>         slow.next = None
>         if not fast:
>             return head
>         fast.next = head
>         return slownext
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
