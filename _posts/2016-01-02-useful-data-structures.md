---
layout: post
title: Useful Data Structures
description: "useful data structures"
tags: [data structure post]
image:
  background: triangular.png
---

## 1. Bloom Filter

[**Bloom filter**](https://en.wikipedia.org/wiki/Bloom_filter) is a space-efficient probabilistic data structure. It is used for membership query, _i.e.,_ answering the question whether an element $$y$$ belongs to a given set $$S$$.
However, bloom filter has a so-call false positive issue, where it may answer "YES" when $$y \notin S$$. 

### Algorithmic Description

In standard bloom filter, the baseline data structure is a [bit array](https://en.wikipedia.org/wiki/Bit_array) of $$m$$ bits with $$k \ge 1$$ **independent** hash functions. In this following description, we will use $$B[1..m]$$ to denote the bit array, and $$h_1, h_2, ..., h_k$$ to represent the $$k$$ hash functions.

At the very beginning, all of its bits are set to $$0$$. Standard bloom filter supports the following two operations:

1. **INSERT**: the following pseudo-code inserts all elements of set $$S$$ into the bloom filter.   
~~~python
for x in S:
    for h in hash_functions.value():
        B[h(x)] = 1
~~~
2. **QUERY**: the following pseudo-code queries whether $$y \in S$$.  
~~~python
answer = True
for h in hash_functions.value():
    answer &= B[h(y)] == 1
~~~

