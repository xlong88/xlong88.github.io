---
layout: post
title: Programming - C++ Constructors
description: "Properties of C++ Constructor"
tags: [C++,programming]
image:
  background: triangular.png
---

In C++, the corresponding constructor would be called whenever an object is created. In this post, we deeply dive in the constructors.

## Object Arrays

Sometimes, we want to create a static object array. One way to do it is to use object pointers. Are there any other ways to do it? Let's consider the following simple example.

~~~C++
class Position{
    int x;
    int y;
public:
    Position()
    {
        x = 0;
        y = 0;
    }
    Position(int x_,int y_ = 0)
    {
        x = x_;
        y = y_;
    }
    void PrintXY()
    {
        cout << "x = " << x
             << ", y = " << y << endl;
    }
};
~~~

Take the following Position class as an example, you want to create an array of positions whose length is 3. Of course, you can do like that,

~~~C++
Position p1[3];
~~~

However, the above method can only work for all positions initializing as 0's. If we want customized initialization, we could we achieve it. Actually, we can do like the following,

~~~C++
Position p2[3] = {{1,2},3,{0,4}};
~~~

By using the above method, you create three position objects, one is initialized as (1,2), one is (3,0), one is (0,4).









