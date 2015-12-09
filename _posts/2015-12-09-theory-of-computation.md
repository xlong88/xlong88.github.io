---
layout: post
title: Basic Theorems in Theory of Computation
description: "useful theoretical computer science"
tags: [theoretical post]
image:
  background: triangular.png
---

## Countability

**Theorem 1**: For any finite alphabet \\(\Sigma\\), the set of string defined on it is countable.
_proof_: [basic idea: build a 1-1 map from string to natural number]

First of all, we consider \\(\Sigma=\{0,1\}\\). It is obvious that any string defined on such alphabet can be considered as a number in base-2 system. However, that is not enough because it is not a 1-1 map, since a lot of string might be mapped to the same integer, for example, \\(0001\\) and \\(1\\). We can fix this issue by adding a ``1" before the string. Thus, we get a 1-1 map from a string to natural number. 

Then, we extend the above proof to more general cases. It is easy to figure out that, for \\(\|\Sigma\|=k\\), we can transform any string defined on it as a number expressed in base-k by using similar approach as above.

Therefore, for any finite alphabet, the set of string defined on it is countable.

**Theorem 2**: The set of language on a finite alphabet is uncountable.
_proof_: [basic method: [Cantor's diagonalization method](https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument)]


  


