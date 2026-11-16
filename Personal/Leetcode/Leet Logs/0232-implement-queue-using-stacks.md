---
id: 232
title: "Implement Queue using Stacks"
url: https://leetcode.com/problems/implement-queue-using-stacks/description/
difficulty: Easy
tags: [Stack, Design, Queue]
attempts: 2
first_attempt: 2026-08-27
last_attempt: 2026-11-16
total_submissions: 5
total_ac: 4
total_runs: 16
---

# 232. Implement Queue using Stacks

> Easy · Stack / Design / Queue · [Problem link](https://leetcode.com/problems/implement-queue-using-stacks/description/)


> [!abstract]- Problem
> Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).
>
> Implement the `MyQueue` class:
>
> - `void push(int x)` Pushes element x to the back of the queue.
> - `int pop()` Removes the element from the front of the queue and returns it.
> - `int peek()` Returns the element at the front of the queue.
> - `boolean empty()` Returns `true` if the queue is empty, `false` otherwise.
>
> **Notes:**
>
> - You must use **only** standard operations of a stack, which means only `push to top`, `peek/pop from top`, `size`, and `is empty` operations are valid.
> - Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
>
> **Example 1:**
>
> ```
> Input
> ["MyQueue", "push", "push", "peek", "pop", "empty"]
> [[], [1], [2], [], [], []]
> Output
> [null, null, null, 1, 1, false]
>
> Explanation
> MyQueue myQueue = new MyQueue();
> myQueue.push(1); // queue is: [1]
> myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
> myQueue.peek(); // return 1
> myQueue.pop(); // return 1, queue is [2]
> myQueue.empty(); // return false
> ```
>
> **Constraints:**
>
> - `1 <= x <= 9`
> - At most `100` calls will be made to `push`, `pop`, `peek`, and `empty`.
> - All the calls to `pop` and `peek` are valid.
>
> **Follow-up:** Can you implement the queue such that each operation is **amortized** `O(1)` time complexity? In other words, performing `n` operations will take overall `O(n)` time even if one of those operations may take longer.

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%20232.%20Implement%20Queue%20using%20Stacks)

## Attempt 1 · 2026-08-27 Thu
⏱ start 15:58 → first submit 16:15 · coding 17 min → AC 16:15 · 3 submits / 2 AC · 7 runs · 19 min on problem

### ✅ Accepted · Python · 16:17 (10 ms · 12.5 MB)
> [!success]- Code
> ```python
> """
> use only two stacks
> a <- b <- c <- d
> """
> class MyQueue(object):
>
>     def __init__(self):
>         self.stack = []
>         self.stack2 = []
>
>     def push(self, x):
>         """
>         :type x: int
>         :rtype: None
>         """
>         self.stack.append(x)
>         print(self.stack)
>
>     def pop(self):
>         """
>         :rtype: int
>         """
>         while len(self.stack) > 0:
>             self.stack2.append(self.stack.pop())
>         val = self.stack2.pop()
>         while len(self.stack2) > 0:
>             self.stack.append(self.stack2.pop())
>         return val
>
>
>     def peek(self):
>         """
>         :rtype: int
>         """
>         while len(self.stack) > 0:
>             self.stack2.append(self.stack.pop())
>         val = self.stack2.pop()
>         self.stack2.append(val)
>         while len(self.stack2) > 0:
>             self.stack.append(self.stack2.pop())
>         return val
>
>
>
>     def empty(self):
>         """
>         :rtype: bool
>         """
>         return len(self.stack) == 0
>
>
>
> # Your MyQueue object will be instantiated and called as such:
> # obj = MyQueue()
> # obj.push(x)
> # param_2 = obj.pop()
> # param_3 = obj.peek()
> # param_4 = obj.empty()
> ```

### ✅ Accepted · Python · 16:15 (5 ms · 12.3 MB)
> [!success]- Code
> ```python
> """
> use only two stacks
> a <- b <- c <- d
> """
> class MyQueue(object):
>
>     def __init__(self):
>         self.stack = []
>         self.stack2 = []
>
>     def push(self, x):
>         """
>         :type x: int
>         :rtype: None
>         """
>         self.stack.append(x)
>         print(self.stack)
>
>     def pop(self):
>         """
>         :rtype: int
>         """
>         while len(self.stack) > 0:
>             self.stack2.append(self.stack.pop())
>         val = self.stack2.pop()
>         while len(self.stack2) > 0:
>             self.stack.append(self.stack2.pop())
>         return val
>
>
>     def peek(self):
>         """
>         :rtype: int
>         """
>         return self.stack[0]
>
>
>     def empty(self):
>         """
>         :rtype: bool
>         """
>         return len(self.stack) == 0
>
>
>
> # Your MyQueue object will be instantiated and called as such:
> # obj = MyQueue()
> # obj.push(x)
> # param_2 = obj.pop()
> # param_3 = obj.peek()
> # param_4 = obj.empty()
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 2 · 2026-11-16 Mon
⏱ start 13:04 → first submit 13:16 · coding 12 min → AC 13:16 · 2 submits / 2 AC · 9 runs

### ✅ Accepted · Python3 · 13:17 (0 ms · 19.5 MB)
> [!success]- Code
> ```python
> class MyQueue:
>
>     def __init__(self):
>         self.s1 = []
>         self.s2 = []
>
>     def push(self, x: int) -> None:
>         self.s1.append(x)
>
>     def pop(self) -> int:
>         res = None
>         while len(self.s1) > 0:
>             self.s2.append(self.s1.pop())
>         val = self.s2.pop()
>         if len(self.s1) == 0 and val:
>             res = val
>         while len(self.s2) > 0:
>             self.s1.append(self.s2.pop())
>         return res
>
>     def peek(self) -> int:
>         res = None
>         while len(self.s1) > 0:
>             self.s2.append(self.s1.pop())
>         val = self.s2.pop()
>         if len(self.s1) == 0 and val:
>             res = val
>             self.s1.append(val)
>         while len(self.s2) > 0:
>             self.s1.append(self.s2.pop())
>         return res
>
>     def empty(self) -> bool:
>         if len(self.s1) == 0:
>             return True
>         return False
>
>
>
> # Your MyQueue object will be instantiated and called as such:
> # obj = MyQueue()
> # obj.push(x)
> # param_2 = obj.pop()
> # param_3 = obj.peek()
> # param_4 = obj.empty()
> ```

### ✅ Accepted · Python3 · 13:16 (0 ms · 19.4 MB)
> [!success]- Code
> ```python
> class MyQueue:
>
>     def __init__(self):
>         self.s1 = []
>         self.s2 = []
>
>     def push(self, x: int) -> None:
>         self.s1.append(x)
>
>     def pop(self) -> int:
>         val = self.s1.pop(0)
>         return val
>
>     def peek(self) -> int:
>         res = None
>         while len(self.s1) > 0:
>             self.s2.append(self.s1.pop())
>         val = self.s2.pop()
>         if len(self.s1) == 0 and val:
>             res = val
>             self.s1.append(val)
>         while len(self.s2) > 0:
>             self.s1.append(self.s2.pop())
>         return res
>
>     def empty(self) -> bool:
>         if len(self.s1) == 0:
>             return True
>         return False
>
>
>
> # Your MyQueue object will be instantiated and called as such:
> # obj = MyQueue()
> # obj.push(x)
> # param_2 = obj.pop()
> # param_3 = obj.peek()
> # param_4 = obj.empty()
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
