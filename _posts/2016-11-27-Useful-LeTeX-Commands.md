---
layout: post
title: Useful user-defined LaTeX commands 
description: "add sty file on Mac"
tags: [tools, latex]
image:
  background: triangular.png
---

This post collects certain useful LeTeX commands, mainly focusing on user-defined ones.

### Efficient Commands to Representing a Path in a Graph ###

~~~latex
% The etoolbox package is a toolbox of programming tools geared primarily towards
% LaTeX class and package authors. It provides LaTeX frontends to some of the new
% primitives provided by e-TeX as well as some generic tools which are not related to
% e-TeX but match the profile of this package.
\usepackage{etoolbox}
\ifx\walk\undefined 
\makeatletter
\newcommand{\walk}[1]{%
  \@tempswafalse
  \@for\next:=#1\do
    {\if@tempswa\!\!\rightarrow\!\!\else\@tempswatrue\fi\next}%
}
\makeatother
\fi
~~~


