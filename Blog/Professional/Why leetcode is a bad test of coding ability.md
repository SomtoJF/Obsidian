This argument represents a very fierce battle in the tech industry. There are obviously people on both sides of it. People argue that candidates grind it and are able to LARP their way into a job without actually knowing how to build software. Another argument is that the best candidates get dropped a lot. I hear it honestly. But I do understand the angle of the companies as well.

> They're okay with false negatives. Not false positives

They are okay if a few good candidates are dropped if **all the bad ones are dropped as well**.  Someone who can't build good software walking through the door using leetcode is safer than the same person walking through without. This is because if you're smart enough grind leetcode and land the job, you're likely to get up to speed eventually. 

After leetcoding consistently for a while, I'd like to present an argument for why leetcode can be pretty bad. One I haven't heard very often. **And it has nothing to do with AI**. 

> So many leetcode (or leetcode style) questions become trivial after certain realisations. 

In some ways it feels like a massive IQ test where you just happen to answer the questions with code. If that's the point, then that's cool. But with those questions in existence, you can't really say that the goal is to test candidates' data structures and algorithms knowledge. 

## I have receipts too
Take this question for example:

_Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words_

Pretty nice looking Medium level question. One of the most beautiful questions I have ever seen. A marvel to behold. Forged in the darkness and made in the shadows. 

Extremely easy when you realise that **for a string to be the same forwards and backwards, each character must appear an even number of times with an exception for max 1 character where the odd character could be in the middle**.

Without that realisation, you're not arriving at the optimal solution.

Want another?

_Assume you have a method `isSubstring` which checks if one word is a substring of another. Given two strings, `s1` and `s2`, write code to check if `s2` is a rotation of `s1` using only one call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat")._

I'll provide some code  for this one since it's a bit of a trickier grasp.
```python
def isStringRotation(s1, s2):
	return len(s1) == len(s2) and isSubstring(s1 + s1, s2)
```

Take:

```
s1 = waterbottle
s2 = erbottlewat
```

Double `s1`:

```
waterbottlewaterbottle
```

The rotation appears as a contiguous substring:

```
waterbottle[erbottlewat]erbottle
              ↑
```

So if `s2` is a rotation of `s1`, it **must appear inside `s1 + s1`**.

Again, No realisation == No optimal solution for you