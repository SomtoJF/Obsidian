---
id: 1556
title: "Thousand Separator"
url: https://leetcode.com/problems/thousand-separator/description/
difficulty: Easy
tags: [String]
attempts: 1
first_attempt: 2026-09-11
last_attempt: 2026-09-11
total_submissions: 3
total_ac: 2
total_runs: 17
---

# 1556. Thousand Separator

> Easy · String · [Problem link](https://leetcode.com/problems/thousand-separator/description/)


> [!abstract]- Problem
> Given an integer `n`, add a dot (".") as the thousands separator and return it in string format.
>
> **Example 1:**
>
> ```
> Input: n = 987
> Output: "987"
> ```
>
> **Example 2:**
>
> ```
> Input: n = 1234
> Output: "1.234"
> ```
>
> **Constraints:**
>
> - `0 <= n <= 231 - 1`

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%201556.%20Thousand%20Separator)

## Attempt 1 · 2026-09-11 Fri
⏱ start 13:40 → first submit 13:58 · coding 18 min → AC 14:00 · 3 submits / 2 AC · 17 runs · 22 min on problem

### ✅ Accepted · Python · 14:00 (4 ms · 12.2 MB)
> [!success]- Code
> ```python
> class Solution(object):
>     def thousandSeparator(self, n):
>         """
>         :type n: int
>         :rtype: str
>
>         convert the number to strings
>         loop through from the end
>         for every 3 characters add a period
>         """
>
>         c = 0
>         dig = str(n)
>
>         if n < 1000:
>             return dig
>
>         while n > 1000:
>             n = n // 1000
>             c += 1
>
>         res = []
>         counter = 0
>         for d in reversed(list(dig)):
>             if counter >= 2 and c > 0:
>                 res.append(d)
>                 res.append(".")
>                 counter = 0
>                 c -= 1
>                 continue
>             res.append(d)
>             counter += 1
>
>         res = reversed(res)
>         # print(res)
>
>         return "".join(res)
> ```

### ✅ Accepted · Python · 14:00 (3 ms · 12.3 MB)
> [!success]- Code
> ```python
> class Solution(object):
>     def thousandSeparator(self, n):
>         """
>         :type n: int
>         :rtype: str
>
>         convert the number to strings
>         loop through from the end
>         for every 3 characters add a period
>         """
>
>         c = 0
>         dig = str(n)
>
>         if n < 1000:
>             return dig
>
>         while n > 1000:
>             n = n // 1000
>             c += 1
>
>         print("c", c)
>
>         res = []
>         counter = 0
>         for d in reversed(list(dig)):
>             if counter >= 2 and c > 0:
>                 res.append(d)
>                 res.append(".")
>                 counter = 0
>                 c -= 1
>                 continue
>             res.append(d)
>             counter += 1
>
>         res = reversed(res)
>         # print(res)
>
>         return "".join(res)
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
