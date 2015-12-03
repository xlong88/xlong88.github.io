---
layout: post
title: Measure Running Time of Your Codes in C++
description: "useful skills"
tags: [Skill post]
image:
  background: triangular.png
---

## Sample Codes for Measuring Running Time in C++

**Note that**, C++ 11 is required
```
#include <chrono>
 
#define TIMING
 
#ifdef TIMING
#define INIT_TIMER auto start = std::chrono::high_resolution_clock::now();
#define START_TIMER  start = std::chrono::high_resolution_clock::now();
#define STOP_TIMER(name)  std::cout << "RUNTIME of " << name << ": " << \
    std::chrono::duration_cast<std::chrono::milliseconds>( \
            std::chrono::high_resolution_clock::now()-start \
    ).count() << " ms " << std::endl; 
#else
#define INIT_TIMER
#define START_TIMER
#define STOP_TIMER(name)
#endif
```
  


