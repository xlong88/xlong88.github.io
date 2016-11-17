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

Obviously, there are at most $$\lfloor\frac{1}{\theta}\rfloor$$ majority elements in $$A$$. However, in this basic hashing solution, we need $$O(m)$$ space, and $$O(N)$$ time. That is to say, when $$m \gg \lfloor\frac{1}{\theta}\rfloor$$ (this is the common case that we might encounter in real-life), we would waste a large amount of memory, because amongst all these counters, there are at most $$\lfloor\frac{1}{\theta}\rfloor$$ would be larger than $$\theta\cdot N$$. So, could we achieve $$O(\frac{1}{\theta})$$ space complexity?

### Smarter Solution

Actually, it turns out we can achieve $$O(\frac{1}{\theta})$$ space solution by using similar ideas as [Boyer–Moore majority vote algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm), which is an space-efficient linear-time algorithm to find the $$0.5$$ majority element in an sequence. 

This method was first proposed by [Richard M. Karp](https://www.eecs.berkeley.edu/Faculty/Homepages/karp.html), [Scott Shenker](https://www.eecs.berkeley.edu/Faculty/Homepages/shenker.html), and [Christos H. Papadimitriou](https://www.cs.berkeley.edu/~christos/) in *@KarpShenkerPapadimitriou2003*{: .cite} and [Erik D. Demaine](http://erikdemaine.org/) _et al_ in *DemaineLopezOrtizMunro2002*{: .cite}. It works as follows. It increases the number of counters as encountering new elements when passing through the sequence, and whenever the number of counters reaches $$\lceil \frac{1}{\theta}\rceil$$, it starts to decrease all the counters by one, and if any counter reaches $$0$$, removing it. Therefore, it can guarantee that there are at most $$\lceil \frac{1}{\theta}\rceil$$ counters. It is easy to figure out if an element has occurrences more than $$\theta \cdot N$$, its counter must survive. Therefore, if we define $$S$$ as the set of elements whose counters survived after passing through all the elements in the sequence. The the set of majority elements must be a subset of $$S$$. Therefore, by passing through the sequence again checking whether the occurrences of elements in $$S$$ exceed $$\theta \cdot N$$, we can obtain all the majority elements.

The following provides that pseudo codes.

~~~python
# INPUT/OUTPUT the same as before

N = len(A)
counters = {}

M = int(1.0 / theta)
for x in A:
    if counters.has_key(x):
        counters[x] += 1
    else:
        counters[x] = 1

    if len(counters) > M:
        for key in counters:
            counters[key] -= 1
            if counters[key] == 0:
                del counters[key]

# check all survived keys in counters
for key in counters:
    counters[key] = 0

for x in A:
    if counters.has_key(x):
        counters[x] += 1

K = []
threshold = int(theta * N)
for key in counters:
    if counters[key] > threshold:
        K.append(key)
~~~



**References**{: .reference}



