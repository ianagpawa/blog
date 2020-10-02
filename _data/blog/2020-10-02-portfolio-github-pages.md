---
template: BlogPost
path: /201001-2330
date: 2020-10-02T03:30:00.413Z
title: Portfolio Github-Pages
---
My portfolio project is hosted on github-pages.  I currently have it configured so that it searches for a /docs directory to build my project.  I was previously using `npm run build --prod --base-href https://ianagpawa.github.io/portfolio/` command after finalizing my commits, but realized I don't need to do that at all.  Because Pug doesn't seem to support hot-reloading, at least with how it's configured currently, I have to stop the server and then start it up again, which always trigger the build process.  So then, when I add commits, I'm actually adding the updates to the build files. I'm glad I figured that out since it wasn't initially apparent, obviously.

I also figured out how to squash commits.  I'm trying to get into the habit of creating branches on personal projects rather than just committing on the master branch.  Recently, I had been doing that and creating pull requests on github and selecting the squash and merge option.  Now I'm just going to do it on the terminal with `git merge --squash branchName` whenever I've finalized my changes.  One thing I will not be able to do it is to check if it builds properly.  I should probably add that to my process when I've finished off the changes.