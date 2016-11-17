---
layout: post
title: Law of Large Numbers
description: "law of large numbers"
tags: [math, probability]
image:
  background: triangular.png
---

## Weak Law of Large Numbers

For any sequence $$X_1, X_2, ...$$ of _i.i.d._ random variables with finite expectation $$\mathbb{E}[X_1] = \mu$$ and finite variance $$Var[X_1] = \sigma^2$$, then the sample mean

$$
\bar{X}_n = \frac{1}{n}\sum\limits_{i=1}^{n}X_i
$$

converges to $$\mu$$ **in probability**, _i.e._, 

$$
\lim\limits_{n \rightarrow \infty}\mathbb{P}\big{[}|\bar{X}_n - \mu| < \epsilon \big{]} = 1
$$

for any $$\epsilon > 0$$.


Proof: Using Chebyshev's Inequality, the Weak Law of Large Numbers can be easily proved.

## Strong Law of Large Numbers

For any sequence $$X_1, X_2, ...$$ of _i.i.d._ random variables with finite expectation $$\mathbb{E}[X_1] = \mu$$ and finite variance $$Var[X_1] = \sigma^2$$, then the sample mean

$$
\bar{X}_n = \frac{1}{n}\sum\limits_{i=1}^{n}X_i
$$

converges to $$\mu$$ **almost surely**, _i.e._,

$$
\lim\limits_{n \rightarrow \infty}\mathbb{P}\big{[}\bar{X}_n = \mu \big{]} = 1
$$



        

