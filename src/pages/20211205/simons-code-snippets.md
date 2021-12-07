---
path: /simons-code-snippets
date: 2021-12-05
title: Simon Høiberg's Code Snippets
featuredImage: blurry-vision-w-computer.jpg
featuredImageAlt: Glasses in front of a blurred computer screen
tags:  tech, react
excerpt: Maecenas non vehicula purus. Duis vehicula viverra arcu, sit amet pellentesque dolor tincidunt nec.
---

## Preface
So, there's this awesome eBook by Simon Høiberg. He shares 65+ code snippets of mainly JS, TS, and Node; with some React and VSCode as well. This post is not a review of that book, it is a chance to share which snippets I appreciate the most.

Disclaimer: I have used some of the snippets he suggests before I read this book, these are only snippets I have learned and have stuck.

You can read the book for yourself here (it's free): [65+ JavaScript Code Snippets - With Explanations](https://simonhoiberg.com/ebooks/65-code-snippets-with-explanations).

## JavaScript
### Using a Falsy Bouncer
```js
const oddNumbers = [0, 1 ,2].map((num) => num % 2 === 0 ? null : num).filter(Boolean)
// [1]
```

### Avoid default exports
```js
export { Foo } from './Foo'
export { default as Bar } from './Bar'
```
I used to exclusively do named exports, however I couldn't justify not doing default exports. So I switched, but now I understand why it's a good idea!

## React
### Let React assign a key to its children
```jsx
{React.Children.toArray(
  data.map((item) => <div>{item}</div>)
)}
```
I use this one all the time, pure gold.

## Epilogue
At the end of his book, he has a few examples of common code reviews. Very insightful and worth the read.