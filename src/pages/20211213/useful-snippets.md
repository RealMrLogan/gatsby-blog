---
path: /array-interleave
date: 2021-12-13
title: Insert an Item Between All Elements in an Array
featuredImage: open-journal.jpg
featuredImageAlt: Open journal ready to write in
tags: javascript
excerpt: A useful snippet for arrays that I have used a few times.
---
Similar to `string.join()`, but for an array.
```js
const interleave = (arr, x) => arr.flatMap((e) => [e, x]).slice(0, -1)
```
## Example
```js
const arr = [1, 1, 1]
const binary = interleave(arr, 0)
// [1, 0, 1, 0, 1]
```
## Explanation
Objective: given an array, insert item `x` in between every element. Should not be inserted at the beginning or end.

So, first we need to figure out how to insert between every element, we can use [Array.prototype.flatMap()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap). What is is doing is creating a new array, with an item from `arr` and adding `x` onto it. 

Then it is flattened and repeated for all the elements. However, it adds an extra `x` at the end, that's what the slice is for. The -1 can be a little confusing, but it's just going to the end of the array. You can read more about that here: [Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

## References
- [What is the most elegant way to insert objects between array elements?](https://stackoverflow.com/a/55387306)