---
id: 3
title: "Longest Substring Without Repeating Characters"
url: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
difficulty: Medium
tags: [Hash Table, String, Sliding Window]
attempts: 1
first_attempt: 2026-09-09
last_attempt: 2026-09-09
total_submissions: 1
total_ac: 1
total_runs: 3
---

# 3. Longest Substring Without Repeating Characters

> Medium · Hash Table / String / Sliding Window · [Problem link](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)


> [!abstract]- Problem
> Given a string `s`, find the length of the **longest** **substring** without duplicate characters.
>
> **Example 1:**
>
> ```
> Input: s = "abcabcbb"
> Output: 3
> Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
> ```
>
> **Example 2:**
>
> ```
> Input: s = "bbbbb"
> Output: 1
> Explanation: The answer is "b", with the length of 1.
> ```
>
> **Example 3:**
>
> ```
> Input: s = "pwwkew"
> Output: 3
> Explanation: The answer is "wke", with the length of 3.
> Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
> ```
>
> **Constraints:**
>
> - `0 <= s.length <= 105`
> - `s` consists of English letters, digits, symbols and spaces.

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%203.%20Longest%20Substring%20Without%20Repeating%20Characters)

## Attempt 1 · 2026-09-09 Wed
⏱ start 22:56 → first submit 23:13 · coding 16 min → AC 23:13 · 1 submit / 1 AC · 3 runs · 24 min on problem

### ✅ Accepted · Python · 23:13 (553 ms · 13.5 MB)
> [!success]- Code
> ```python
> class Solution(object):
>     def lengthOfLongestSubstring(self, s):
>         """
>         :type s: str
>         :rtype: int
>
>         two pointers and a set
>         iterate until slow reaches the end or the remaining characters < size of the set
>             if new fast is in set move slow and pop slow from the set
>         """
>
>         if len(s) == 1:
>             return 1
>         elif len(s) == 0:
>             return 0
>
>         slow = 0
>         fast = 1
>         tracker = set()
>         tracker.add(s[0])
>         maxlen = 1
>         curr = 1
>
>         while fast < len(s):
>             if s[fast] not in tracker:
>                 tracker.add(s[fast])
>                 fast += 1
>                 curr += 1
>                 maxlen = max(maxlen, curr)
>                 continue
>             while s[fast] in tracker:
>                 tracker.remove(s[slow])
>                 slow += 1
>                 curr -= 1
>
>         return maxlen
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
