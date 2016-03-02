---
layout: post
title: An Interesting Math Problem
description: "number of method to divide objects"
tags: [math]
image:
  background: triangular.png
---

## Problem Description

Given $$M$$ different objects needing to be divided into $$N \leq M$$ non-empty piles, how many different dividing methods are there?

## Solution

First of all, let's consider a simpler problem as follows. That is how many positive integer solutions (_i.e.,_$$x_i \in \mathbb{N}^{+}, \forall i \in [N]$$) are there for the following equation.

$$ 
\sum_{i = 1}^{N} x_i = M.
$$

Using [**the method of stars and bars (隔板法)**](https://en.wikipedia.org/wiki/Stars_and_bars_(combinatorics)), we can easily figure out that there are $$\binom{M - 1}{N - 1}$$ different solutions.

Let's consider the solutions to the above equation as a vector $$\vec{x} = (x_1,x_2,...,x_N)$$. Then, given any particular solution $\vec{x}_0$, it is obviously that any of it permutations is also a solution to the equation, and they are considered as different solutions to the above equation. Therefore, diving $$M$$ indistinguishable objects into $$N$$ piles has $$\frac{\binom{M - 1}{N-1}}{N!}$$ different methods.

Now, let's go back to the original problem, 
