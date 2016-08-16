---
layout: post
title: A Property of Maximum Function
description: "Simple but Useful Property of Maximum Function"
tags: [math]
image:
  background: triangular.png
---

## Given functions $$F = \{f_k\}_{k=1}^{n}$$, for any fixed $$t$$ define the maximum function as $$f(t) = \max_{f_k \in F} f_k(t)$$, and set $$\Pi = \{f_k \in F: f_k(t) = f(t) \} $$, we have if $$f^\prime$$ exists at $$t$$, then $$f^\prime(t) = f_{\pi \in \Pi}^\prime(t)$$.

_proof_: [General idea: $$A = B \Leftrightarrow A \leq B \& A \geq B$$]

+ $$f^\prime(t) \geq f_{\pi \in \Pi}^\prime(t)$$: 

$$\begin{aligned}
f^\prime(t)  &= 
f^\prime(t+) &= \lim_{x \rightarrow t+}\frac{f(x) - f(t)}{x - t}\\
             &\geq \lim_{x \rightarrow t+}\frac{f_{\pi}(x) - f_{\pi}(t)}{x - t}\\
             &= f_{\pi}^\prime(t+)\\
             &= f_{\pi}^\prime(t)
\end{aligned}
$$ 

+ $$f^\prime(t) \leq f_{\pi \in \Pi}^\prime(t)$$: 

$$\begin{aligned}
f^\prime(t)  &= 
f^\prime(t-) &= \lim_{x \rightarrow t-}\frac{f(x) - f(t)}{x - t}\\
             &\leq \lim_{x \rightarrow t-}\frac{f_{\pi}(x) - f_{\pi}(t)}{x - t}\\
             &= f_{\pi}^\prime(t-)\\
             &= f_{\pi}^\prime(t)
\end{aligned}
$$


