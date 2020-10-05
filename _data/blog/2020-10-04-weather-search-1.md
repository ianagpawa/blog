---
template: BlogPost
path: /201004-1311
date: 2020-10-04T17:11:04.338Z
title: feat/weatherSearch
---
Finally got around to adding the search bar to the weather app.  Hit another snag trying to render an error message component, but figured it out:  I had forgotten to add the prop to the parent component, which wasn't passing an updated value, so it wasn't triggering a re-rendering.

Next on the weather app todo is to change the endpoint used for forecasting to the 15 day one, that should make it easier.