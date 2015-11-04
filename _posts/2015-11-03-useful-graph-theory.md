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

\\(\Leftarrow\\): assume there is no \\(M\\)-augmenting path in \\(G\\), \\(M\\) is not the maximum matching, let \\(M'\\) be the maximum one. Then, let's analyze \\(M \Delta M'\\), it is easy to figure out that there are three kinds of subgraphs in \\(M \Delta M'\\):

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


Here is another proof from _Douglas's Introduction to Graph Theory_:

\\(\Leftarrow\\): This proof focuses on the converse-negative proposition, which means it proves that if \\(M\\) is a maximum matching which does not saturate \\(X\\), then there exists at least a subset \\(S\subseteq X\\) such that \\(|N(S)|<S\\).

Let's define the set of all the \\(M\\)-alternating paths \\(P\\) which starts from an exposed vertex \\(u\in X\\), and , we denote \\(S=P\cap X\\), and \\(T=P\cap Y\\). We have \\(T=N(S)\\). And for every vertex \\(v\in T\\), there exists a vertex \\(x \in S\setminus \{u\}\\) such that \\((v,x)\in M\\) and any two vertices in \\(T\\) can not share the vertices in \\(S\setminus \{u\}\\), therefore, \\(|N(S)|=|T|=|S\setminus \{u\}|<|S|\\). Proof completes!

## Vertex Cover & Matching
Given any graph \\(G\\), the size of the minimum vertex cover \\(\ge\\) the size of the maximum matching, and in bipartite graph, they are equal.

The first part is quite easy. To cover the maximum matching \\(M\\) in \\(G\\) we need exactly \\(|M|\\), since no edges in \\(M\\) share common vertices. Therefore, the size of the minimum vertex cover is at least the size of the maximum matching.

In bipartite graph \\(G(X,Y,E)\\), we have \\(VC=X \cap M\\) is a vertex  cover, where \\(M\\) is the maximum matching. Let's prove by contradiction, if \\(VC\\) is not a vertex cover, then there exists at least an edge \\(e \in E \setminus M\\) whose two end-nodes are both exposed. Therefore, itself forms a \\(M\\)-augmenting path, which contradict with the maximality of \\(M\\).


  


