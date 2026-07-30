1. [[#How to Prepare]]
2. [[#Must have knowledge]]
	-  [[#Powers of 2 table]]
3. [[#Walking Through a Problem]]
4.  [[#The 7-Step Interview Flowchart]]
5.  [[#Optimisation technique 1 BUD]]
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