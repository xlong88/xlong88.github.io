---
layout: post
title: Analysis of Expected Performance of Randomized QuickSort
description: "Analysis of randomized algorithms"
tags: [math post]
image:
  background: triangular.png
---

**Theorem**: For _randomized quicksort_, the expected number of comparisons is \\(O(n\log n)\\).

_proof_: Denote the input array as \\(A=[a_1,a_2,...,a_n]\\), while the sorted version is \\(S=[s_1,s_2,...,s_n]\\). Let \\(X\\) be the \# of comparisons over the execution of _quicksort_, and \\(X_{i,j}\\) be the indicator random variable which is defined as, 
$$
X_{i,j} = \begin{cases}1,\quad if s_i \& s_j \mbox{ is compared}\\0,\quad \mbox{otherwise}\end{cases}
$$
Then, the total number of comparisons can be expressed as,
$$
X = \sum_{i = 1}^{n - 1}\sum_{j = i + 1}^{n}X_{i,j}
$$
Now, let's focus on the probability of \\(X_{i,j}= 1\\), which equals to the probability that \\(s_i\\) and \\(s_j\\) are compared. As in _quicksort_, only when one of two elements is selected as pivot, and before that they are in the same sub-array, the two elements need to be compared. That is to say, the probability that \\(s_i\\) and \\(s_j\\) are compared equals to the probability that one of \\(s_i\\) and \\(s_j\\) is selected as pivot, and before that, they are in the same sub-array, which mean \\(s_{i+1},s_{i+2},...,s_{j-1}\\) can not be selected as pivot before them. Therefore,
$$
p(X_{i,j}=1)=\frac{2}{j-i+1}
$$
Finally, we obtain that,
$$
\begin{align} 
E(X) &= E(\sum_{i = 1}^{n - 1}\sum_{j = i + 1}^{n}X_{i,j})\\
     &= \sum_{i = 1}^{n - 1}\sum_{j = i + 1}^{n}E(X_{i,j})\\
     &= \sum_{i = 1}^{n - 1}\sum_{j = i + 1}^{n}\frac{2}{j-i+1}\\
     &\le 2\sum_{i = 1}^{n}\sum_{k = 2}^{n}\frac{1}{k}\\
     &\le 2n\ln n
\end{align}
$$

