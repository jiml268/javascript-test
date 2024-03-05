// Sort the Unsortable

// In this challenge you will be given an array similar to the following:

// [[3], 4, [2], [5], 1, 6]
// In words, elements of the array are either an integer or an array containing a single integer.
// We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:

// [1, [2], [3], 4, [5], 6]
// Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".

// Examples
// sortIt([4, 1, 3]) ➞ [1, 3, 4]

// sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]

// sortIt([4, [1], 3]) ➞ [[1], 3, 4]

// sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]

// sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]

function sortIt(arr) {

    
}

sortIt([4, 1, 3]) // [1, 3, 4]
sortIt([[4], [1], [3]]) // [[1], [3], [4]]
sortIt([4, [1], 3]) // [[1], 3, 4]
sortIt([[4], 1, [3]]) // [1, [3], [4]]
sortIt([[3], 4, [2], [5], 1, 6]) // [1, [2], [3], 4, [5], 6]
sortIt([[3], 7, [9], [5], 1, 6]) // [1, [3], [5], 6, 7, [9]]
sortIt([[3], 7, [9], [5], 1, 6, [0]]) // [[0], 1, [3], [5], 6, 7, [9]]