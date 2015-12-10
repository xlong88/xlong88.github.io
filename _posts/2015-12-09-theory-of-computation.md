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
_proof_:   

[basic idea: build a 1-1 map from string to natural number]

First of all, we consider $$\Sigma=\{0,1\}$$. It is obvious that any string defined on such alphabet can be considered as a number in base-2 system. However, that is not enough because it is not a 1-1 map, since a lot of string might be mapped to the same integer, for example, \\(0001\\) and \\(1\\). We can fix this issue by adding a ``1" before the string. Thus, we get a 1-1 map from a string to natural number. 

Then, we extend the above proof to more general cases. It is easy to figure out that, for $\mid\Sigma\mid = k$, we can transform any string defined on it as a number expressed in base-k by using similar approach as above.

Therefore, for any finite alphabet, the set of string defined on it is countable.

**Theorem 2**: The set of language on a finite alphabet is uncountable.

_proof_: 

[hint: [Cantor's diagonalization method](https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument)]

## Undecidability

**Theorem 1**: Language $$L_A=\{(<M>,\omega):<M> \mbox{ is a valid Turning Machine, } M \mbox{ accepts } \omega\}$$ is **undecidable**.

_proof_:

[hint: [Cantor's diagonalization method](https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument), note that $<M>$ is also a string]

**Theorem 2**: Language $$L_{HALT} = \{(<M>,\omega): <M> \mbox{ halts on } \omega\}$$ is **undecidable**.

_proof_:

[hint: reduction from ACCEPT]

**Theorem 3**: Determining whether a TM accepts any string is **undecidable**.

_proof_:

[hint: construct a parametric TM and reduce from ACCEPT]

**Corollary 3.1**: Determining whether a TM rejects all strings is **undecidable**.

_proof_:








**Corollary 3.2**: Determining whether two TM's $M_1, M_2$ accept the same language $L$ is **undecidable**.

_proof_:





  


