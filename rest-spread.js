// Rest / Spread Operator Exercises

// refractored to ES2015
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0)

// findMin function
const findMin = (...nums) => nums.reduce((min, current) => current < min ? current : min)

// mergeObjects funtion
const mergeObjects = (ob1, ob2) => ({...ob1, ...ob2})

// doubleAndReturnArgs function
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(val => val * 2)]

// Slice and Dice!
/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    const index = Math.floor(Math.random()*items.length)
    return [...items.slice(0,index), ...items.slice(index+1)]
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2]

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({...obj, [key] : val})


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2})


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => ({...obj, [key] : val})