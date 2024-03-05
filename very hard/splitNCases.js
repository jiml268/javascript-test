// Split the String into N Cases of Equal Length
// Create a function that accepts str and cases as parameters where the string is split
// into N distinct cases of equal length as shown:

// Examples
// splitNCases("Strengthened", 6) ➞ ["St", "re", "ng", "th", "en", "ed"]

// splitNCases("Unscrupulous", 2) ➞ ["Unscru", "pulous" ]

// splitNCases("Flavorless", 1) ➞ ["Flavorless" ]
// Notes
// If it's not possible to split the string as described, return ["Error"].

function splitNCases(str) {

    
}

splitNCases("Unscrupulous", 2) //  [ "Unscru", "pulous" ]
splitNCases("Incomprehensible", 4) //  [ "Inco", "mpre", "hens", "ible" ]
splitNCases("Evaluation", 10) //  [ "E", "v", "a", "l", "u", "a", "t", "i", "o", "n" ]
splitNCases("Strengthened", 6) //  [ "St", "re", "ng", "th", "en", "ed" ]
splitNCases("Fool's Errand", 20) //  [ "Error" ]
splitNCases("Flavorless", 1) //  [ "Flavorless" ]
splitNCases("Evolutionary Biology", 8) //  [ "Error" ]
splitNCases("Indefatigable Defender", 2) //  [ "Indefatigab", "le Defender" ]
splitNCases("Unimaginatively", 3) //  [ "Unima", "ginat", "ively" ]
splitNCases("Peppered Moth", 6) //  [ "Error" ]
splitNCases("Peppered Moth", 6013) //  [ "Error" ]