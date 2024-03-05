// Distance to Nearest Vowel
// Write a function that takes in a string and for each character,
//     returns the distance to the nearest vowel in the string.
//     If the character is a vowel itself, return 0.

// Examples
// distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]

// distanceToNearestVowel("babbb") ➞ [1, 0, 1, 2, 3]

// distanceToNearestVowel("abcdabcd") ➞ [0, 1, 2, 1, 0, 1, 2, 3]

// distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]
// Notes
// All input strings will contain at least one vowel.
// Strings will be lowercased.
// Vowels are: a, e, i, o, u.

function distanceToNearestVowel (str) {

    
}

distanceToNearestVowel("aaaaa") // [0, 0, 0, 0, 0]
distanceToNearestVowel("bba") // [2, 1, 0]
distanceToNearestVowel("abbb") // [0, 1, 2, 3]
distanceToNearestVowel("abab") // [0, 1, 0, 1]
distanceToNearestVowel("babbb") // [1, 0, 1, 2, 3]
distanceToNearestVowel("baaab") // [1, 0, 0, 0, 1]
distanceToNearestVowel("abcdabcd") // [0, 1, 2, 1, 0, 1, 2, 3]
distanceToNearestVowel("abbaaaaba") // [0, 1, 1, 0, 0, 0, 0, 1, 0]
distanceToNearestVowel("treesandflowers") // [2, 1, 0, 0, 1, 0, 1, 2, 2, 1, 0, 1, 0, 1, 2]
distanceToNearestVowel("pokerface") // [1, 0, 1, 0, 1, 1, 0, 1, 0]
distanceToNearestVowel("beautiful") // [1, 0, 0, 0, 1, 0, 1, 0, 1]
distanceToNearestVowel("rythmandblues") // [5, 4, 3, 2, 1, 0, 1, 2, 2, 1, 0, 0, 1]
distanceToNearestVowel("shopper") // [2, 1, 0, 1, 1, 0, 1]
distanceToNearestVowel("singingintherain") // [1, 0, 1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 0, 0, 1]
distanceToNearestVowel("sugarandspice") // [1, 0, 1, 0, 1, 0, 1, 2, 2, 1, 0, 1, 0]
distanceToNearestVowel("totally") // [1, 0, 1, 0, 1, 2, 3]