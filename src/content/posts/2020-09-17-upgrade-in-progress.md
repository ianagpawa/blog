---
template: blog-post
title: Upgrade in progress
slug: /200916-2323
date: 2020-09-16 23:22
description: upgrade
---
I'm still working on the issue with mod_auth_openidc.  I needed to use OIDCUnAuthAction but our version was behind, so I had find the new image and upgrade.  Unfortunately, the higher version didn't have an image for the debian distro we were using on the server and we have our own internal dockerhub, so it had to be added on there first.  After that, debugged issues with dependencies and then finally was able to work on the problem at hand.  Login seemed to be progressing forward but encountered a new error.  I played around with it but couldn't figure out.  I'll work on it tomorrow.

After some time not thinking about it, now I think it may be the OIDCUnAuthAction  configuration I had used.  But, if that were true, then it should've triggered an expiry process rather than mod_auth_openidc throwing the error and serve the error template.  Curious.