// Maps and Sets Exercise

// Quick Question #1
// Returns: {1,2,3,4}

// Quick Question #2
// Returns: "ref"

// Quick Questions #3
// Map(2) {Array(3) => true, Array(3) => false}

// hasDuplicate function
const hasDuplicate = arr => arr.length !== [...new Set(arr)].length

// vowelCount function
const vowelCount = str => {
    const lowerStr = str.toLowerCase();
    const vowels = 'aeiou'; 
    let map = new Map();
    for (v of vowels) {
        let count = 0;
        for (char of lowerStr) {if (v === char) {count++;}}
        if (count !== 0) {map.set(v, count)}
    }
    return map
}



