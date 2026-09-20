---
id: 23
title: "Merge k Sorted Lists"
url: https://leetcode.com/problems/merge-k-sorted-lists/description/
difficulty: Hard
tags: [Linked List, Divide and Conquer, Heap (Priority Queue), Merge Sort, Tournament Sort]
attempts: 3
first_attempt: 2026-08-23
last_attempt: 2026-09-16
total_submissions: 3
total_ac: 1
total_runs: 23
---

# 23. Merge k Sorted Lists

> Hard · Linked List / Divide and Conquer / Heap (Priority Queue) / Merge Sort / Tournament Sort · [Problem link](https://leetcode.com/problems/merge-k-sorted-lists/description/)


> [!abstract]- Problem
> You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.
>
> *Merge all the linked-lists into one sorted linked-list and return it.*
>
> **Example 1:**
>
> ```
> Input: lists = [[1,4,5],[1,3,4],[2,6]]
> Output: [1,1,2,3,4,4,5,6]
> Explanation: The linked-lists are:
> [
>   1->4->5,
>   1->3->4,
>   2->6
> ]
> merging them into one sorted linked list:
> 1->1->2->3->4->4->5->6
> ```
>
> **Example 2:**
>
> ```
> Input: lists = []
> Output: []
> ```
>
> **Example 3:**
>
> ```
> Input: lists = [[]]
> Output: []
> ```
>
> **Constraints:**
>
> - `k == lists.length`
> - `0 <= k <= 104`
> - `0 <= lists[i].length <= 500`
> - `-104 <= lists[i][j] <= 104`
> - `lists[i]` is sorted in **ascending order**.
> - The sum of `lists[i].length` will not exceed `104`.

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%2023.%20Merge%20k%20Sorted%20Lists)

## Attempt 1 · 2026-08-23 Sun
⏱ start 00:04 → first submit 00:30 · coding 27 min · 1 submitted (no AC yet) · 8 runs · 27 min on problem

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 2 · 2026-09-05 Sat
⏱ start 21:11 · 8 runs · 25 min on problem

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 3 · 2026-09-16 Wed
⏱ start 22:39 → first submit 23:04 · coding 26 min → AC 23:05 · 2 submits / 1 AC · 7 runs · 33 min on problem

### ✅ Accepted · Python · 23:05 (27 ms · 18 MB)
> [!success]- Code
> ```python
> # Definition for singly-linked list.
> # class ListNode(object):
> #     def __init__(self, val=0, next=None):
> #         self.val = val
> #         self.next = next
> class Solution(object):
>     def mergeKLists(self, lists):
>         """
>         :type lists: List[Optional[ListNode]]
>         :rtype: Optional[ListNode]
>         """
>         if not lists: return None
>         if len(lists) < 2: return lists[0]
>
>         while len(lists) > 1:
>             curr_res = []
>             i = 0
>             j = 1
>             if len(lists) % 2 == 1:
>                 # pop so we have a list of even length
>                 curr_res.append(lists.pop())
>
>             while j < len(lists):
>                 merged = self.mergetwo(lists[i], lists[j])
>                 curr_res.append(merged)
>
>                 i += 2
>                 j += 2
>
>             lists = curr_res
>
>         return lists[0]
>
>     def mergetwo(self, l1, l2):
>         dh = ListNode(0)
>         dt = dh
>
>         while l1 and l2:
>             if l1.val <= l2.val:
>                 l1next = l1.next
>                 l1.next = None
>                 dt.next = l1
>                 dt = dt.next
>                 l1 = l1next
>
>             elif l2.val < l1.val:
>                 l2next = l2.next
>                 l2.next = None
>                 dt.next = l2
>                 dt = dt.next
>                 l2 = l2next
>
>         if not l2 and l1:
>             dt.next = l1
>         elif not l1 and l2:
>             dt.next = l2
>         return dh.next
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
