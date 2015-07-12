---
layout: post
title: Build Free Blog Website with Github Pages and Jekyll
description: "Steps to build a free blog website by using Github Pages and Jekyll."
tags: [tutorial post]
image:
  background: triangular.png
---

Nowadays, blog is getting more and more important. More and more people start to play with blog by using the existing blog systems provieded by various companies. Some people even try to build their own blog system by using wordpress or some other tools. Today, I will introduce you an easy way to build your own blog website by using Github Pages. 

First, Let me talk about the pros and cons of Github Pages.

* Advantages:

	* free
	* no need to establish your own web server
	* can bind to your own domain name
	* lightweight, no complex comfiguration

* Disadvantages:

	* it uses Jekyll template system, more suitable for posting blog, documentation and so on
	* limited dynamic web supporting
	* based on Git, there is no powful backend like wordpress, and many work should be done manually

Then, let's come to the "how to build".

## "Activate" your Github Pages

1. create a repository named as **username.github.io** (the first part has to be your username for Github)
2. test whether your Github Pages works or not by pushing a HTML file (you can simply put a "Hello World" in that file) named as **index.html**. Then, open your browser, put URL **username.github.io** in the address bar, if everything goes well, you will see your content from the **index.html**.



{% highlight yaml %}
image:
  background: filename.png
{% endhighlight %}