---
template: BlogPost
path: /201014-2330
date: 2020-10-15T03:30:22.414Z
title: Ag-Grid and TSLint
---
Worked on a ticket today where I had to create a grid with grouped columns.  This was an interesting one since we typically don't have grouped columns.  It was pretty easy since Ag-Grid comes packaged with it out of the box; you just have to use a column group definition object, which contains a children prop, which is just an array of the regular column definitions.  Pretty painless and easy, the only reason it took longer than I would've liked was the requirement was for 15 groups for a total of 56 columns.



I also decided to integrate a lint check into an earlier stage of the CI/CD.  Previously, it would only trigger during the build stage, which means, the install, unit test, and component tests stages would have to complete before even starting the lint check, causing a lot of time to be wasted.  I suspect it was pushed back to this stage to avoid having to check the test files since they're not bundled in the build, saving time in processing, but is a complete drag when there is an issue.  Any way, I added a lint command in the npm pretest hook so that it would trigger at the unit test stage, identifying the issue immediately, avoiding having to way until the build stage, then fixing it and triggering another pipeline.  I did have to update the tslint config file to exclude all the swagger files and all the spec files.  I'll work on updating the spec files to be up to standard, but can't really do anything about the swagger files.