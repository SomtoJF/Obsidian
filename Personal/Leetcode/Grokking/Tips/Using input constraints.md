**The 1-Second CPU Rule:**

 Standard online judge servers typically allow an execution time limit of **1 second**. On modern single-core processors, 1 second roughly equals **$10^7$ to $10^8$ basic operations** (around 10 million to 100 million ops).

If your algorithm tries to execute significantly more than $\approx 10^8$ operations, the platform will terminate your code and return a **Time Limit Exceeded (TLE)** error.

Because of this hard ceiling, **the value of $N$ given in the constraints tells you exactly what maximum Big-O complexity your algorithm can afford.**

### The Input Constraint $\rightarrow$ Target Complexity Map

By plugging the maximum possible input size $N$ into the $10^8$ limit equation, you can immediately rule out wrong approaches _before_ writing any code:

|**Input Constraint (N)**|**Max Allowed Operations**|**Acceptable Time Complexities**|**Typical Algorithms / Strategies**|
|---|---|---|---|
|**$N \le 10 \text{ or } 12$**|$12! \approx 4.7 \times 10^8$|**$O(N!)$** or **$O(N^2 \cdot 2^N)$**|Brute force permutations, TSP dynamic programming.|
|**$N \le 20$**|$2^{20} \approx 10^6$|**$O(2^N)$**|Backtracking, Bitmask Dynamic Programming, Subsets.|
|**$N \le 500$**|$500^3 = 1.25 \times 10^8$|**$O(N^3)$**|Matrix multiplication, Floyd-Warshall (all-pairs shortest paths), 3-loop DP.|
|**$N \le 5,000$**|$5000^2 = 2.5 \times 10^7$|**$O(N^2)$**|Nested loops, 2D Dynamic Programming, Bubble/Insertion sort.|
|**$N \le 10^5 \text{ or } 10^6$**|$10^5 \log_2(10^5) \approx 1.7 \times 10^6$|**$O(N \log N)$** or **$O(N)$**|Sorting (Merge/Quick), Binary Search, Segment Trees, Priority Queue (Heaps), Two Pointers.|
|**$N \le 10^8$**|$10^8$ ops|**$O(N)$**|Single pass linear scans, Hash Maps, Prefix Sums, Sliding Window.|
|**$N \ge 10^9$**|Needs to execute in $< 100$ ops|**$O(\log N)$** or **$O(1)$**|Math formulas, Bitwise operations, Binary Search over answer space.|

### How to Use This in Practice (Two Examples)

#### Scenario A: $N = 10^5$

- If you see an array constraint of $N = 100,000$:
    
- **Test $O(N^2)$:** $(10^5)^2 = 10^{10} = 10 \text{ billion ops}$. $\longrightarrow$ **Instant TLE!** (Nested loops are automatically out).
    
- **Test $O(N \log N)$:** $10^5 \times 17 \approx 1.7 \text{ million ops}$. $\longrightarrow$ **Passes easily!**
    
- **Conclusion:** You must use a solution like sorting, a Heap, or Binary Search.
    

#### Scenario B: $N = 300$

- If $N = 300$:
    
- **Test $O(N^3)$:** $300^3 = 27,000,000 = 2.7 \times 10^7 \text{ ops}$. $\longrightarrow$ **Passes under $10^8$!**
    
- **Conclusion:** You don't need to burn time thinking of a hyper-optimized linear solution; a 3-loop $O(N^3)$ Dynamic Programming approach will get full points.
    

### A Important Nuance for Live Technical Interviews

While this trick is a lifesaver for **Online Assessments** (where constraints are written at the bottom of the page), in a **live whiteboard or human interview**, constraints often aren't explicitly provided on the screen.

When interviewing with a human engineer:

1. **Always ask for the scale:** _"What is the expected maximum size of $N$?"_
    
2. **Use the constraint to confirm your approach:** _"Since $N$ can be up to $10^5$, an $O(N^2)$ brute force will hit TLE. I'll target an $O(N \log N)$ or $O(N)$ approach."_
    

Demonstrating that you use constraints to steer your algorithm design shows senior-level engineering intuition!