---
template: BlogPost
path: /201111-2327
date: 2020-11-12T04:26:52.290Z
title: "chore: remove gulp"
---
I've been working on cleaning up our Apache reverse proxy.  Migrating from the Ping system, I've had to remove the components that were being used for login.  We were using gulp to run tasks for the build process, so I've had to work out what exactly it was doing, and if we could just remove all of it.  I never really worked on gulp before so this was an interesting learning experience.  I worked how to get rid of the styles by just adding the few bootstrap classes that were using from our inhouse stylesheets and also got rid of all our scripts since we didn't need them anymore.  I then worked out how to use npm scripts and the Dockerfile to build the dist folder correctly and copy them to the correct places in the httpd server.  I think I've also found a few vulnerabilities and will need to sort them out.  I'm quite surprised no one has found these yet, they seem to be quite obvious.