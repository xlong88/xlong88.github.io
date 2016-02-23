---
layout: post
title: Coding Practice - Find the Majority Elements
description: "algorithms to fins majority elements in a sequence"
tags: [algorithms,programming]
image:
  background: triangular.png
---

## Majority Elements (MEs)

Given sequence $$A$$ of length $$N$$, the $$\theta$$-majority elements of $$A$$ are defined as the elements in $$A$$ whose occurrences are more than $$\theta \cdot N$$. For example, if the sequence is $$[1,1,2,3,4,1,2,1,2,3,4]$$, and $$\theta = 0.3$$, then the $$0.3$$-majority elements are $$[1]$$, since it is the only element whose occurrences are more than $$3$$. 

## Methods to Find (MEs)

### Basic Hashing Solution

The most direct solution to finding the majority elements would be using a hash table as counters for different elements, and then compare these counters with $$\theta \cdot N$$. The following give the pseudo codes.

~~~python
# INPUT: sequence A, and theta
# OUTPUT: majority elements K
N = len(A)
counters = {}
for x in A:
    if counters.has_key(x):
        counters[x] += 1
    else:
        counters[x] = 1

K = []
threshold = int(theta * N)
for key, value in counters.iteritems():
    if value > threshold:
        K.append(key)
~~~

Let do some analysis on the above algorithm. First of all, let's introduce some notations. Let $$\Sigma$$ be the set of alphabets, and $$\Sigma^* = (x_1,x_2,...,x_N)$$ be all the possible sequences that can be constructed by using the alphabets from $$\Sigma$$. Let $$A \in \Sigma^*$$ be a sequence. And $$\mid \Sigma \mid = n$$, $$\mid A \mid = N$$, $$0 < \theta \leq 1$$, and $$m$$ is the number of unique elements in $$A$$. 

Obviously, there are at most $$\lfoor\frac{1}{\theta}\rfloor$$ majority elements in $$A$$. However, in this basic hashing solution, we need $$O(m)$$ space, and $$O(N)$$ time. That is to say, when $$m \gg \lfoor\frac{1}{\theta}\rfloor$$ (this is the common case that we might encounter in real-life), we would waste a large amount of memory, because amongst all these counters, there are at most $$\lfoor\frac{1}{\theta}\rfloor$$ would be larger than $$\theta\cdot N$$. So, could we achieve $$O(\frac{1}{\theta})$$ space complexity?

### Smarter Solution





