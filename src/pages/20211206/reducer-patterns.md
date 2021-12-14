---
path: /reducer-patterns
date: 2021-12-06
title: Reducer Patterns Used in React
featuredImage: minimal-plant.jpg
featuredImageAlt: Plant in white pot with white background
tags:  tech, react
excerpt: There are different ways to reduce state using a reducer, here a few that I have found.
---

Here are some patterns I have come across while reducing state in React.

## Boilerplate
This code will be referenced in each example:
```js
const initialValues = {
  num: 0
}

// implement it
const [state, dispatch] = useReducer(reducer, initialState)

dispatch({ type: 'ADD_ONE' })
```

## 1. Switch/Case
```js
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ONE': return {...state, num: state.num + 1}
    default: return {...state}
  }
}
```
The is the pattern that I first learned and used for a long time. It makes sense, it's all over Stack Overflow, it's not super clunky. 'Ol reliable.

## 2. Function
```js
const reducer = (state, action) => {
  const actionsMap = {
    'ADD_ONE': () => ({...state, num: state.num + 1})
  }

  return actionsMap[action.type]?.() || state
}
```
This is my new favorite. When I first saw it, I thought it was weird that you would call a function in order to get the state. But it looks a lot cleaner in my opinion, and it's shorter too!

## 3. If/Else
```js
const reducer = (state, action) => {
  let newState
  
  if (action.type === 'ADD_ONE') {
    newState = {...state, num: state.num + 1}
  } else {
    newState = {...state}
  }

  return newState
}
```
Not sure why you would choose this over option 1, but I guess you could do it this way too.