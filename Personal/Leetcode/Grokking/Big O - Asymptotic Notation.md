* **Big O notation** is ==a mathematical way to show how fast an algorithm's running time or memory usage grows as the amount of data (input size) increases==.
* Big-O doesn't measure _if_ runtime increases—==it measures **at what rate** it increases relative to $N$==
* Some of the most common runtimes are
	* $O(log N)$
	* $O (N)$
	* $O(N log N)$
	* $O (N^2)$
	* $O (2^N)$
* ==When calculating the Time/Space complexity of an algorithm we drop the constants.== i.e An algorithm that one might have described as $O(2N)$ is actually $O(N)$.
* ==We also drop the Non-Dominant Terms== i.e an expression such as $O(N^2 + N)$? That second N isn't exactly a constant. But it's not especially important. So it's actually $O(N^2)$. $O( N^2 + N^2)$ would be $O ( N^2 )$.
* ==Do not use the same variable to represent data points that could be of different sizes==. For example; Suppose we had an algorithm that took in an array of strings, sorted each string, and then sorted the full array. What would the runtime be?

We cannot use the same variable e.g. $N$ in to represent the length of the string (which string?) and the length of the array.

In your interviews, you can prevent this error by either not using the variable "N" at all, or by only using it when there is no ambiguity as to what $N$ could represent.

In fact, I wouldn't even use $a$ and $b$ here, or $m$ and $n$. It's too easy to forget which is which and mix them up.

An $O(a^2 )$ runtime is completely different from an O(a*b) runtime. Let's define new terms-and use names that are logical. 
- Let s be the length of the longest string.
- Let a be the length of the array.

Now we can work through this in parts:
• Sorting each string is $O( s log s)$.

• We have to do this for every string (and there are a strings), so that's $O( a* s log s)$.

Now we have to sort all the strings. There are a strings, so you'll may be inclined to say that this takes $O ( a log a)$ time. This is what most candidates would say. You should also take into account that you need

to compare the strings. Each string comparison takes $O(s)$ time. There are $O(a log a)$ comparisons, therefore this will take $O( as log a)$ time. If you add up these two parts, you get $O(a s ( log a + log s))$.

This is it. There is no way to reduce it further.
![[Screenshot 2026-07-20 at 23.08.27.png]]
#### Amortized Time
**Amortized time** is the **guaranteed average time per operation** over a sequence of $N$ operations, even when a few individual operations in that sequence are very expensive.

An `ArrayList` is a dynamically resizing array (unlike a regular array). When the array is full, a new array is created with double the size of the original array and all the elements are copied to the new array.

Without copying, insertions are typically $O(1)$. While when we have to copy an array of $n$ elements, insertions become $O(n)$. Since resizing only happens when the size of the array is a power of 2, the total number of copies will be $1 + 2+ 4+8+16+32+64+...+X$. If we reverse this, we have $X+x/2+x/4+x/8+...+1$. This results in $2X$ operations. If $X$ is the size of the final array i.e total number of elements, then the cost of each operation is $O({2X}/X) = 2$ which rounds out to $O(1)$. 

#### Log N Runtimes
* When you see a problem where the **number of elements in the problem space gets halved** each time, ==that will likely be a $O( log N)$ runtime.==
* The base of the log doesn't matter for the purpose of Big O
#### Recursive Runtimes
Given this code, what is it's runtime?
```python
def f(n: int) -> int:
    if n <= 1:
        return 1
	return f(n - 1) + f(n - 1)
```
A lot of people will, for some reason, see the two calls to f and jump to $O(N^2)$. ==This is completely incorrect==.
![[Screenshot 2026-07-21 at 21.34.17.png]]
==Notice that each call splits into 2 branches one level down==. Meaning that we end up with $2^N$ branches in the end. 
![[Screenshot 2026-07-21 at 21.37.53.png]]
When you have a recursive function that makes multiple calls, the runtime will often (but not always) look like $O( branches ^{depth})$, where branches is the number of times each recursive call branches. In this case, this gives us $O ( 2^N)$.

The space complexity of this algorithm will be $O(N)$. Although we have $O(2^N)$ nodes in the tree total, only $O(N)$ exist at any given time. Therefore, we would only need to have $O(N)$ memory available.

##### Why is the space complexity $O(N)$?
Here is the secret: ==the algorithm does NOT explore the entire tree at once.== It explores Depth-First Search (DFS) style, one path at a time.

1. It goes all the way down the **far left edge** of the tree to $f(1)$. Stack height = $N$.
    
2. $f(1)$ finishes and pops off the stack (its memory is freed!).
    
3. Now $f(2)$ wakes up and calls its _right_ child, $f(1)$.
    
4. That right child completes and **pops off the stack**.
    
5. $f(2)$ is finished, so it **pops off the stack**.


Because completed function calls pop off immediately, ==you never store the whole tree in memory at the same time==. You only store the _current path_ from the root down to the deepest node you are currently evaluating.

Basically because it's a DFS Algorithm, the right side doesn't enter the stack until the left side is solved. Therefore, the stack only sees it's current path.

> Supposing the operation at each level of the recursive function is $O(1)$, the space complexity of a DFS algorithm is always $O(N)$ and of a BFS algorithm $O(branches^{depth})$?

#### Important Details
##### The Sum of Arithmetic Series (Gauss's Pairing)
An **arithmetic series** is the sum of a sequence of numbers where the difference between consecutive terms is always constant (like $2 + 4 + 6 + 8$). To quickly find the total sum without adding every number individually, you multiply the **number of terms** by the **average of the first and last term**. This works because of a clever symmetry: pairing numbers from opposite ends of the sequence (first + last, second + second-to-last) always yields the exact same sum. For the simple sequence $1 + 2 + 3 + \dots + N$, this gives the famous formula:

$$\text{Sum} = \frac{N(N + 1)}{2}$$

The reason this sum works so neatly comes down to a famous trick credited to the mathematician Carl Friedrich Gauss: ==**pair the terms from opposite ends**.==

Look at the sum of iterations when $N = 100$:

$$\text{Sum} = 99 + 98 + 97 + \dots + 2 + 1 + 0$$

Pair the first and last terms:

- $99 + 0 = 99$
    
- $98 + 1 = 99$
    
- $97 + 2 = 99$
    

Every pair adds up to $99$ (or $N - 1$). Since there are $N$ terms total, you get $\frac{N}{2}$ pairs.

$$\text{Total Sum} = (\text{Number of Pairs}) \times (\text{Pair Sum}) = \frac{N}{2} \times (N - 1) = \frac{N(N - 1)}{2}$$
##### The Sum of Geometric Series

Here is a quick trick to sum $S = 2^1 + 2^2 + 2^3 + \dots + 2^n$ without adding every term manually:

**Step 1:** Write out the total sum $S$:

$$S = 2^1 + 2^2 + 2^3 + \dots + 2^n$$

**Step 2:** Multiply the entire equation by $2$:

$$2S = 2^2 + 2^3 + 2^4 + \dots + 2^n + 2^{n+1}$$

**Step 3:** Subtract the original equation ($S$) from ($2S$):

$$\begin{aligned} 2S &= \quad\quad 2^2 + 2^3 + 2^4 + \dots + 2^n + 2^{n+1} \\ - S &= -2^1 - 2^2 - 2^3 - 2^4 - \dots - 2^n \\ \hline S &= 2^{n+1} - 2^1 \end{aligned}$$

Notice how **every single middle term cancels out**! We are left with:

$$\text{Total Work } (S) = 2^{n+1} - 2$$

### The Runtime of Loops

To solidify this forever, contrast how to treat loops based on what's inside them:

#### Framework A: Constant / Uniform Work per Step $\longrightarrow$ **Multiply**

If the work inside the loop stays roughly the same size at every iteration:

$$\text{Total Work} = \text{Loop Iterations} \times \text{Work per Step}$$

- **Example:** A loop running $N$ times, where every step does an $O(N \log N)$ sort:
    
    $$N \times O(N \log N) = O(N^2 \log N)$$
    

#### Framework B: Changing / Scaling Work per Step $\longrightarrow$ **Sum the Series**

If the work inside the loop depends directly on $i$ (growing or shrinking as $i$ changes):

$$\text{Total Work} = \text{Work}(i=1) + \text{Work}(i=2) + \dots + \text{Work}(i=N)$$

- **Example 1 (Arithmetic Progression):** Inner loop runs $1, 2, 3, \dots, N$ times.
    
    $$\text{Sum} = 1 + 2 + 3 + \dots + N = \frac{N(N+1)}{2} = \mathbf{O(N^2)}$$
    
- **Example 2 (Geometric Progression):** `fib(i)` takes $2^1, 2^2, 2^3, \dots, 2^N$ time.
    
    $$\text{Sum} = 2^1 + 2^2 + 2^3 + \dots + 2^N = 2^{N+1} - 2 = \mathbf{O(2^N)}$$
    

### The Golden Rule for Series in Big-O

Whenever an operation inside a loop changes size as $i$ increases:

1. **Write out the first 3 terms and the last term** of the work being done (e.g., $2^1 + 2^2 + 2^3 + \dots + 2^N$).
    
2. **Identify the series pattern:**
    
    - Is it **Arithmetic** ($+1, +2, +3$)? The sum scales with $N^2$.
        
    - Is it **Geometric** ($\times 2, \times 4, \times 8$)? The sum is dominated by the **last term**, $O(\text{Last Term})$.
        
3. **Simplify the sum using Big-O rules** (drop constants and non-dominant terms).
    

By evaluating the series sum directly, you're already accounting for the entire loop from start to finish!

Next Up: [[Technical Questions]]