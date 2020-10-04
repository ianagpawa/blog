---
template: BlogPost
path: /201004-0117
date: 2020-10-04T05:17:18.909Z
title: Weather Search
---
I am working on adding a search bar on the weather app.  Have the component in and is working, but had some issue with error handling.  On the request handler that I created, the catch wasn't being triggered.  I assumed the catch would trigger for any non-200/ok status, but it wasn't.  I didn't realize, I'd have to add that in myself, which did with:
`if(!response.ok) { throw new Error("not ok"); }`.  I actually rather like my implementation of the method.  I feel like it's clean.
```
export const getRequest = (params)  => {
    const {
        type,
        city,
        units,
        fetchFunc,
        fetchSuccessFunc,
        fetchFailureFunc
    } = params;
    return dispatch => {
      dispatch(fetchFunc());
      return fetch(getUrl({type, city, units}))
        .then(response => {
            if(!response.ok) { throw new Error("not ok"); }
            return response.json();
        })
        .then(json => dispatch(fetchSuccessFunc(json)) )
        .catch(err => dispatch(fetchFailureFunc(err)) );
    }
}
```

It's pretty much reuseable code, since it'll apply to any API call being made on react/redux.  I mean, you would have to tweak the getUrl and the params bit, but it's generalizable.  I'm surprised something like this isn't already part of the package.

I still need to add an error notification, probably red-colored text of some sort.