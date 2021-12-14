---
path: /useful-snippets
date: 2021-12-13
title: Useful Snippets of Code
featuredImage: open-journal.jpg
featuredImageAlt: Open journal ready to write in
tags:  javascript
excerpt: Have you ever found that one line of code that is the missing piece to an hour long puzzle? Here's mine.
---
## JavaScript
### Insert an item between every element in an array
Similar to `string.join()`, but for an array.
```js
const interleave = (arr, x) => arr.flatMap((e) => [e, x]).slice(0, -1)
```
#### Example
```js
const arr = [1, 1, 1]
const binary = interleave(arr, 0)
// [1, 0, 1, 0, 1]
```
#### Explanation
Objective: given an array, insert item `x` in between every element. Should not be inserted at the beginning or end.

So, first we need to figure out how to insert between every element, we can use [Array.prototype.flatMap()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap). What is is doing is creating a new array, with an item from `arr` and adding `x` onto it. 

Then it is flattened and repeated for all the elements. However, it adds an extra `x` at the end, that's what the slice is for. The -1 can be a little confusing, but it's just going to the end of the array. You can read more about that here: [Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)