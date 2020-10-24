---
template: BlogPost
path: /201024-0039
date: 2020-10-24T04:39:30.865Z
title: Apache Mod Auth OpenIDC
---
I finally was able to fix the login issue.  It was a weird thing where the jwt url wasn't being parsed from the meta data url so I added it manually on the config and started working correctly.  QA was just about the sign off, literally, and they encountered an issue with the logout.  Bleh.  This is the bug that is never ending.  I think I know the issue, the identity and access state cookies expires before our expiry process, therefore the jwt is invalid when we hit the session endpoint.  I think I found the root cause of the problem, and now I just have to figure out how to fix it.