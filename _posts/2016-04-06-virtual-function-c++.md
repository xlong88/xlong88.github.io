---
layout: post
title: Programming - C++ Virtual Function and Polymorphism
description: "C++ Virtual Functions"
tags: [C++,programming]
image:
  background: triangular.png
---

## An example of C++ Polymorphism

Source code:

~~~C++
#include <iostream>

using namespace std;

class A{
public:
    virtual void vFunc()
    {
        cout << "A::vFunc() is called!" << endl;
    }
};

class B: public A{
public:
    virtual void vFunc()
    {
        cout << "B::vFunc() is called!" << endl;
    }   
};

class C: public A{
public:
    virtual void vFunc()
    {
        cout << "C::vFunc() is called!" << endl;
    }   
};

class D: public B{
public:
    virtual void vFunc()
    {
        cout << "D::vFunc() is called!" << endl;
    }   
};

int main()
{
    A a;
    B b;
    C c;
    D d;
    A *pa = &a;
    B *pb = &b;
    C *pc = &c;
    D *pd = &d;

    cout << "pa->vFunc() \n";
    cout << "  ";
    pa->vFunc();

    cout << "pb->vFunc() \n";
    cout << "  ";
    pb->vFunc();

    cout << "pc->vFunc() \n";
    cout << "  ";
    pc->vFunc();

    cout << "pd->vFunc() \n";
    cout << "  ";
    pd->vFunc();
    
    cout << endl;
    pa = pb;
    cout << "pa = pb \npa->vFunc() \n";
    cout << "  ";
    pa->vFunc();

    cout << "pa = pc \npa->vFunc() \n";
    cout << "  ";
    pa = pc;
    pa->vFunc();

    cout << "pa = pd \npa->vFunc() \n";
    cout << "  ";
    pa = pd;
    pa->vFunc();


    return 0;
}
~~~

Output:

~~~C++
pa->vFunc() 
  A::vFunc() is called!
pb->vFunc() 
  B::vFunc() is called!
pc->vFunc() 
  C::vFunc() is called!
pd->vFunc() 
  D::vFunc() is called!

pa = pb 
pa->vFunc() 
  B::vFunc() is called!
pa = pc 
pa->vFunc() 
  C::vFunc() is called!
pa = pd 
pa->vFunc() 
  D::vFunc() is called!
~~~ 

