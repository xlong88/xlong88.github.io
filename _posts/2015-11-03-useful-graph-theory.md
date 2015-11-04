---
layout: post
title: Graph Theory
description: "useful graph theory"
tags: [AM post]
image:
  background: triangular.png
---

## Berge's Theorem [1957]
Given a matching \\(M\\) of a graph \\(G\\), \\(M\\) is the maximum matching if and only if there is no \\(M\\)-augmenting path in \\(G\\).

\\(\Rightarrow\\): if \\(M\\) is the maximum matching, then there would be no \\(M\\)-augmenting path, because otherwise we can increase the size of \\(M\\).

\\(\Leftarrow\\): assume there is no \\(M\\)-augmenting path in \\(G\\), \\(M\\) is not the maximum matching, let \\(M'\\) be the maximum one. Then, let's analyze \\(M \triangleup M'\\), it is easy to figure out that there are three kinds of subgraphs in \\(M \triangleup M'\\):

    1. even-length cycle;
    2. even-length path;
    3. odd-length path;

Obviously, there has to exist at least one subgraph as _Case 3_, because otherwise, \\(M\\) would also become the maximum matching. And _Case 3_ indicates there is a \\(M\\)-augmenting path. Contradiction!! Proof completes!!

## Hall's Condition [1935]
Given a bipartite graph \\(G(X,Y,E)\\), then there exists a matching \\(M\\) saturates \\(X\\) if and only if for every subset \\(S\subseteq X\\), \\(|N(S)|\ge|S|\\).

\\(\Rightarrow\\): if \\(M\\) saturates \\(X\\), then for every subset \\(S\subseteq X\\), we have \\(|N(S)|\ge |\{y:(s,y) \in M, s \in S\}|=|S|\\).

\\(\Leftarrow\\): we can prove by induction. 

Base case, when \\(|X|=1\\), obviously the statement holds.

Assume that statement holds when \\(|X| \le k - 1\\). When \\(|X|=k\\),

1. If for every subset \\(S\subseteq X\\), \\(N(S)>|S|\\), then we can remove an arbitrary edge from \\(G\\) obtaining \\(G'\\). We have, \\(|N(S')|\ge |S'|\\) for every subset \\(S'\subseteq X'\\), therefore, \\(G'\\) has a matching saturates \\(X'\\). Hence, adding the removed edge, we can get a matching saturating \\(X\\).
2. If there exists a subset \\(S\\) such that \\(|N(S)|=|S|\\): 

    1) if \\(S\\) is a real subset of \\(X\\), then we have in the subgraph induced by \\(S\\) and \\(N(S)\\), there exists a matching saturating \\(S\\), and in the subgraph induced by \\(X\setminus S\\), there also exists a matching saturating \\(X\setminus S\\). Therefore, there exists a matching saturating \\(X\\) in \\(G\\). 
    2) if \\(S=X\\) is the only subset of \\(X\\) such that \\(|N(S)|=|S|\\), then by _Case 1_, we can conclude that there exists a matching saturating \\(X\\).

  


