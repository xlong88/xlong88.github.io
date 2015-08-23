---
layout: post
title: Approximation Analysis on The Greedy Maximum Bipartite Graph Matching
description: "approximation ratio analysis for greedy maximum bipartitue graph matching"
tags: [AM post]
image:
  background: triangular.png
---

Recently, I read a paper on semi-streaming algrithm which applied some knowledge about bipartite graph matching. It mentioned a greedy algorithm which could find the maximal matching of a bipartite graph (actually, also applicable to an arbitrary graph), and the size of the maximal matching would be no less than a half of the optimal one, _i.e._, the maximum matching. In this post, we will learn about this greedy algorithm and the proof of its approximation ratio.


Now, let's start our journey ...

## Greedy Algorithm for Maximum Matching
The following code is using python-style.

```python
M = []
flag = {}
for e in E:
	if (e[0] not in flag) and (e[1] not in flag):  
        M.append(e)      
        flag.setdefault(e[0],1)       
        flag.setdefault(e[1],1)       
```

## Approximation Ratio Proof

Assume \\(M'\\) is the maximum matching of graph \\(G(V,E)\\), and \\(M\\) is the maximal matching getting from the above greedy algorithm. Let's define \\(\Delta = M' - M = \\{e:e \in M'\mbox{ and } e\notin M\\}\\). Then, for any edge \\(e \in \Delta\\), since \\(e \notin M\\), it has to intersect with at least one edge in \\(M\\). At the same time, since \\(e \in M'\\), so any two distinct edges \\(e,e' \in \Delta\\) would not have any intersections. In order words, there would not be two edges in \\(\Delta\\) intersect with the same edge in \\(M\\). Therefore, we have, \\(|\Delta|\leq |M|\\), which indicates that, \\(|M| \geq \frac{1}{2}|M'|\\).

Eventually, we proved that the size of the maximal matching getting from the greedy algorithm above, is at least a half of the maximum one.



Note that, this proof is inspired by [matchingNotes on CS 6820 Fall 2014 at Cornell University][1]

[1] http://www.cs.cornell.edu/Courses/cs6820/2014fa/matchingNotes.pdf 
  


