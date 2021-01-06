---
template: BlogPost
path: /210105-2347
date: 2021-01-06T04:46:31.718Z
title: formGenerator
---
Working on a ticket at work where I had to add a field onto a form and do some conditional showing/hiding.  It's actually a bit tricky since we use a form generator so you have to use the configs to be able to do hide expressions, but so far, it's only being used consistently on form sections rather than a single field.  I've managed to get working via pseudo classes but I'm pretty sure there's a better way to do it without having to refactor a bunch of code, so I'm still trying to figure that out.