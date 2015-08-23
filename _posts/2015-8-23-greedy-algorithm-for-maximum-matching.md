---
layout: post
title: Approximation Analysis on The Greedy Maximum Bipartite Graph Matching
description: "approximation ratio analysis for greedy maximum bipartitue graph matching"
tags: [AM post]
image:
  background: triangular.png
---

Recently, I read a paper on semi-streaming algrithm which applied some knowledge about bipartite graph matxhing. It mentioned a greedy algorithm which could find the maximal matching of a bipartite graph (actually, also applicable to an arbitrary graph), and the size of the maximal matching would be no less the a half of the optimal one, _i.e._, the maximum matching. In this post, I will this greedy algorithm and the proof of its approximation ratio.


Now, let's start our journey ...

## Greedy Algorithm for Maximum Matching


``python

M = []

flag = {}

for e in E:
	if (e[0] not in flag) and (e[1] not in flag):
        M.append(e)
        flag.setdefault(e[0],1)
        flag.setdefault(e[1],1)
        

``

## Approximation Ratio Proof

Assume \\(M^*\\) is the maximum matching of graph \\(G(V,E)\\), and \\(M\\) is the maximal matching getting from the above greedy algorithm. As \\(|M^*| \geq |M|\\), let's define \\(\Delta = M^* - M = \{e:e \in M^*\mbox{ and } e\notin M\}\\). Then, for any edge \\(e in \Delta\\), since \\(e \notin M\\), it has to intersect with at least one edge in \\(M\\). At the same time, since \\(e \in M^*\\), so any two distinct edges \\(e_1,e_2\in \Delta\\) would not have any intersections. In order words, there would not be two edges in \\(\Delta\\) intersect with the same edge in \\(M\\). Therefore, we have, \\(|\Delta|\leq |M|\\), that is, \\(|M| \geq \frac{1}{2}|M^*|\\).

Eventually, we proved that the size of the maximal matching getting from the greedy algorithm above, is at least a half of the maximum one.
  


