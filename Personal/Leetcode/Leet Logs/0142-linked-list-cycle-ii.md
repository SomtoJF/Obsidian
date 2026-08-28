---
id: 142
title: "Linked List Cycle II"
url: https://leetcode.com/problems/linked-list-cycle-ii/description/
difficulty: Medium
tags: [Hash Table, Linked List, Two Pointers, Floyd's Cycle Finding Algorithm]
attempts: 1
first_attempt: 2026-08-24
last_attempt: 2026-08-24
total_submissions: 1
total_ac: 1
total_runs: 8
---

# 142. Linked List Cycle II

> Medium · Hash Table / Linked List / Two Pointers / Floyd's Cycle Finding Algorithm · [Problem link](https://leetcode.com/problems/linked-list-cycle-ii/description/)


> [!abstract]- Problem
> Given the `head` of a linked list, return *the node where the cycle begins. If there is no cycle, return*`null`.
>
> There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to (**0-indexed**). It is `-1` if there is no cycle. **Note that** `pos` **is not passed as a parameter**.
>
> **Do not modify** the linked list.
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)
> ```
> Input: head = [3,2,0,-4], pos = 1
> Output: tail connects to node index 1
> Explanation: There is a cycle in the linked list, where tail connects to the second node.
> ```
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png)
> ```
> Input: head = [1,2], pos = 0
> Output: tail connects to node index 0
> Explanation: There is a cycle in the linked list, where tail connects to the first node.
> ```
>
> **Example 3:**
>
> ![](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png)
> ```
> Input: head = [1], pos = -1
> Output: no cycle
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

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%20142.%20Linked%20List%20Cycle%20II)

## Attempt 1 · 2026-08-24 Mon
⏱ start 11:08 → first submit 11:26 · coding 17 min → AC 11:26 · 1 submit / 1 AC · 8 runs · 17 min on problem

### ✅ Accepted · Python · 11:26 (31 ms · 18.8 MB)
> [!success]- Code
> ```python
> # Definition for singly-linked list.
> # class ListNode(object):
> #     def __init__(self, x):
> #         self.val = x
> #         self.next = None
>
> class Solution(object):
>     def detectCycle(self, head):
>         """
>         :type head: ListNode
>         :rtype: ListNode
>
>         detect collision
>         """
>         if not head or not head.next:
>             return None
>
>         fast = head
>         slow = head
>         hasCycle = False
>         while fast.next and fast.next.next:
>             slow = slow.next
>             fast = fast.next.next
>             if slow == fast:
>                 hasCycle = True
>                 break
>
>         if hasCycle == False: return None
>
>         start = head
>         while start != fast:
>             start = start.next
>             fast = fast.next
>
>         return fast
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
