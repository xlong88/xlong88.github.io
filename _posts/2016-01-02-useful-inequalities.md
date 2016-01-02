---
layout: post
title: Useful Inequalities
description: "useful inequalities"
tags: [AM post]
image:
  background: triangular.png
---

## Stirling's Formula

$$
n!=\sqrt{2\pi n}\left(\frac{n}{e}\right)^n\left(1 + \frac{1}{12n} + O\left(\frac{1}{n^2}\right)\right)
$$

_proof_: [TO BE ADDED]

## $$\binom{n}{k}$$ Related 

### 1. \\(\binom{n}{k}\le \frac{n^k}{k!}\\)

_proof_: 

$$\begin{aligned}\binom{n}{k} &= \frac{n!}{(n-k)! k!}\\
                              &= \frac{n(n-1)(n-2)\cdots (n -k + 1)}{k!}\\
                              &= \frac{n^k}{k!}
  \end{aligned}
$$

### 2. $$\frac{1}{k!} \le \frac{e^k}{k^k}$$

_proof_:

Since,

$$e^x = 1 + \frac{1}{1!}x + \frac{1}{2!}x^2 + \cdots + \frac{1}{k!}x^k + \cdots$$

Therefore,

$$e^k \ge \frac{1}{k!}k^k$$

Hence,

$$\frac{1}{k!} \le \frac{e^k}{k^k}$$

### 3. \\(\binom{n}{k}\le \left(\frac{ne}{k}\right)^k\\)

_proof_:

According the above two inequalities, it is easy to obtain this inequality.


### 4. \\(\binom{n}{k} \ge \left(\frac{n}{k}\right)^k\\)

_proof_:

$$\begin{aligned}\binom{n}{k} &= \frac{n!}{(n-k)! k!}\\
                              &= \frac{n(n-1)(n-2)\cdots (n -k + 1)}{k!}\\
                              &= \prod_{i = 0}^{k - 1} \frac{n - i}{k - i}
  \end{aligned}
$$

As, 

$$n \ge k \ge 0 \Rightarrow in \ge ik \qquad \forall i > 0$$

Hence, for any $$i = 1,2,...,k-1$$,

$$kn - ik \ge kn - in \Rightarrow \frac{n-i}{k-i} \ge \frac{n}{k}$$

Therefore,

$$\begin{aligned}\binom{n}{k} &= \prod_{i = 0}^{k - 1} \frac{n - i}{k - i}\\
                              &\ge \prod_{i = 0}^{k - 1}\frac{n}{k}\\
                              &= \left(\frac{n}{k}\right)^k
  \end{aligned}
$$

