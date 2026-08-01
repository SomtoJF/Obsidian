## Table Of Contents

- [[#How to Prepare|How to Prepare]]
- [[#Must have knowledge|Must have knowledge]]
	- [[#Must have knowledge#Powers of 2 table|Powers of 2 table]]
		- [[#Powers of 2 table#The Golden Rule of Memory Units|The Golden Rule of Memory Units]]
		- [[#Powers of 2 table#The Exponent Split Trick|The Exponent Split Trick]]
- [[#Walking Through a Problem|Walking Through a Problem]]
- [[#The 7-Step Interview Flowchart|The 7-Step Interview Flowchart]]
	- [[#The 7-Step Interview Flowchart#Step 1: Listen Carefully|Step 1: Listen Carefully]]
	- [[#The 7-Step Interview Flowchart#Step 2: Draw an Example|Step 2: Draw an Example]]
	- [[#The 7-Step Interview Flowchart#Step 3: State a Brute Force|Step 3: State a Brute Force]]
	- [[#The 7-Step Interview Flowchart#Step 4: Optimize (Using BUD & Patterns)|Step 4: Optimize (Using BUD & Patterns)]]
	- [[#The 7-Step Interview Flowchart#Step 5: Walk Through Your Algorithm|Step 5: Walk Through Your Algorithm]]
	- [[#The 7-Step Interview Flowchart#Step 6: Implement (Write the Code)|Step 6: Implement (Write the Code)]]
	- [[#The 7-Step Interview Flowchart#Step 7: Test|Step 7: Test]]
- [[#Optimisation technique 1 : BUD|Optimisation technique 1 : BUD]]
	- [[#Optimisation technique 1 : BUD#Bottleneck|Bottleneck]]
		- [[#Bottleneck#1. A One-Time Heavy Operation (The "Upfront Cost")|1. A One-Time Heavy Operation (The "Upfront Cost")]]
		- [[#Bottleneck#2. A Repeated Light Operation (The "Inner Loop Cost")|2. A Repeated Light Operation (The "Inner Loop Cost")]]
	- [[#Optimisation technique 1 : BUD#Unnecessary Work|Unnecessary Work]]
		- [[#Unnecessary Work#What is Unnecessary Work?|What is Unnecessary Work?]]
		- [[#Unnecessary Work#Code with Unnecessary Work Removed:|Code with Unnecessary Work Removed:]]
	- [[#Optimisation technique 1 : BUD#Duplicated Work|Duplicated Work]]
		- [[#Duplicated Work#What is Duplicated Work?|What is Duplicated Work?]]
		- [[#Duplicated Work#Code with Duplicated Work Removed:|Code with Duplicated Work Removed:]]
- [[#Optimisation Technique 2: Do It Yourself|Optimisation Technique 2: Do It Yourself]]
- [[#Optimisation Technique 3: Simplify and Generalize|Optimisation Technique 3: Simplify and Generalize]]
- [[#Optimisation Technique 4: Base Case and Build|Optimisation Technique 4: Base Case and Build]]
- [[#Optimize & Solve Technique #5: Data Structure Brainstorm|Optimize & Solve Technique #5: Data Structure Brainstorm]]
	- [[#Optimize & Solve Technique #5: Data Structure Brainstorm#The Mental Inventory Checklist|The Mental Inventory Checklist]]
	- [[#Optimize & Solve Technique #5: Data Structure Brainstorm#Step-by-Step Problem Walkthrough: Extreme Example|Step-by-Step Problem Walkthrough: Extreme Example]]
		- [[#Step-by-Step Problem Walkthrough: Extreme Example#Problem|Problem]]
- [[#Best Conceivable Runtime (BCR)|Best Conceivable Runtime (BCR)]]
	- [[#Best Conceivable Runtime (BCR)#How BCR Is Used in Interviews|How BCR Is Used in Interviews]]
	- [[#Best Conceivable Runtime (BCR)#Deriving BCRs Across Different Problems|Deriving BCRs Across Different Problems]]
		- [[#Deriving BCRs Across Different Problems#Example 1: Print all pairs in an array that sum to $K$|Example 1: Print all pairs in an array that sum to $K$]]
		- [[#Deriving BCRs Across Different Problems#Example 2: Find element in $M \times N$ matrix sorted along rows and columns|Example 2: Find element in $M \times N$ matrix sorted along rows and columns]]
		- [[#Deriving BCRs Across Different Problems#Example 3: Find common elements in 2 sorted arrays of size $A$ and $B$|Example 3: Find common elements in 2 sorted arrays of size $A$ and $B$]]
	- [[#Best Conceivable Runtime (BCR)#Detailed Walkthrough: Using BCR to Guide Optimization|Detailed Walkthrough: Using BCR to Guide Optimization]]
		- [[#Detailed Walkthrough: Using BCR to Guide Optimization#Problem|Problem]]
		- [[#Detailed Walkthrough: Using BCR to Guide Optimization#Step 1: Establish the BCR|Step 1: Establish the BCR]]
		- [[#Detailed Walkthrough: Using BCR to Guide Optimization#Step 2: State Brute Force & Compute Complexity|Step 2: State Brute Force & Compute Complexity]]
		- [[#Detailed Walkthrough: Using BCR to Guide Optimization#Step 3: Optimize to Match BCR Using Data Structures|Step 3: Optimize to Match BCR Using Data Structures]]
- [[#What Good Coding Looks Like|What Good Coding Looks Like]]
	- [[#What Good Coding Looks Like#Core Pillars of Good Interview Code|Core Pillars of Good Interview Code]]
		- [[#Core Pillars of Good Interview Code#1. Correctness & Robustness|1. Correctness & Robustness]]
		- [[#Core Pillars of Good Interview Code#2. Cleanliness & Readability|2. Cleanliness & Readability]]
		- [[#Core Pillars of Good Interview Code#3. Modularity|3. Modularity]]
		- [[#Core Pillars of Good Interview Code#4. Error & Boundary Handling|4. Error & Boundary Handling]]
	- [[#What Good Coding Looks Like#Code Comparison: Poor vs. Good|Code Comparison: Poor vs. Good]]
		- [[#Code Comparison: Poor vs. Good#Problem Statement|Problem Statement]]
		- [[#Code Comparison: Poor vs. Good#❌ Bad Code (Hard to Read, Poor Naming, Fragile)|❌ Bad Code (Hard to Read, Poor Naming, Fragile)]]
			- [[#❌ Bad Code (Hard to Read, Poor Naming, Fragile)#Weaknesses in Bad Code:|Weaknesses in Bad Code:]]
		- [[#Code Comparison: Poor vs. Good#✅ Good Code (Clean, Production-Ready, Robust)|✅ Good Code (Clean, Production-Ready, Robust)]]
			- [[#✅ Good Code (Clean, Production-Ready, Robust)#Strengths of Good Code:|Strengths of Good Code:]]
	- [[#What Good Coding Looks Like#Use Data Structures Generously|Use Data Structures Generously]]
	- [[#What Good Coding Looks Like#Appropriate Code Reuse|Appropriate Code Reuse]]
	- [[#What Good Coding Looks Like#Writing Modular Code|Writing Modular Code]]
	- [[#What Good Coding Looks Like#Flexible and Robust|Flexible and Robust]]
	- [[#Error Checking|Error Checking]]
	- [[#Don't Give Up|Don't Give Up]]

## How to Prepare

Many candidates just read through problems and solutions. That's like trying to learn calculus by reading a problem and its answer. You need to practice solving problems. Memorizing solutions won't help you much.

For each problem in this book (and any other problem you might encounter), do the following:

1. Try to solve the problem on your own. Hints are provided at the back of this book, but push yourself to develop a solution with as little help as possible. ==Many questions are designed to be tough-that's okay!== When you're solving a problem, make sure to think about the space and time efficiency.

2. ==Write the code on paper==. %%maybe code in notepad or something%% Coding on a computer offers luxuries such as syntax highlighting, code completion, and quick debugging. Coding on paper does not. Get used to this-and to how slow it is to write and edit code-by coding on paper.

3. Test your code-on paper. This means testing the general cases, base cases, error cases, and so on. You'll need to do this during your interview, so it's best to practice this in advance.

4. Type your paper code as-is into a computer. You will probably make a bunch of mistakes. Start a list of all the errors you make so that you can keep these in mind during the actual interview.

In addition, try to do as many mock interviews as possible. You and a friend can take turns giving each other mock interviews. Though your friend may not be an expert interviewer, he or she may still be able to walk you through a coding or algorithm problem. You'll also learn a lot by experiencing what it's like to be an interviewer.

> Try to write your code on paper

## Must have knowledge
![[Screenshot 2026-07-26 at 14.19.29.png]]
*==In particular, hash tables are an extremely important topic==. Make sure you are very comfortable with this data structure.
### Powers of 2 table

| **Power of 2 (2X)** | **Exact Value**     | **Rough Human Number** | **Standard Memory Unit**        |
| ------------------- | ------------------- | ---------------------- | ------------------------------- |
| **$2^{10}$**        | $1,024$             | ~1 **Thousand**        | **1 KB** (Kilobyte)             |
| **$2^{16}$**        | $65,536$            | ~65 Thousand           | **64 KB**                       |
| **$2^{20}$**        | $1,048,576$         | ~1 **Million**         | **1 MB** (Megabyte)             |
| **$2^{30}$**        | $1,073,741,824$     | ~1 **Billion**         | **1 GB** (Gigabyte)             |
| **$2^{32}$**        | $4,294,967,296$     | ~4 Billion             | **4 GB** (32-bit address limit) |
| **$2^{40}$**        | $1,099,511,627,776$ | ~1 **Trillion**        | **1 TB** (Terabyte)             |
|                     |                     |                        |                                 |

#### The Golden Rule of Memory Units
Notice the pattern in the exponents: ==every jump of $10$ in the power multiplies the capacity by roughly $1,000$ (or $1,024$ in binary):==

- **$2^{10} \approx 10^3$** $\rightarrow$ $1,000$ $\rightarrow$ **Kilobyte (KB)**
- **$2^{20} \approx 10^6$** $\rightarrow$ $1,000,000$ $\rightarrow$ **Megabyte (MB)**
- **$2^{30} \approx 10^9$** $\rightarrow$ $1,000,000,000$ $\rightarrow$ **Gigabyte (GB)**
- **$2^{40} \approx 10^{12}$** $\rightarrow$ $1,000,000,000,000$ $\rightarrow$ **Terabyte (TB)**

==Also, worthy of note:== In base 10, **every jump of 3 in an exponent is literally multiplying by $10^3$, which is $1,000$**.  See [[Using input constraints]] for how we can use this to eliminate un-promising algorithms.

#### The Exponent Split Trick
If you see an arbitrary exponent like $2^{32}$ or $2^{16}$, split it into ==**a small single-digit exponent** and **a multiple of 10**==:
1. **$2^{16}$** $= 2^6 \times 2^{10} = 64 \times 1 \text{ KB} = \mathbf{64\text{ KB}}$
2. **$2^{32}$** $= 2^2 \times 2^{30} = 4 \times 1 \text{ GB} = \mathbf{4\text{ GB}}$
3. **$2^{27}$** $= 2^7 \times 2^{20} = 128 \times 1 \text{ MB} = \mathbf{128\text{ MB}}$
You should be comfortable doing this in your head.

## Walking Through a Problem
In _Cracking the Coding Interview_ (6th Edition), Gayle Laakmann McDowell outlines a clear **7-Step Problem-Solving Flowchart** for tackling technical interview questions.

Here is the complete flowchart structured step-by-step, along with how to execute each phase effectively:

## The 7-Step Interview Flowchart

```
1. LISTEN CAREFULLY
       │
       ▼
2. DRAW AN EXAMPLE
       │
       ▼
3. STATE A BRUTE FORCE
       │
       ▼
4. OPTIMIZE (BUD)
       │
       ▼
5. WALK THROUGH
       │
       ▼
6. IMPLEMENT (CODE)
       │
       ▼
7. TEST
```
![[Screenshot 2026-07-27 at 23.00.16.png]]
### Step 1: Listen Carefully
Listen carefully to the problem, and be sure that you've mentally recorded any unique information in the problem.

For example, suppose a question starts with one of the following lines. It's reasonable to assume that the information is there for a reason.

-  "Given two arrays that are sorted, find .. :'
	You probably need to know that the data is sorted. The optimal algorithm for the sorted situation is probably different than the optimal algorithm for the unsorted situation.

- "Design an algorithm to be run repeatedly on a server that ... "
	The server/to-be-run-repeatedly situation is different from the run-once situation. Perhaps this means that you cache data? Or perhaps it justifies some reasonable precomputation on the initial dataset?

Your first algorithm doesn't need to use the information. But if you find yourself stuck, or you're still working to develop something more optimal, ask yourself if you've used all the information in the problem. You might even find it useful to ==write the pertinent information on the whiteboard.==
### Step 2: Draw an Example
An example can dramatically improve your ability to solve an interview question, and yet so many candidates just try to solve the question in their heads.
Very typically, a candidate might draw something like this for an example of a binary search tree:
![[Screenshot 2026-07-27 at 23.14.51.png]]
This is a bad example for several reasons. **First, it's too small**. You will have trouble finding a pattern in such a small example. **Second, it's not specific**. A binary search tree has values. What if the numbers tell you something about how to approach the problem? **Third, it's actually a special case**. It's not just a balanced tree, but it's also a beautiful, perfect tree where every node other than the leaves has two children. Special cases can be very deceiving.

Instead, you want to create an example that is:
- ==Specific==. It should use real numbers or strings (if applicable to the problem).
- ==Sufficiently large.== Most examples are too small, by about 50%.
- ==Not a special case==. Be careful. It's very easy to inadvertently draw a special case. If there's any way your example is a special case (even if you think it probably won't be a big deal), you should fix it.

Try to make the best example you can. If it later turns out your example isn't quite right, you can and should fix it.
### Step 3: State a Brute Force

- **Goal:** Establish a baseline solution immediately.
    
- **Key Action:** State the naive solution out loud, explain its time/space complexity, and don't code it yet!
    
- **Why this matters:** It guarantees you have _a_ working solution on the board, removes anxiety, and gives you a benchmark to improve against.
### Step 4: Optimize (Using BUD & Patterns)
Once you have a brute force algorithm, you should work on optimizing it. A few techniques that work well are:

1. **Look for any unused information.** Did your interviewer tell you that the array was sorted? How can you leverage that information?

2. **Use a fresh example.** Sometimes, just seeing a different example will unclog your mind or help you see a pattern in the problem.

3. **Solve it"incorrectly:'** Just like having an inefficient solution can help you find an efficient solution, having an incorrect solution might help you find a correct solution. For example, if you're asked to generate a random value from a set such that all values are equally likely, an incorrect solution might be one that returns a semi-random value: Any value could be returned, but some are more likely than others. You can then think about why that solution isn't perfectly random. Can you rebalance the probabilities?

4. **Make time vs. space tradeoff.** Sometimes storing extra state about the problem can help you optimize the runtime.

5. **Precompute information.** Is there a way that you can reorganize the data (sorting, etc.) or compute some values upfront that will help save time in the long run?

6. **Use a hash table.** Hash tables are widely used in interview questions and should be at the top of your mind.

7. Think about the best conceivable runtime (discussed on page 72).

Walk through the brute force with these ideas in mind and look for BUD (page 67).
### Step 5: Walk Through Your Algorithm

After you've nailed down an optimal algorithm, don't just dive into coding. Take a moment to solidify your understanding of the algorithm.

Whiteboard coding is slow-very slow. So is testing your code and fixing it. As a result, you need to make sure that you get it as close to "perfect" in the beginning as possible.

Walk through your algorithm and get a feel for the structure of the code. Know what the variables are and when they change.

>> What about pseudocode? You can write pseudocode if you'd like. Be careful about what you write. Basic steps `("(1) Search array. (2) Find biggest. (3) Insert in heap:')` or brief logic `("if p < q, move p. else move q")` can be valuable. But when your pseudocode starts having for loops that are written in plain English, then you're essentially just writing sloppy code. It'd probably be faster to just write the code.

If you don't understand exactly what you're about to write, you'll struggle to code it. It will take you longer to finish the code, and you're more likely to make major errors.
### Step 6: Implement (Write the Code)
Now that you have an optimal algorithm and you know exactly what you're going to write, go ahead and implement it.

Start coding in the far top left corner of the whiteboard (you'll need the space). Avoid "line creep" (where each line of code is written an awkward slant). It makes your code look messy and can be very confusing when working in a whitespace-sensitive language, like Python.

Remember that you only have a short amount of code to demonstrate that you're a great developer. Everything counts. Write beautiful code.
    
- **Best Practices:**
    - **Use Data Structures Wisely:** Know your language's standard library.
        
    - **Modularize:** Split complex logic into helper functions instead of writing massive nested blocks.
        
    - **Refactor Inline:** Use clear variable names (`currNode`, `maxSoFar` instead of `i`, `temp`, `a`).

### Step 7: Test

- **Goal:** Catch your own bugs before the interviewer points them out.
    
- **Testing Order:**
    1. **Conceptual Walkthrough:** Walk through the code line-by-line (don't just re-read it; pretend you are the compiler).
    2. **Hot Spots:** Check potential bug areas (e.g., `i + 1`, `mid - 1`, division by zero, null pointers).
    3. **Small / Edge Cases:** Test empty inputs, 1-element arrays, extreme values, or duplicate elements.
    4. **Fix Bugs Carefully:** Don't just patch the code blindly; understand _why_ the bug occurred first.

![[Screenshot 2026-07-27 at 22.33.01.png]]
## Optimisation technique 1 : BUD
BUD stands for
- B - Bottlenecks
- U - Unnecessary Work
- D - Duplicated work
### Bottleneck
==A bottleneck is a part of your algorithm that slows down the overall runtime==. bottlenecks typically occur in **two common ways**:
#### 1. A One-Time Heavy Operation (The "Upfront Cost")

This happens when you have a distinct, slow step in your algorithm that dominates the overall runtime—even if the rest of the algorithm is extremely fast.
- **Example:** Sorting an array first ($O(N \log N)$) and then searching through it linearly ($O(N)$). The total runtime is $O(N \log N)$ because the initial sorting step is the bottleneck.

#### 2. A Repeated Light Operation (The "Inner Loop Cost")

This happens when an operation that seems fast on its own (like an $O(N)$ or $O(\log N)$ search) is executed repeatedly inside a loop.
- **Example:** Running an $O(N)$ linear search inside an $O(N)$ loop, which turns the overall runtime into $O(N^2)$.

> Example: Given an array of distinct integer values, count the number of pairs of integers that have difference k. For example, given the array `{ 1, 7, 5, 9, 2, 12, 3}` and the difference `k = 2`, there are four pairs with difference 2: `(1, 3), (3, 5), (5, 7), (7, 9)`.

A brute force algorithm is to go through the array, starting from the first element, and then search through the remaining elements (which will form the other side of the pair). For each pair, compute the difference.

If the difference equals k, increment a counter of the difference.

The bottleneck here is the repeated search for the "other side" of the pair. It's therefore the main thing to focus on optimizing.

How can we more quickly find the right "other side"? Well, we actually know the other side of ( x, ? ) . It's x + k or x - k. If we sorted the array, we could find the other side for each of the N elements in O( log N) time by doing a binary search.

We now have a two-step algorithm, where both steps take $O(N log N)$ time. Now, sorting is the new bottleneck. Optimizing the second step won't help because the first step is slowing us down anyway.

We just have to get rid of the first step entirely and operate on an unsorted array. How can we find things quickly in an unsorted array? With a hash table.

Throw everything in the array into the hash table. Then, to look up if x + k or x - k exist in the array, we just look it up in the hash table. We can do this in O(N) time.

### Unnecessary Work
#### What is Unnecessary Work?
Unnecessary work occurs when your code performs ==calculations or loop iterations whose results could be derived directly rather than searched for==.

> Print all positive integer solutions to the equation $a^3 + b^3 = c^3 + d^3$ where $a, b, c,$ and $d$ are integers between $1$ and $1,000$.

The naive brute force approach uses four nested loops to check every combination of $a, b, c,$ and $d$:

Java

```java
int n = 1000;
for (int a = 1; a <= n; a++) {
    for (int b = 1; b <= n; b++) {
        for (int c = 1; c <= n; c++) {
            for (int d = 1; d <= n; d++) {
                if (Math.pow(a, 3) + Math.pow(b, 3) == Math.pow(c, 3) + Math.pow(d, 3)) {
                    System.out.println(a + ", " + b + ", " + c + ", " + d);
                }
            }
        }
    }
}
```

**Runtime:** **$O(N^4)$** (runs $1,000^4 = 1 \text{ trillion}$ iterations).

In the inner loop, for a given $a, b,$ and $c$, there is **at most one valid $d$** that can satisfy the equation $a^3 + b^3 = c^3 + d^3$.

Instead of running an entire $O(N)$ loop over all possible values of $d$, we can solve for $d$ mathematically:

$$d = \sqrt[3]{a^3 + b^3 - c^3}$$

#### Code with Unnecessary Work Removed:

Java

```java
int n = 1000;
for (int a = 1; a <= n; a++) {
    for (int b = 1; b <= n; b++) {
        for (int c = 1; c <= n; c++) {
            int d = (int) Math.cbrt(Math.pow(a, 3) + Math.pow(b, 3) -  Math.pow(c, 3));
            
            // Check if d is a valid integer between 1 and n
            if (d >= 1 && d <= n && Math.pow(a, 3) + Math.pow(b, 3) == Math.pow(c, 3) + Math.pow(d, 3)) {
                System.out.println(a + ", " + b + ", " + c + ", " + d);
            }
        }
    }
}
```

- **New Runtime:** Reduced from $O(N^4)$ down to **$O(N^3)$** by eliminating the unnecessary 4th loop.
### Duplicated Work
#### What is Duplicated Work?
Duplicated work occurs when an algorithm repeatedly ==computes the exact same values across different steps== instead of saving and reusing them.

Notice what the $O(N^3)$ code is doing:
1. It computes $c^3 + d^3$ for all $(c, d)$ pairs.
    
2. Then it re-computes $a^3 + b^3$ for all $(a, b)$ pairs and searches for matching outputs.

Since $c^3 + d^3$ and $a^3 + b^3$ produce the exact same set of sums, we don't need to do this computation twice!

We can pre-compute all $(c, d)$ pairs, map each sum to its list of $(c, d)$ pairs in a **Hash Table**, and then look up matching $(a, b)$ pairs in $O(1)$ time.

#### Code with Duplicated Work Removed:

Java

```java
int n = 1000;
Map<Integer, List<int[]>> map = new HashMap<>();

// 1. Pre-compute all (c, d) pairs and store their sums in a HashMap
for (int c = 1; c <= n; c++) {
    for (int d = 1; d <= n; d++) {
        int result = (int) (Math.pow(c, 3) + Math.pow(d, 3));
        if (!map.containsKey(result)) {
            map.put(result, new ArrayList<int[]>());
        }
        map.get(result).add(new int[]{c, d});
    }
}

// 2. Compute all (a, b) pairs and look up matching sums in O(1) time
for (int a = 1; a <= n; a++) {
    for (int b = 1; b <= n; b++) {
        int result = (int) (Math.pow(a, 3) + Math.pow(b, 3));
        List<int[]> list = map.get(result);
        for (int[] pair : list) {
            System.out.println(a + ", " + b + ", " + pair[0] + ", " + pair[1]);
        }
    }
}
```

- **Optimal Runtime:** **$O(N^2)$** time and **$O(N^2)$** space.
## Optimisation Technique 2: Do It Yourself
The first time you heard about how to find an element in a sorted array (before being taught binary search), you probably didn't jump to, "Ah ha! We'll compare the target element to the midpoint and then recurse on the appropriate half'

And yet, you could give someone who has no knowledge of computer science an alphabetized pile of student papers and they'll likely implement something like binary search to locate a student's paper. They'll probably say, "Gosh, Peter Smith? He'll be somewhere in the bottom of the stack:'They'II pick a random paper in the middle(ish), compare the name to "Peter Smith'; and then continue this process on the remainder of the papers. Although they have no knowledge of binary search, they intuitively "get it"

Therefore, when you get a question, try just working it through intuitively on a real example. Often a bigger example will be easier.

> Example: Given a smaller string $s$ and a bigger string $b$, design an algorithm to find all permutations of the shorter string within the longer one. Print the location of each permutation.

Most candidates will probably think of something like: Generate all permutations of $s$ and then look for each in $b$. Since there are $S!$ permutations, this will take $O ( S ! * B)$ time, where $S$ is the length of $s$ and $B$ is the length of $b$.

This works, but it's an extraordinarily slow algorithm. It's actually worse than an exponential algorithm. If $s$ has 14 characters, that's over **87 billion** permutations. Add one more character into $s$ and we have 15 times more permutations. Ouch!

Few people-even those who earlier came up with the 0(5 ! * B) algorithm-actually generate all the permutations of abbc to locate those permutations in b. Almost everyone takes one of two (very similar) approaches:

1. Walk through b and look at sliding windows of 4 characters (since s has length 4). Check if each window is a permutation of s.

2. Walk through b. Every time you see a character in s, check if the next four (the length of s) characters are a permutation of s.

Depending on the exact implementation of the "is this a permutation" part, you'll probably get a runtime of either $O(B * S)$,$O(B *Slog S)$,or $O(B * S^2)$.None of these are the most optimal algorithm(there is an $O( B)$ algorithm), but it's a lot better than what we had before.

Try this approach when you're solving questions. Use a nice, big example and intuitively-manually, that is-solve it for the specific example. Then, afterwards, think hard about how you solved it. ==Reverse engineer your own approach==.
## Optimisation Technique 3: Simplify and Generalize
With Simplify and Generalize, we implement a multi-step approach. ==First we simplify or tweak some constraint, such as the data type==. Then, we solve this new simplified version of the problem. Finally, once we have an algorithm for the simplified problem, we try to adapt it for the more complex version.

>Example: A ransom note can be formed by cutting words out of a magazine to form a new sentence. How would you figure out if a ransom note (represented as a string) can be formed from a given magazine (string)?

To simplify the problem, we can modify it so that we are cutting characters out of a magazine instead of whole words.

We can solve the simplified ransom note problem with characters by simply creating an array and counting the characters. Each spot in the array corresponds to one letter. First, we count the number of times each character in the ransom note appears, and then we go through the magazine to see if we have all of those characters.

When we generalize the algorithm, we do a very similar thing. This time, rather than creating an array with character counts, we create a hash table that maps from a word to its frequency.
## Optimisation Technique 4: Base Case and Build
With Base Case and Build, we solve the problem first for a base case (e.g., $n = 1$) and then try to build up from there. When we get to more complex/interesting cases (often $n = 3$ or $n = 4$), we try to build those using the prior solutions.

> Example: Design an algorithm to print all permutations of a string. For simplicity, assume all characters are unique.

Consider a test string $abcdefg$.

```
Case "a" --> {"a"}

Case "ab" - -> {"ab", "ba"}

Case "abc" --> ?
```

This is the first "interesting" case. If we had the answer to P ("ab"), how could we generate P ("abc")?

Well, the additional letter is "c," so we can just stick c in at every possible point. That is:

```
P("abc") = insert "c" into all locations of all strings in P("ab")

P("abc") = insert "c" into all locations of all strings in {"ab","ba"}

P("abc") = merge({"cab", ""acb", "abc"}, {"cba", abca", bac"})

P("abc") = {"cab", "acb", "abc", "cba", "bca", bac"}
```

Now that we understand the pattern, we can develop a general recursive algorithn1:We generate all permutations of a string $S_1 ••• S_n$ by "chopping off" the last character and generating all permutations of $s_1 •••s_{n-1}$

Once we have the list of all permutations of $s_1 •••s_{n-1}$ ,

we iterate through this list. For each string in it, we insert $S_n$ into every location of the string.

Base Case and Build algorithms often lead to natural recursive algorithms.

## Optimize & Solve Technique #5: Data Structure Brainstorm

**Data Structure Brainstorming** is the practice of systematically walking through fundamental data structures to see which one fits the problem's bottlenecks or structural requirements.

Instead of guessing blindly when an initial approach is too slow, look at what your algorithm needs to do frequently (e.g., _look up elements_, _keep items ordered_, _track minimums/maximums_) and pair those requirements with the ideal data structure.

### The Mental Inventory Checklist

When stuck on an optimization step, run through these core structures and ask how each impacts time and space:

```
                  ┌──────────────────────────────┐
                  │    DATA STRUCTURE CHEAT SHEET │
                  └──────────────┬───────────────┘
                                 │
   ┌─────────────────────────────┼─────────────────────────────┐
   ▼                             ▼                             ▼
【 Hash Table 】             【 Trees / Heaps 】            【 Other Linear 】
• O(1) Lookups              • Red-Black / BST:            • Stack: LIFO (parsing)
• O(1) Insert / Delete        O(log N) search/order       • Queue: FIFO (BFS)
• Unordered                 • Min/Max Heap:               • Trie: Prefix matches
                              O(1) find, O(log N) push    • Vectors / Arrays
```

|**Data Structure**|**Primary Strengths / Operations**|**Common Problem Triggers**|
|---|---|---|
|**Hash Map / Set**|$O(1)$ expected lookup, insert, deletion.|Need to check presence, count frequencies, or match complements ($K - A$).|
|**Array / Vector**|Contiguous memory, $O(1)$ random access by index.|Static sizes, index-based mapping, prefix sums, two-pointer techniques.|
|**LinkedList**|$O(1)$ insertion/deletion at pointers; dynamic sizing.|Implementing queues, LRU caches, splitting/merging sequences without shifting memory.|
|**Stack**|$O(1)$ LIFO (Last-In, First-Out) operations.|Nested structures, string parsing, expression evaluation, balancing parentheses, tracking local maxima.|
|**Queue / Deque**|$O(1)$ FIFO (First-In, First-Out) operations; double-ended access.|Breadth-First Search (BFS), sliding window maximums, order-preserving processing.|
|**Binary Search Tree (BST)**|$O(\log N)$ search, insertion, deletion; maintains sorted order.|Range queries, finding nearest elements, maintaining dynamic sorted order.|
|**Heap / Priority Queue**|$O(1)$ min/max retrieval, $O(\log N)$ insertion and deletion.|Top $K$ elements, running median, scheduling tasks, Dijkstra's algorithm.|
|**Trie (Prefix Tree)**|$O(L)$ search/insert where $L$ is key length; shared prefix storage.|Auto-complete, prefix matching, word dictionary searches, bitwise XOR problems.|

### Step-by-Step Problem Walkthrough: Extreme Example

#### Problem

> Example: Numbers are randomly generated and stored into an (expanding) array. How would you keep track of the median?

Our data structure brainstorm might look like the following:

- Linked list? Probably not. Linked lists tend not to do very well with accessing and sorting numbers.

- Array? Maybe, but you already have an array. Could you somehow keep the elements sorted? That's probably expensive. Let's hold off on this and return to it if it's needed.

- Binary tree? This is possible, since binary trees do fairly well with ordering. In fact, if the binary search tree is perfectly balanced, the top might be the median. But, be careful-if there's an even number of elements, the median is actually the average of the middle two elements. The middle two elements can't both be at the top. This is probably a workable algorithm, but let's come back to it.

- Heap? A heap is really good at basic ordering and keeping track of max and mins. This is actually interesting-if you had two heaps, you could keep track of the bigger half and the smaller half of the elements. The bigger half is kept in a min heap, such that the smallest element in the bigger half is at the root. The smaller half is kept in a max heap, such that the biggest element of the smaller half is at the root. Now, with these data structures, you have the potential median elements at the roots. If the heaps are no longer the same size, you can quickly "rebalance" the heaps by popping an element off the one heap and pushing it onto the other.

Note that the more problems you do, the more developed your instinct on which data structure to apply will be. You will also develop a more finely tuned instinct as to which of these approaches is the most useful.

## Best Conceivable Runtime (BCR)

The **Best Conceivable Runtime (BCR)** is the absolute fastest theoretical runtime an algorithm could _possibly_ achieve for a given problem statement—without even knowing the final algorithm.

> **Key Premise:** BCR is defined by the physical limits of reading input or delivering output. You cannot solve a problem faster than the time it takes to look at the data necessary to answer it.

### How BCR Is Used in Interviews

```
1. DERIVE BCR ──► 2. COMPUTE BRUTE FORCE ──► 3. BRIDGE THE GAP (BUD)
(Lower Bound)        (Upper Bound)          (Target Optimization)
```

1. **Establishes a Target (The Stop Sign):** Once your optimized algorithm matches the BCR, you know you cannot improve the asymptotic time complexity further. You can stop trying to optimize Big-O and focus on implementation.
    
2. **Highlights the Gap:** If your brute-force algorithm runs in $O(N^3)$ and your BCR is $O(N)$, you have a concrete optimization goal ($O(N^3) \rightarrow O(N)$).
    
3. **Drives Bottleneck Analysis (BUD):** It forces you to ask: _"What operations am I doing that exceed my BCR, and how can I replace them?"_
    

### Deriving BCRs Across Different Problems

#### Example 1: Print all pairs in an array that sum to $K$

- **Input:** Array of size $N$.
    
- **Derivation:** You must inspect every element at least once to know if it can pair with another. Reading $N$ elements takes $O(N)$ operations.
    
- **BCR:** $\mathbf{O(N)}$
    

#### Example 2: Find element in $M \times N$ matrix sorted along rows and columns

- **Input:** Matrix of size $M \times N$.
    
- **Derivation:** Because the matrix is sorted, you do not need to look at every element. Using search properties across rows/cols, you can eliminate rows or columns.
    
- **BCR:** $\mathbf{O(M + N)}$ or $\mathbf{O(\log(M \cdot N))}$ depending on exact search capabilities.
    

#### Example 3: Find common elements in 2 sorted arrays of size $A$ and $B$

- **Input:** Array $A$ (length $A$), Array $B$ (length $B$).
    
- **Derivation:** You must potentially check elements across both arrays to establish membership.
    
- **BCR:** $\mathbf{O(A + B)}$
    

### Detailed Walkthrough: Using BCR to Guide Optimization

#### Problem

> Given an array of $N$ integers and a target value $K$, count all unique pairs $(x, y)$ such that $x - y = K$.

#### Step 1: Establish the BCR

- You must read all $N$ elements at least once.
    
- **$\text{BCR} = \mathbf{O(N)}$**.
    

#### Step 2: State Brute Force & Compute Complexity

Compare every pair with nested loops:

Java

```
int count = 0;
for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
        if (Math.abs(arr[i] - arr[j]) == k) {
            count++;
        }
    }
}
```

- **Brute Force Time:** $O(N^2)$
    
- **Space:** $O(1)$
    
- **Gap to BCR:** Current $O(N^2)$ vs. BCR $O(N)$. We need to drop a factor of $N$.
    

#### Step 3: Optimize to Match BCR Using Data Structures

- **Identify the Bottleneck:** For each element $x$, we run an $O(N)$ inner search for $y = x - K$ or $y = x + K$.
    
- **Ask:** _"How can we turn an $O(N)$ lookup into $O(1)$ to match the BCR?"_
    
- **Apply Data Structure Brainstorm:** Use a **Hash Set**.
    

Java

```
public static int countPairsWithDiffK(int[] arr, int k) {
    Set<Integer> set = new HashSet<>();
    for (int num : arr) {
        set.add(num);
    }

    int count = 0;
    for (int x : arr) {
        if (set.contains(x + k)) {
            count++;
        }
    }
    return count;
}
```

- **Optimized Time:** $O(N)$ (Building set $O(N)$ + lookups $O(N)$).
    
- **Optimized Space:** $O(N)$.
    
- **Result:** Time complexity matches the **BCR of $O(N)$**. We are done.
    

## What Good Coding Looks Like

Writing code in an interview differs from writing competitive programming solutions or quick scripts. Interviewers evaluate code on maintainability, correctness, and structure—qualities expected in production engineering environments.

### Core Pillars of Good Interview Code

```
                         ┌───────────────────────────┐
                         │   PILLARS OF GOOD CODE    │
                         └─────────────┬─────────────┘
                                       │
     ┌───────────────────┬─────────────┴─────────────┬───────────────────┐
     ▼                   ▼                           ▼                   ▼
【 Correctness 】     【 Cleanliness 】           【 Modularity 】     【 Error Handling 】
• Handles inputs    • Descriptive names         • Helper methods     • Null checks
• Solves edges      • Consistent style          • Single responsibility • Bounds checks
```

#### 1. Correctness & Robustness

- Handles standard inputs correctly.
    
- Manages edge cases gracefully without throwing uncaught exceptions.
    

#### 2. Cleanliness & Readability

- Clear variable and function names (`leftPointer`, `currentSum` instead of `p1`, `temp`, `s`).
    
- Consistent indentation and code formatting.
    
- Logical layout (declaring variables close to where they are used).
    

#### 3. Modularity

- Breaking complex logic into helper functions instead of creating massive, monolithic methods.
    
- Writing reusable, self-contained subroutines.
    

#### 4. Error & Boundary Handling

- Checking for null, empty arrays, zero lengths, or unexpected inputs upfront.
    

### Code Comparison: Poor vs. Good

#### Problem Statement

> Given an array of numbers, return the average of all even numbers. If no even numbers exist, return 0.0.

#### ❌ Bad Code (Hard to Read, Poor Naming, Fragile)

Java

```
class Solution {
    public double avg(int[] a) {
        if (a == null) return 0;
        int s = 0;
        int c = 0;
        for(int i=0; i<a.length; i++) {
            if(a[i]%2==0) {
                s = s + a[i];
                c++;
            }
        }
        if (c == 0) return 0;
        return s / c; // BUG: Integer division truncates double result! (e.g., 6 / 4 = 1.0 instead of 1.5)
    }
}
```

##### Weaknesses in Bad Code:

1. **Uninformative Names:** Variables `a`, `s`, `c` force the reader to mental-trace what they represent.
    
2. **Integer Division Bug:** `s / c` performs integer division before casting to `double`, producing incorrect fractional averages.
    
3. **Messy Formatting:** Inconsistent spacing around operators and control structures.
    

#### ✅ Good Code (Clean, Production-Ready, Robust)

Java

```
public class NumberUtils {

    /**
     * Calculates the average of all even integers in the provided array.
     * 
     * @param numbers Input array of integers.
     * @return Average of even numbers as a double, or 0.0 if array is empty or contains no evens.
     */
    public static double calculateEvenAverage(int[] numbers) {
        if (numbers == null || numbers.length == 0) {
            return 0.0;
        }

        long evenSum = 0; // Using long to prevent integer overflow on large sums
        int evenCount = 0;

        for (int number : numbers) {
            if (isEven(number)) {
                evenSum += number;
                evenCount++;
            }
        }

        if (evenCount == 0) {
            return 0.0;
        }

        return (double) evenSum / evenCount; // Explicit double cast for precision
    }

    private static boolean isEven(int value) {
        return value % 2 == 0;
    }
}
```

##### Strengths of Good Code:

1. **Self-Documenting Names:** `evenSum`, `evenCount`, and `calculateEvenAverage` make intent immediately clear.
    
2. **Overflow Safety:** Uses `long` for `evenSum` to avoid integer overflow when summing many large values.
    
3. **Explicit Type Casting:** `(double) evenSum / evenCount` computes true floating-point division.
    
4. **Modularity:** Extracts `isEven()` logic into a helper function to keep the primary loop clean.
    
5. **Defensive Checks:** Handles `null` and empty array cases upfront cleanly.
### Use Data Structures Generously
Sometimes instead of using a primitive data structure like strings, arrays etc, it might be better to build your own data structure. 
> Imagine you are writing code to swap the minimum and maximum element in an integer array.

==Note:== This is not the best way to do this, just wrote it to pass the point across. _also felt like writing code icl_
```go
type ArrayElement struct{
	Index int
	Value int
}

func swapMinMax (arr []int) []int{
	// Guard clause for empty or single-element slices
	if len(arr) <= 1 { return arr }

	minElement := getMinElement(arr)
	maxElement := getMaxElement(arr)
	
	arr[minElement.Index] = maxElement.Value
	arr[maxElement.Index] = minElement.Value
}

func getMinElement (arr []int) ArrayElement{
	min := arr[0]
	minIndex := 0
	for i,elem := range arr{
		if elem < min {
			min = elem
			minIndex = i
		}
	}
	return ArrayElement{
		Index: minIndex,
		Value: min
	}
}

func getMaxElement (arr []int) ArrayElement{
	max := arr[0]
	maxIndex := 0
	for i,elem := range arr{
		if elem > max {
			max = elem
			maxIndex = i
		}
	}
	return ArrayElement{
		Index: maxIndex,
		Value: max
	}
}

```
### Appropriate Code Reuse
> Suppose you were asked to write a function to check if the value of a binary number (passed as a string) equals the hexadecimal representation of a string.

```go
func compareBintoHex(bin string, hex string)bool{
	convertedBin := convertFromBase(bin, 2)
	convertedHex := convertFromBase(bin, 16)
	
	if (convertedBin || convertedHex == -1) {
		return false
	}
	return convertedBin == convertedHex;
}
// 100 121
func convertFromBase(val string, base int){
	// impl here
	if (base < 2 || (base > 10 && base < 16)) {
		return -1
	}
	int value = 0
	
	for i,digit := range val{
		if (digit < 0 || digit > base){
			return -1
		}
	
		digitInt := strconv.Atoi(digit)
		value += Math.pow(digit, len(val) - 1 - i)
	}
	
	return value
}
```
We could've implemented two different functions to convert from Binary and from Hexadecimal. However, that would make our code harder to write and more difficult to maintain.
### Writing Modular Code
Writing modular code means separating isolated chunks of code out into their own methods. This helps keep the code more maintainable, readable, and testable. A clear example is the [[#Use Data Structures Generously]] code snippet. 

While the non-modular code isn't particularly awful, the nice thing about the modular code is that it's easily testable because each component can be verified separately.
### Flexible and Robust
Just because your interviewer only asks you to write code to check if a normal tic-tac-toe board has a winner, doesn't mean you must assume that it's a 3x3 board. Why not write the code in a more general way that implements it for an NxN board?

Writing flexible, general-purpose code may also mean using variables instead of hard-coded values or using templates/ generics to solve a problem. If we can write our code to solve a more general problem, we should.

Of course, there is a limit. If the solution is much more complex for the general case, and it seems unnecessary at this point in time, it may be better just to implement the simple, expected case.
### Error Checking
One sign of a careful coder is that she doesn't make assumptions about the input. Instead, she validates that the input is what it should be, either through ASSERT statements or if-statements.
For example, recall the earlier code to convert a number from its base i (e.g., base 2 or base 16) representation to an int.

Notice the code block in [[#Appropriate Code Reuse]] how in line 2 of the convertFromBase function we check to see that base is valid (we assume that bases greater than 10, other than base 16, have no standard representation in string form). Checks like these are critical in production code and, therefore, in interview code as well.
### Don't Give Up
I know interview questions can be overwhelming, but that's part of what the interviewer is testing. Do you rise to a challenge, or do you shrink back in fear? It's important that you step up and eagerly meet a tricky problem head-on. After all, remember that interviews are supposed to be hard. It shouldn't be a surprise when you get a really tough problem.

For extra "points;' show excitement about solving hard problems.