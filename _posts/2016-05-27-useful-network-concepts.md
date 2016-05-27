---
layout: post
title: Basic Concepts in Network
description: "basic concepts"
tags: [foundation]
image:
  background: triangular.png
---



## New Concepts 

[Clock skew](https://en.wikipedia.org/wiki/Clock_skew)
: Given two sequentially-connected registers $$R_i$$ and $$R_j$$ with clock arrival times at destination and source register clock pins equal o $$T_{C_i}$$ and $$T_{C_j}$$ respectively, **clock skew** (sometimes called as **timing skew**, which is a phenomenon in synchronous circuits) is defined as $$T_{skew i,j} = T_{C_i} - T_{C_j}$$.

[XPath](http://www.w3schools.com/xsl/xpath_intro.asp)  
+ a syntax of defining parts of an XML document
+ uses path expressions to navigate in XML documents 
+ contains a library of standard functions

[Port mirroring](https://en.wikipedia.org/wiki/Port_mirroring)
: It is use on a network switch to send a copy of network packets seen on one switch port (or an entire VLAN) to a network monitoring connection to another switch port.


[Data Center Bridging (DCB)](https://en.wikipedia.org/wiki/Data_center_bridging)
: DCB is designed to avoid losses while buffer is overrun. It works as follows, a DCB NIC or switch port anticipates when it will not be able to accommodate more data in its buffer and send a pause frame to its directly connected upstream device asking it to wait for a specified amount of time before any future data transmission. (This mechanism might cause deadlock, in traditional Ethernet, deadlocks is avoided by dropping packets while buffer space is not available).

[InfiniBand](https://en.wikipedia.org/wiki/InfiniBand)
: a computer-networking communications standard used in high-performance computing features very high throughput and very low latency. It is used for data interconnect both among and with computers. It is also utilized as a direct, or switched interconnect between servers and storage systems, as well as an interconnect between storage systems. It is scalable and supports quality of service and failover, it is often used as a server connect in high-performance computing environment.

[MPLS Fast Reroute (FRR)](https://en.wikipedia.org/wiki/MPLS_local_protection)
: a local restoration network resiliency mechanism. It is actually a feature of resource reservation protocol (RSVP) traffic engineering (TE). In MPLS, each label switched path (LSP) passing through a facility is protected by a backup path which originates at the node immediately upstream to that facility.

[Failure-Carrying Packets (FCPs)](http://people.eecs.berkeley.edu/~istoica/papers/2007/fcp-sigcomm07.pdf)
: a mechanism to achieve fast failover under network failure. Once a packet arrives at an interface that has a failed link, the router would insert the failed link into the header of the packet and recompute a new route.

[Source Routing](https://en.wikipedia.org/wiki/Source_routing)
: allows a sender of a packet to partially or completely specify the route the packet takes through the network. In contrast, in non-source routing protocol, routers in the network determine the path based on the packet's destination. It allows easier troubleshooting, improved traceroute, and enables a node to discover all possible routes to a host. 

[Spanning Tree Protocol/Pre-VLAN Spanning Tree Protocol/Pre-Address Spanning Tree Protocol](https://en.wikipedia.org/wiki/Spanning_Tree_Protocol) 
: a network protocol that builds a logical loop-free topology for Ethernet networks.

[Equal-Cost Multi-Path Routing (ECMP)](https://en.wikipedia.org/wiki/Equal-cost_multi-path_routing)
: a routing strategy where next-hop packet forwarding to a single destination can occur over multiple "best paths" which tie for top place in routing metric calculations.

[TCP Incast](https://www.cs.cmu.edu/~dga/papers/incast-sigcomm2009.pdf)
: a common performance problem in data centers. It happens when an aggregator distributes a request to a group of workers, and after processing the requests, these workers send responses back almost at the same time.

[Nagle's Algorithm](https://en.wikipedia.org/wiki/Nagle%27s_algorithm)
: a means of improving the efficiency of TCP/IP networks by reducing the number of packets that need to be sent over the network. This algorithm interacts badly with the TCP delayed acknowledgments. It applies when a TCP sender is deciding whether to transmit a packet of data over a connection. If it has only a "small" amount of data to send, then Nagle algorithm says to send that packet only if all previously transmitted data has been acknowledged by the TCP receiver at the other end of the connection. In Nagle algorithm, "small" is defined as less data than the TCP maximum segment size (MSS) for the connection, the largest amount of data that can be sent in one datagram.
