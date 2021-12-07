---
path: /reducer-patterns
date: 2021-12-06
title: Reducer Patterns Used in React
featuredImage: minimal-plant.jpg
featuredImageAlt: Plant in white pot with white background
tags:  tech, react
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

## 2. Function
```js
const reducer = (state, action) => {
  const actionsMap = {
    'ADD_ONE': () => ({...state, num: state.num + 1})
  }

  return actionsMap[action.type]?.() || state
}
```

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