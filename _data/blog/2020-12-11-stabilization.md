---
template: BlogPost
path: /201210-2337
date: 2020-12-05T08:17:41.178Z
title: Stabilization
---
I did well on the demo I gave.  It helped me practice public speaking along with my presentation skills.  I feel like I could use this skill to learn to do standup.

I've been working on Cypress component testing.  I've been trying to figure out the common routes for network stubbing and extracting them to a common command step.  There's been some weird issue weird test failures, I have been unable to pinpoint the exact issue but I've got it working regardless.  I did encounter an issue with trying to upgrade Cypress to the latest version.  First was the issue with Zscalar not allowing the download to proceed.  The other issue was that its not installing on the test step in the gitlab runner.  I think I have to create a base docker image with the new Cypress install along with appropriate npm and node versions.  I'll have to try to figure out how to do that.

I got a ticket today about some weird issue with the logging out on UAT.  It was particularly odd since we hadn't experienced this issue in Dev and QA; it only popped up in UAT.  After logging out, and clicking the login button on the template, the user would redirect directly into the app without a prompt to authenticate, causing failures and an error screen to popup.  Only clearing the cache seemed to resolve the issue as a workaround.  I added headers on the templates themselves but also had to add commands in the build files to add no caching lines to conf for the ngix server.  That was an interesting moment since it was just literally two lines of code, the easiest fix, for something that was causing such an annoying issue.

Anyway, it's the holidays and this upcoming sprint seems to be focused on stabilization.  The caseload should be lighter and be more relaxing.