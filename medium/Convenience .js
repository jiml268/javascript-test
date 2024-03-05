// Convenience Store


// Given a total due and an array representing the amount of change in your pocket, determine
// whether or not you are able to pay for the item.Change will always be represented in the following
// order: quarters, dimes, nickels, pennies.

// To illustrate: ([25, 20, 5, 0], 4.25) should yield true,
// since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

// Examples
// ([2, 100, 0, 0], 14.11) ➞ false

// ([0, 0, 20, 5], 0.75) ➞ true

// ([30, 40, 20, 5], 12.55) ➞ true

// ([10, 0, 0, 50], 3.85) ➞ false

// ([1, 0, 5, 219], 19.99) ➞ false


function Convenience(arr, due) {

    
}

Convenience([2, 100, 0, 0], 14.11) // false;
Convenience([0, 0, 20, 5], 0.75) // true;
Convenience([30, 40, 20, 5], 12.55) // true;
Convenience([10, 0, 0, 50],13.85) // false;
Convenience([1, 0, 5, 219], 19.99) // false;
Convenience([1, 0, 2555, 219], 127.75) // true;
Convenience([1, 335, 0, 219], 35.21) // true;
