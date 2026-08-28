---
id: 155
title: "Min Stack"
url: https://leetcode.com/problems/min-stack/description/
difficulty: Medium
tags: [Stack, Design]
attempts: 1
first_attempt: 2026-08-27
last_attempt: 2026-08-27
total_submissions: 1
total_ac: 1
total_runs: 19
---

# 155. Min Stack

> Medium · Stack / Design · [Problem link](https://leetcode.com/problems/min-stack/description/)


> [!abstract]- Problem
> Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
>
> Implement the `MinStack` class:
>
> - `MinStack()` initializes the stack object.
> - `void push(int value)` pushes the element `value` onto the stack.
> - `void pop()` removes the element on the top of the stack.
> - `int top()` gets the top element of the stack.
> - `int getMin()` retrieves the minimum element in the stack.
>
> You must implement a solution with `O(1)` time complexity for each function.
>
> **Example 1:**
>
> ```
> Input
> ["MinStack","push","push","push","getMin","pop","top","getMin"]
> [[],[-2],[0],[-3],[],[],[],[]]
>
> Output
> [null,null,null,null,-3,null,0,-2]
>
> Explanation
> MinStack minStack = new MinStack();
> minStack.push(-2);
> minStack.push(0);
> minStack.push(-3);
> minStack.getMin(); // return -3
> minStack.pop();
> minStack.top();    // return 0
> minStack.getMin(); // return -2
> ```
>
> **Constraints:**
>
> - `-231 <= val <= 231 - 1`
> - Methods `pop`, `top` and `getMin` operations will always be called on **non-empty** stacks.
> - At most `3 * 104` calls will be made to `push`, `pop`, `top`, and `getMin`.

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%20155.%20Min%20Stack)

## Attempt 1 · 2026-08-27 Thu
⏱ start 15:26 → first submit 15:48 · coding 22 min → AC 15:48 · 1 submit / 1 AC · 19 runs

### ✅ Accepted · Python · 15:48 (599 ms · 29.8 MB)
> [!success]- Code
> ```python
> class StackNode(ListNode):
>     def __init__(self, value):
>         super(StackNode, self).__init__(value)
>         self.min_so_far = None
>         # self.val = value
>
> class MinStack(object):
>
>     def __init__(self):
>         self.stack = None
>
>     def push(self, value):
>         """
>         :type value: int
>         :rtype: None
>         """
>         newNode = StackNode(value)
>         if self.stack is None or newNode.val <= self.stack.min_so_far:
>             newNode.min_so_far = value
>             print(newNode.min_so_far)
>         else:
>             newNode.min_so_far = self.stack.min_so_far
>         newNode.next = self.stack
>         self.stack = newNode
>         # print(self.stack)
>
>     def pop(self):
>         """
>         :rtype: None
>         """
>         if self.stack is None: return None
>         val = self.stack.val
>         self.stack = self.stack.next
>         return val
>
>
>     def top(self):
>         """
>         :rtype: int
>         """
>         return self.stack.val
>
>
>     def getMin(self):
>         """
>         :rtype: int
>         """
>         return self.stack.min_so_far
>
>
>
> # Your MinStack object will be instantiated and called as such:
> # obj = MinStack()
> # obj.push(value)
> # obj.pop()
> # param_3 = obj.top()
> # param_4 = obj.getMin()
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
