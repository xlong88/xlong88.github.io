---
layout: post
title: Simulation - Confidence Intervals
description: "Simulations,Statistics"
tags: [simulations]
image:
  background: triangular.png
---

While doing simulations/experiments in your projects, sometimes you need to provide evidences to verify the confidence of the values obtained from your simulations/experiments. For example, you wrote an IOS application. Before you publish your APP, your boss wanted you to do some experiments to measure the average delay of your APP per processing a request. So you generated some requests randomly and did the experiment, and reported the data (_i.e.,_ the average delay) to your boss.  At that time, your boss might not buy your results, because you did not provide any evidence to convince your boss that your results were reliable enough. At this time, the **confidence intervals** might be useful for you. 

The following gives the formal definition of the **confidence intervals** from the book "":


Let $$X_1, X_2, ... , X_n$$ be a sample on a random variable $$X$$, where $$X$$ has pdf $$f(x; \theta), \theta \in \Sigma$$. Let $$0 < \alpha < 1$$ be specified. Let $$L = L(X_1, X_2, ... , X_n)$$ and $$U = U(X_1, X_2, ..., X_n)$$ be two statistics. We say that the interval $$(L, U)$$ is a $$(1 − \alpha) \times 100\%$$ **confidence interval** for $$\theta$$ if

$$
1 − \alpha = \mathbb{P}_{\theta}[\theta \in (L, U)]. 
$$

That is, the probability that the interval includes $$\theta$$ is $$1 − \alpha$$, which is called the confidence coefficient of the interval.

There are two different scenarios while calculating the confidence intervals of your estimations. The first case is that the standard deviation of the unknown random variable is known. The second one is that the standard deviation is unknown. The second case is more commonly encountered in real life. In this post, we will use $$95\%$$ confidence interval as an example to demonstrate the approach of computing confidence intervals.

First of all, we will make the following assumptions. The sample size in your simulation/experiment is $$n$$, and sample mean is $$\bar{X}$$, the sample standard deviation (only needed in the second case) is $$s_{\bar{X}}$$

## Confidence Interval ($$\sigma$$ Known)

By looking up the [Z-table](http://www.stat.ufl.edu/~athienit/Tables/Ztable.pdf), we can find that the $$z$$ value corresponding to the $$95\%$$ confidence interval is $$1.96$$, so the interval is

$$
\bar{X} \pm 1.96 \frac{\sigma}{\sqrt{n}}.
$$

## Confidence Interval ($$\sigma$$ Unknown)

By looking up the [T-table](https://en.wikipedia.org/wiki/Student%27s_t-distribution), you will find the $$t$$ value for the $$95\%$$ confidence interval with different sample sizes is in the $$7^{th}$$ column (note that, unlike Z distribution, there are different T distributions for different sample sizes.). The interval con be computed as,

$$
\bar{X} \pm t^{95\%}_{n-1} \frac{s}{\sqrt{n}}.
$$ 


## Notice

More details your can refer to [Confidence Interval: How to Find a Confidence Interval: The Easy Way!](http://www.statisticshowto.com/how-to-find-a-confidence-interval/) and the Youtube videos [Statistics 101: Confidence Intervals, Population Deviation Known](https://www.youtube.com/watch?v=9GtaIHFuEZU), [Statistics 101: Confidence Intervals, Population Deviation Unknown - Part 1](https://www.youtube.com/watch?v=BQ88ni4bJNA), and [Statistics 101: Confidence Intervals, Population Deviation Unknown - Part 2](https://www.youtube.com/watch?v=jHfMQB4HCkQ).


