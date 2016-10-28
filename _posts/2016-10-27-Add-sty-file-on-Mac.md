---
layout: post
title: How to add .sty file manually on Mac 
description: "add sty file on Mac"
tags: [tools, latex]
image:
  background: triangular.png
---

For some Mac Air users, you might choose to use BasicTex instead of full-blown MaxTex for saving disk space or due to some other reasons. You might counter the following embarrassed situations, where your latex complained that some "sty" cannot be found. And when you trying to install it through tlmgr, tlmgr told you that it could not find the required file. At this time, you might need install the package (i.e., add the "sty" file) manually. This post will tell you how to add the "sty" by using "fullpage.sty" as an example. 

Throughout the following of the post, we assume that you have already got the "sty" file.

If you are using old version Mac OS (e.g., Mac OS 10.7), please refer to [this tutorial](http://tex.stackexchange.com/questions/10252/how-do-i-add-a-sty-file-to-my-mactex-texshop-installation).

If you are using OS X EI Capitan or even newer, the following tutorial might be helpful. 

First, Copy the "sty" file to the following directory: 

    /usr/local/texlive/2015basic/texmf-dist/tex/latex/base


For example,
~~~shell
sudo cp fullpage.sty /usr/local/texlive/2015basic/texmf-dist/tex/latex/base/
~~~

Then, run `texhash` to help latex to index the newly added "sty" file.

For example,
~~~shell
sudo texhash
~~~