---
layout: post
title: Play with Apache2 ---- Proxy
description: "Useful Apache2 skills"
tags: [math]
image:
  background: triangular.png
---

## Enable the Required Modules

~~~shell
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod rewrite
~~~

## Configuration

Before you change the configuration file, you are suggested to make of backup of the original configuration.
~~~shell
sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/000-default.conf.bk
sudo vi /etc/apache2/sites-available/000-default.conf 
~~~

~~~
<VirtualHost *:*>
        ProxyPreserveHost On
        ProxyPass "/db" "http://localhost:8080"
        ProxyPassReverse "/db" "http://localhost:8080"
        ProxyPass "/chart" "http://localhost"
        ProxyPassReverse "/chart" "http://localhost"
    ProxyPass /static/  http://localhost:8080/static/
    ProxyPassReverse /static/ http://localhost:8080/static/
</VirtualHost>
~~~

### Explanation

Assume the your server is exmaple.com, by using the above configuration, the server will act as a proxy for http://localhost:8080/db/.* when seeing the URL http://exmaple.com/db/.*


