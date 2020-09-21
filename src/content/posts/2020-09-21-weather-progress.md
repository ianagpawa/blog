---
template: blog-post
title: Weather progress
slug: /200921-0011
date: 2020-09-21 00:10
description: weather
---
Hooked up the template and backend calls.  I've started compartmentalize components and trying to figure out if it's better to trickle down the state from parent to child or have the child direct access to the state.  I have to do some additional reading on that, but for now, I've left it at parent to child; where the parent has access to everything and then send relevant props to the children.

Progress has been pretty quick and steady.  Hopefully, should be live with this thing in a couple of days at the earliest.  I'm planning on just hosting it on github again, but might run into some issues with React deployment since I've never done it before.  I don't think it should be much of a problem; but as a contingency, I would have to learn to how to deploy it on Heroku or AWS.

Speaking of which, I think my next project will have to do with create a Spring Boot API and hosting it on Heroku.

After that, I'd like to learn AWS Lambda, or try out one of the machine learning ones, either natural language processing or tabular.

https://github.com/aws-samples/aws-machine-learning-university-accelerated-nlp
https://github.com/aws-samples/aws-machine-learning-university-accelerated-tab

