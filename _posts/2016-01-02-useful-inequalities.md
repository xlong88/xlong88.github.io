---
layout: post
title: Useful Inequalities
description: "useful inequalities"
tags: [AM post]
image:
  background: triangular.png
---
* auto-gen TOC:
{:toc}

## 1. Stirling's Formula

$$
n!=\sqrt{2\pi n}\left(\frac{n}{e}\right)^n\left(1 + \frac{1}{12n} + O\left(\frac{1}{n^2}\right)\right)
$$

_proof_: [TO BE ADDED]

## 2. Binomial Distribution  

### 2.1. Version 1

$$\binom{n}{k} \le \frac{n^k}{k!}$$

_proof_: 

$$\begin{aligned}\binom{n}{k} &= \frac{n!}{(n-k)! k!}\\
                              &= \frac{n(n-1)(n-2)\cdots (n -k + 1)}{k!}\\
                              &= \frac{n^k}{k!}
  \end{aligned}
$$

### 2.2. Version 2

$$\frac{1}{k!} \le \frac{e^k}{k^k}$$

_proof_:

Since,

$$e^x = 1 + \frac{1}{1!}x + \frac{1}{2!}x^2 + \cdots + \frac{1}{k!}x^k + \cdots$$

Therefore,

$$e^k \ge \frac{1}{k!}k^k$$

Hence,

$$\frac{1}{k!} \le \frac{e^k}{k^k}$$

### 2.3. Version 3

$$\binom{n}{k}\le \left(\frac{ne}{k}\right)^k$$

_proof_:

According the above two inequalities, it is easy to obtain this inequality.


### 2.4. Version 4

$$\binom{n}{k} \ge \left(\frac{n}{k}\right)^k$$

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

## 3. In Probability Theory

### 3.1. Markov's Inequality

[Markov's inequality](https://en.wikipedia.org/wiki/Markov%27s_inequality) gives an upper bound (a function of its expectation) for the probability that a **non-negative** function of a random variable is no less than a constant.

#### 3.1.1 Basis Version
Given any random variable $$X$$ and $$a > E(X)$$, we have,

$$\mathbb{P}(X \ge a) \le \frac{\mathbb{E}(X)}{a}.$$

_proof_:

#### 3.1.2 Extended Version
Given a monotonically increasing function $$\phi$$ from non-negative real numbers to the non-negative reals, $$X$$ is a random variable, $$a \ge 0$$, and $$\phi (a) > 0$$, then,

$$\mathbb{P}(\mid X \mid \ge a) \le \frac{\mathbb{E}(\phi (X))}{\phi (a)}.$$

_proof_:

### 3.2. Chebyshev's Inequality
[Chebyshev's inequality](https://en.wikipedia.org/wiki/Chebyshev%27s_inequality) is about how "far" can the values of a distribution deviates from its mean. Formally speaking, it guarantees that for any distribution no more than $$\frac{1}{k^2}$$ of the distribution's values can be more than $$k$$ standard deviations away from the mean.

#### 3.2.1 Basic Version
Let $$X$$ be a random variable with finite expected value $$\mu$$ and finite non-zero variance $$\sigma^2$$. Then for any real number $$k > 0$$.

$$\mathbb{P}(\mid X - \mu \mid \ge k \sigma) \le \frac{1}{k^2}.$$

_proof_



#### 3.2.2 Extensions

1. **Asymmetric case**: for any $$k_1 + k_2 = 0$$ and $$k_1 < k_2$$, we have,

$$ \mathbb{P}(k_1 < X < k_2) \ge 1 - \frac{\sigma^2}{(k_2 - k_1)^2},$$
_proof_
2. **Vector Version**: for a random vector $$X = (x_1,x_2,...,)$$ with mean 

$$\mu = (\mu_1,\mu_2,...)$$, variance $$\sigma^2=(\sigma_1^2,\sigma_2^2,...)$$ and an arbitrary norm $$\mid\mid\cdot\mid\mid$$ that,
$$ \mathbb{P}(\mid\mid X - \mu\mid\mid \ge k \mid\mid \sigma\mid\mid) \le \frac{1}{k^2}$$.
_proof_
