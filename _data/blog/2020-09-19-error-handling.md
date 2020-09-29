---
template: blog-post
title: Error Handling
path: /2009019-1842
date: 2020-09-19 18:41
metaDescription: errorHandling
---
I created the React component for handling an unknown user.  It's an interesting task as it handles a particular scenario.  A user is authenticated but is not found by the User service, causing a 403 failure.  I added a component an overlay component displaying a template.  I added a prop to the User state that would be triggered during that particular API call failure, which would then render the component.  It was relatively easy and didn't take very long.  I've already tested it on local with rejected Promises and is working; just need to test it live now.