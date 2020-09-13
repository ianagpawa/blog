---
template: blog-post
title: Portfolio Updates
slug: /200913-1303
date: 2020-09-13 13:03
description: portfolio update
---
I updated the links on the portfolio page so that they'll open in a new tab.  I don't know if it's just me, but I always prefer to open in a new tab.  I don't know what it is; I think it feels cumbersome and disorganized having to keep going back to the same page to open other links; navigating and closing tabs seems much easier.

I also updated the project so that I build into the gh-pages branch and configured it to deploy that way.  It seems like a better implementation than having to build on every pushed commit.  That way, it will not trigger a job on the runners and I'd have to trigger it manual with a push to the gh-pages branch, giving me more control and saving on server resources.  