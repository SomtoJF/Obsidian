---
id: 234
title: "Palindrome Linked List"
url: https://leetcode.com/problems/palindrome-linked-list/description/
difficulty: Easy
tags: [Linked List, Two Pointers, Stack, Recursion]
attempts: 1
first_attempt: 2026-08-22
last_attempt: 2026-08-22
total_submissions: 1
total_ac: 1
total_runs: 5
---

# 234. Palindrome Linked List

> Easy · Linked List / Two Pointers / Stack / Recursion · [Problem link](https://leetcode.com/problems/palindrome-linked-list/description/)


> [!abstract]- Problem
> Given the `head` of a singly linked list, return `true`*if it is a**palindrome**or*`false`*otherwise*.
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2021/03/03/pal1linked-list.jpg)
> ```
> Input: head = [1,2,2,1]
> Output: true
> ```
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2021/03/03/pal2linked-list.jpg)
> ```
> Input: head = [1,2]
> Output: false
> ```
>
> **Constraints:**
>
> - The number of nodes in the list is in the range `[1, 105]`.
> - `0 <= Node.val <= 9`
>
> **Follow up:** Could you do it in `O(n)` time and `O(1)` space?

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%20234.%20Palindrome%20Linked%20List)

## Attempt 1 · 2026-08-22 Sat
⏱ start 23:44 → first submit 23:51 · coding 7 min → AC 23:51 · 1 submit / 1 AC · 5 runs · 19 min on problem

### ✅ Accepted · Python · 23:51 (162 ms · 66.1 MB)
> [!success]- Code
> ```python
> # Definition for singly-linked list.
> # class ListNode(object):
> #     def __init__(self, val=0, next=None):
> #         self.val = val
> #         self.next = next
> class Solution(object):
>     def isPalindrome(self, head):
>         """
>         :type head: Optional[ListNode]
>         :rtype: bool
>         """
>
>         fast = head
>         slow = head
>         while fast.next and fast.next.next:
>             slow = slow.next
>             fast = fast.next.next
>
>         second = slow.next
>         slow.next = None
>
>         dummy = ListNode(0)
>         while second:
>             dummyNext = dummy.next
>             secondNext = second.next
>
>             dummy.next = second
>             second.next = dummyNext
>
>             second = secondNext
>
>         second = dummy.next
>         while second:
>             if second.val != head.val: return False
>
>             second = second.next
>             head = head.next
>         return True
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
