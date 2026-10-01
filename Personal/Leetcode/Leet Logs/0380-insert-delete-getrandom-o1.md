---
id: 380
title: "Insert Delete GetRandom O(1)"
url: https://leetcode.com/problems/insert-delete-getrandom-o1/description/
difficulty: Medium
tags: [Array, Hash Table, Math, Design, Randomized]
attempts: 2
first_attempt: 2026-09-25
last_attempt: 2026-10-01
total_submissions: 11
total_ac: 1
total_runs: 19
---

# 380. Insert Delete GetRandom O(1)

> Medium · Array / Hash Table / Math / Design / Randomized · [Problem link](https://leetcode.com/problems/insert-delete-getrandom-o1/description/)


> [!abstract]- Problem
> Implement the `RandomizedSet` class:
>
> - `RandomizedSet()` Initializes the `RandomizedSet` object.
> - `bool insert(int val)` Inserts an item `val` into the set if not present. Returns `true` if the item was not present, `false` otherwise.
> - `bool remove(int val)` Removes an item `val` from the set if present. Returns `true` if the item was present, `false` otherwise.
> - `int getRandom()` Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the **same probability** of being returned.
>
> You must implement the functions of the class such that each function works in **average** `O(1)` time complexity.
>
> **Example 1:**
>
> ```
> Input
> ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
> [[], [1], [2], [2], [], [1], [2], []]
> Output
> [null, true, false, true, 2, true, false, 2]
>
> Explanation
> RandomizedSet randomizedSet = new RandomizedSet();
> randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
> randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
> randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
> randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
> randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
> randomizedSet.insert(2); // 2 was already in the set, so return false.
> randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.
> ```
>
> **Constraints:**
>
> - `-231 <= val <= 231 - 1`
> - At most `2 * ``105` calls will be made to `insert`, `remove`, and `getRandom`.
> - There will be **at least one** element in the data structure when `getRandom` is called.

Video solutions: [YouTube](https://www.youtube.com/results?search_query=leetcode%20380.%20Insert%20Delete%20GetRandom%20O(1))

## Attempt 1 · 2026-09-25 Fri
⏱ start 23:37 → first submit 23:56 · coding 20 min · 8 submitted (no AC yet) · 9 runs · 39 min on problem

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-


## Attempt 2 · 2026-10-01 Thu
⏱ start 12:29 → first submit 12:29 · coding 1 min → AC 12:53 · 3 submits / 1 AC · 10 runs · 25 min on problem

### ✅ Accepted · Python · 12:53 (234 ms · 55.5 MB)
> [!success]- Code
> ```python
> class RandomizedSet(object):
>
>     def __init__(self):
>         self.arr = []
>         self.map = {}
>
>
>     def insert(self, val):
>         """
>         :type val: int
>         :rtype: bool
>         """
>         if val in self.map: return False
>         self.map[val] = len(self.arr)
>         self.arr.append(val)
>         return True
>
>
>     def remove(self, val):
>         """
>         :type val: int
>         :rtype: bool
>
>         [1,2,3,4]
>         [1,4,3]
>         """
>         if val not in self.map: return False
>         i = self.map[val]
>         last = self.arr[len(self.arr) - 1]
>
>         self.arr[i] = last
>         self.map[last] = i
>
>         self.arr.pop()
>         del self.map[val]
>
>         return True
>
>
>
>     def getRandom(self):
>         """
>         :rtype: int
>         """
>         if len(self.arr) < 1: return None
>         return random.choice(self.arr)
>
>
> # Your RandomizedSet object will be instantiated and called as such:
> # obj = RandomizedSet()
> # param_1 = obj.insert(val)
> # param_2 = obj.remove(val)
> # param_3 = obj.getRandom()
> ```

### 💭 Thoughts & insights
-

### 📚 What I learned (new functions / data structures / patterns)
-

### 🔀 Alternative solutions
-
