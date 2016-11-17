---
layout: post
title: Math - limsup and liminf
description: "limsup and liminf"
tags: [math,real analysis]
image:
  background: triangular.png
---

## Preparations: Properties of Monotone Sequences

**Theorem** A monotone sequence of real numbers converges **if and only if** it is bounded. Moreover, 

1. If $$\{x_n\}$$ is monotone increasing and bounded, then
$$
\lim_{n \rightarrow \infty} x_n = \sup\{x_n:n \in \mathbb{N}\}.
$$
2. If $$\{x_n\}$$ is monotone decreasing and bounded, then
$$
\lim_{n \rightarrow \infty} x_n = \inf\{x_n:n \in \mathbb{N}\}.
$$
3. If $$\{x_n\}$$ is monotone increasing and unbounded, then
$$
\lim_{n \rightarrow \infty} x_n = \infty.
$$
4. If $$\{x_n\}$$ is monotone decreasing and unbounded, then
5. $$
\lim_{n \rightarrow \infty} x_n = -\infty.
$$

## Definitions

**Definition** Let $$\{x_n\}$$ be a sequence of real numbers, let $$y_n = \sup\{x_k:k \geq n\}$$, and $$z_n = \inf\{x_k:k \geq n\}$$, then
$$
\limsup_{n \rightarrow \infty}x_n = \lim_{n \rightarrow \infty}y_n = \inf_{n \in \mathbb{N}}\{\sup_{k \geq n}x_k\}.
$$
and
$$
\liminf_{n \rightarrow \infty}x_n = \lim_{n \rightarrow \infty}z_n = \sup_{n \in \mathbb{N}}\{\inf_{k \geq n}x_k\}.
$$

**Proposition** Every bounded sequence has $$\limsup$$ and $$\liminf$$, and the sequence converges **if and only if** $$\limsup = \liminf$$.




