---
layout: post
title: Coding Practice - Increasing Triplet Subsequence
description: "algorithms to fins the increasing triplet subsequence"
tags: [algorithms,programming]
image:
  background: triangular.png
---

## [Leetcode 334]Increasing Triplet Subsequence

Given an array, return whether an increasing subsequence of length 3 exists or not in the array, _i.e.,_ given array $$A$$, if there exist $$0 \leq i < j < k \leq n - 1$$ such that $$A[i] < A[j] < A[k]$$, return true, otherwise, return false. More details you can refer to [leetcode 334](https://leetcode.com/problems/increasing-triplet-subsequence/).

## Solutions

### Brute Force

The easiest idea would be the brute force. It works as follows. For every $$0 < k < n - 1$$, check whether there exists $$i < k$$ and $$j > k$$ such that $$A[i] < A[k]$$ and $$A[j] > A[k]$$. The following gives its pseudo code.

~~~python
n = len(A)
for k in xrange(1,n - 1):
    f = False
    for i in range(k):
        if A[i] < A[k]:
            f = True
            break
    if f:
        for j in xrange(k + 1,n):
            if A[j] > A[k]:
                return True
return False
~~~

It is obvious, the above algorithm has time complexity of $$O(n^2)$$ and space complexity of $$O(1)$$. 

### Small Improvement

In the brute force algorithm, if you do some preprocessing, you can easily avoid the inner for loop, which means you can reduce the time complexity to $$O(n)$$. How does the preprocessing work? Actually it is quite easy. Imagine that if you have known the minimum number (denoting as $$T[k]$$) before $$A[k]$$ and the maximum number (denoting as $$Q[k]$$) after $$A[k]$$, then you only need to check whether $$T[k] < A[k] < Q[k]$$. And of course the preprocessing is to calculate $$T[k]$$ and $$Q[k]$$. Its pseudo code is shown in the following.

~~~python
n = len(A)

T = [A[0]]
Q = [A[-1]]

for k in xrange(1,n):
    T.append(min(T[-1],A[k - 1]))
    Q.insert(max(Q[0],A[n - k - 1]))

for k in xrange(1,n-1):
    if A[k] > T[k] and A[k] < Q[k]:
        return True

return False
~~~

It is easy to figure out that this algorithm has time complexity of $$O(n)$$, however, it also has space complexity of $$O(n)$$. 

### Even Better

Can we do better? Yes, of course, first of all, we can at least reduce the space from $$2n$$ to $$n$$ (_e.g.,_ replacing array $$T$$ with an integer number), however, the space complexity is still $$O(n)$$, just with a smaller constant factor. It seems that based on the previous idea (_i.e._, through comparing the minimum number before an element and the maximum one after it), we can hardly reduce the space requirement further. 

Let's change our though a little bit. Imagine if you know the "second order minimum element", here the "second order minimum element" is the minimum element which has at least one element before it and less than it, mathematically, $$x = \min\{A[k]:\exists j < k, A[j] < A[k]\}$$. Then, through comparing with it, we can get whether there is an increasing triplet subsequence in $$A[0..k]$$. Since, for any $$k$$, we only need to know the "second order minimum element" in $$A[0..k-1]$$, so we do not need preprocessing, and if we can update the "second order minimum element" in $$O(1)$$ space and $$O(1)$$ time when we go from $$A[k]$$ to $$A[k+1]$$, then we can design an algorithm with time complexity of $$O(n)$$ and space complexity of $$O(1)$$. 

Now, let's focus on the key question: can we update the "second order minimum element" in $$O(1)$$ space and $$O(1)$$ time when we go from $$A[k]$$ to $$A[k+1]$$? Assume $$x$$ is the "second order minimum element" in $$A[1..k-1]$$,  if $$x < A[k]$$, then we are done, because it means there exists an an increasing triplet subsequence in $$A[0..k]$$. However, things get tricky when $$x < A[k]$$. We cannot directly update $$x$$ as $$A[k]$$, since we can not guarantee there exists at least an element that is less than $$A[k]$$ in $$A[0..k-1]$$. Go one step further, if we have the record of the minimum element (denoting as $$y$$) in $$A[0..k-1]$$, then if $$A[k] \leq y$$, then $$x$$ is also the "second order minimum element" in $$A[0..k]$$, and if $$A[k] > y$$, then we can guarantee that there exists at least one element which is $$y$$ is less than $$A[k]$$, therefore, $$A[k]$$ becomes the "second order minimum element". Therefore, we can update the "second order minimum element" in $$O(1)$$ space and $$O(1)$$ time when we go from $$A[k]$$ to $$A[k+1]$$. 

The following shows the pseudo code.

~~~python
n = len(A)
x = sys.maxint
y = sys.maxint

for k in range(n):
    if A[k] > y:
        return True
    elif A[k] <= x:
        x = A[k]
    else:
        y = A[k]
return False
~~~









