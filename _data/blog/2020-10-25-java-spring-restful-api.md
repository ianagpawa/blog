---
template: BlogPost
path: /201025-0103
date: 2020-10-25T05:03:16.537Z
title: Java Spring RESTful API
---
Installing programs is so tedious.  I should figure out a way to powershell to install all the programs I need.

* Github for Windows
* Node / NPM
* Microsoft Visual Studio Code
* Java
* Gradle
* IntelliJ
* Docker
* Postman
* Musicbee
* Dropbox
* Chrome
* MalwareBytes

I wonder if there's a way to create an image from Windows, that might be easiest, but it shouldn't take much to be able to install all these things with just a shell script.  I'd need to add paths but that's not so hard.  Maybe an interesting thing to do look into down the line.

Started working on a RESTful Spring Boot service.  Pretty easy with the tutorials and the Spring Initializr.  My Java is a bit rusty I realized; just need some more practice.  Right now, the project is using H2 SQL which is in-memory storage.  That means its stored in volatile system memory, so any time the server is restarted or goes down, all that info is lost  Will need to figure out how to use a proper DB with it, which means I'll probably have to figure out how to use Docker a mongoDB or SQL database VM. That's for after this project; for now, have to figure out how to create a simple random quote generator api.  Start with an aggregate GET call for all quotes, and then another endpoint for each single quote by passing a param.