---
id: 48
title: "Rotate Image"
url: https://leetcode.com/problems/rotate-image/description/
difficulty: Medium
tags: [Array, Math, Matrix]
attempts: 1
first_attempt: 2026-09-11
last_attempt: 2026-09-11
total_submissions: 1
total_ac: 1
total_runs: 7
---

# 48. Rotate Image

> Medium · Array / Math / Matrix · [Problem link](https://leetcode.com/problems/rotate-image/description/)


> [!abstract]- Problem
> You are given an `n x n` 2D `matrix` representing an image, rotate the image by **90** degrees (clockwise).
>
> You have to rotate the image **in-place**, which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.
>
> **Example 1:**
>
> ![](https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg)
> ```
> Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
> Output: [[7,4,1],[8,5,2],[9,6,3]]
> ```
>
> **Example 2:**
>
> ![](https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg)
> ```
> Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
> Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
> ```
>
> **Constraints:**
>
> - `n == matrix.length == matrix[i].length`
> - `1 <= n <= 20`
> - `-1000 <= matrix[i][j] <= 1000`

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%2048.%20Rotate%20Image)

## Attempt 1 · 2026-09-11 Fri
⏱ start 14:01 → first submit 14:11 · coding 9 min → AC 14:11 · 1 submit / 1 AC · 7 runs · 10 min on problem

### ✅ Accepted · Python · 14:11 (0 ms · 12.5 MB)
> [!success]- Code
> ```python
> class Solution(object):
>     def rotate(self, matrix):
>         """
>         :type matrix: List[List[int]]
>         :rtype: None Do not return anything, modify matrix in-place instead.
>
>         to rotate a NxN matrix,
>         transpose the matrix and then reverse each row
>         """
>
>         i = 0
>         while i < len(matrix):
>             row  = matrix[i]
>             j = i
>             while j < len(row):
>                 matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
>                 j += 1
>             i += 1
>
>         i = 0
>         while i < len(matrix):
>             row = matrix[i]
>             matrix[i] = list(reversed(row))
>             i += 1
>
>         return matrix
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
