---
layout: post
title: Useful Linux Software
description: "Ubuntu Software Installation"
tags: [skills]
image:
  background: triangular.png
---

## PDF Reader ##

### Adobe Reader ###

~~~shell
wget -c http://ardownload.adobe.com/pub/adobe/reader/unix/9.x/9.5.5/enu/AdbeRdr9.5.5-1_i386linux_enu.deb
sudo dpkg -i AdbeRdr9.5.5-1_i386linux_enu.deb
~~~

If you use 64-bit Ubuntu, you need install the following dependencies:

~~~shell
sudo apt-get install libxml2:i386 libstdc++6:i386
~~~

Now, you can run _Adobe Reader_ by typing `acroread` in the terminal.


