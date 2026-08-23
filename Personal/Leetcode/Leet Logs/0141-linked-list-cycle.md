---
id: 141
title: "Linked List Cycle"
url: https://leetcode.com/problems/linked-list-cycle/description/
difficulty: Easy
tags: [Hash Table, Linked List, Two Pointers, Floyd's Cycle Finding Algorithm]
attempts: 1
first_attempt: 2026-08-22
last_attempt: 2026-08-22
total_submissions: 5
total_ac: 2
total_runs: 8
---

# 141. Linked List Cycle

> Easy · Hash Table / Linked List / Two Pointers / Floyd's Cycle Finding Algorithm · [Problem link](https://leetcode.com/problems/linked-list-cycle/description/)


> [!abstract]- Problem
> Given `head`, the head of a linked list, determine if the linked list has a cycle in it.
>
> There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. **Note that `pos` is not passed as a parameter**.
>
> Return `true`*if there is a cycle in the linked list*. Otherwise, return `false`.
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)
> ```
> Input: head = [3,2,0,-4], pos = 1
> Output: true
> Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
> ```
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png)
> ```
> Input: head = [1,2], pos = 0
> Output: true
> Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
> ```
>
> **Example 3:**
>
> ![](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png)
> ```
> Input: head = [1], pos = -1
> Output: false
> Explanation: There is no cycle in the linked list.
> ```
>
> **Constraints:**
>
> - The number of the nodes in the list is in the range `[0, 104]`.
> - `-105 <= Node.val <= 105`
> - `pos` is `-1` or a **valid index** in the linked-list.
>
> **Follow up:** Can you solve it using `O(1)` (i.e. constant) memory?

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%20141.%20Linked%20List%20Cycle)

## Attempt 1 · 2026-08-22 Sat
⏱ start 21:43 → first submit 21:48 · coding 5 min → AC 21:55 · 5 submits / 2 AC · 8 runs · 12 min on problem

### ✅ Accepted · Python · 21:55 (28 ms · 19.5 MB)
> [!success]- Code
> ```python
> # Definition for singly-linked list.
> # class ListNode(object):
> #     def __init__(self, x):
> #         self.val = x
> #         self.next = None
>
> class Solution(object):
>     def hasCycle(self, head):
>         """
>         :type head: ListNode
>         :rtype: bool
>         """
>         if head is None or head.next is None:
>             return False
>
>         fast = head.next
>         slow = head
>
>         while fast.next is not None and fast.next.next is not None:
>             if slow == fast:
>                 return True
>             slow = slow.next
>             fast = fast.next.next
>
>         return False
> ```

### ✅ Accepted · Python · 21:55 (36 ms · 19.5 MB)
> [!success]- Code
> ```python
> # Definition for singly-linked list.
> # class ListNode(object):
> #     def __init__(self, x):
> #         self.val = x
> #         self.next = None
>
> class Solution(object):
>     def hasCycle(self, head):
>         """
>         :type head: ListNode
>         :rtype: bool
>         """
>         if head is None or head.next is None:
>             return False
>
>         fast = head.next
>         slow = head
>
>         while fast.next is not None and fast.next.next is not None:
>             if slow == fast:
>                 print(slow, "\n\n")
>                 print(fast)
>                 return True
>             slow = slow.next
>             fast = fast.next.next
>
>         return False
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
