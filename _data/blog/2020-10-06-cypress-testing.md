---
template: BlogPost
path: /201005-2346
date: 2020-10-06T03:46:44.421Z
title: Cypress Testing
---
Kept on with the Cypress task today.  I'm working on stubbing on network requests but there isn't any dynamic routing on Cypress.  You can stub a response based on a url, and you can alter the response, but you can't seem to do both.  This works fine for GET requests since the parameters will change, which you can then set to the url with a specific response.  It becomes problematic with POST calls since the url stays the same, but the request payload would vary, which would then expect particular response payloads.  OnResponse can be used to parse the XHR, which can then update the response accordingly, but it seems like this will only work if there's no mock response provided, so the onResponse works only with live calls.  I'd prefer not to have a live call since the Cypress tests are a part of a Gitlab pipeline stage, which could run on a temp sub-system environment, which would be isolated from the rest of our ecosystem.