---
layout: post
title: Math - limsup and liminf
description: "Properties of limsup and liminf"
tags: [math,real analysis]
image:
  background: triangular.png
---

## Definitions

The limit inferior (_i.e._, **liminf**) of a sequence $$\{x_n\}$$ is defined as  
$$
\liminf_{n \rightarrow \infty} x_n = \lim_{n \rightarrow \infty}(\inf_{m \geq n} x_m)
$$  
or  
$$
\liminf_{n \rightarrow \infty} x_n = \sup_{n\geq 0}\inf_{m \geq n} x_m = \sup\{\\inf\{x_m: m \geq n\}:n \geq 0\}.
$$  

Similarly, the limit superior of $$\{x_n\}$$ is defined by  
$$
\limsup_{n \rightarrow \infty} x_n = \lim_{n \rightarrow \infty}(\sup_{m \geq n} x_m)
$$  
or  
$$
\limsup_{n \rightarrow \infty} x_n = \inf_{n \geq 0}\sup_{m \geq n}x_m = \inf\{\sup\{x_m:m \geq n\}:n \geq 0\}.
$$

## Properties

$$\limsup_{n \rightarrow \infty} (- x_n) = -\liminf_{n \rightarrow \infty}x_n.$$  

$$\{x_n\}$$ converges **if and only if**  
$$
\limsup_{n \rightarrow \infty} x_n = \liminf_{n \rightarrow \infty}x_n.
$$

$$\limsup_{n \rightarrow \infty} (x_n + y_n) \leq \limsup_{n \rightarrow \infty} x_n = \limsup_{n \rightarrow \infty} y_n.$$ 

$$\liminf_{n \rightarrow \infty}(x_n + y_n) \geq \liminf_{n \rightarrow \infty}x_n + \liminf_{n \rightarrow \infty} y_n.$$  
