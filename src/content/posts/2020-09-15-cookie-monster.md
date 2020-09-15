---
template: blog-post
title: Cookie Monster
slug: /200915-0023
date: 2020-09-15 00:23
description: cookies
---
I have a ticket for an issue with expiry sessions.  It's an Apache server using mod_auth_openidc and the cookies are piling up and the size of the request headers are causing bad requests.  I tried setting a cookie chunk size but that didn't work.  I could probably clear the whole cache but that would not be ideal.  The only other thing I can of is manually removing the cookies on UI.  

I think I'm stuck.