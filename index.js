// Using Array.map
// map: from a collection to a new collection of the same size.

const testWord = "JavaScript"
const words = ["Bananas", "pencil", "variableName", "COFFEE"]

// We want to know the length of each word -> [6, 6, ]

const x =  words.map((w) => {
return w.length})

console.log(x)
// We want all words to be in ALLCAPS
const uppercase = words.map((w) =>{
    return w.toUpperCase()
})

console.log(uppercase)
// We want to all words to be completely lowercase

const toLowercase = words.map((x) =>{
    return x.toLowerCase()
})
console.log(toLowercase)

// We went to create string to learn the alphabet like:
// B for Banana, P for pencil

// const alphabetOrder = `${testWord[0]} it is for ${testWord}`
// console.log(alphabetOrder)

// const second  = words.map((x) => {
// console.log(`${words[0]} for ${ words}`)
// })

// console.log (second)
const alphabetLearningStrings = words.map((word) => {
    return console.log(`${word[0].toUpperCase()} is for ${word}`)
})

const alphabetLearningStrings = words.map((word) => {
    return console.log(`${word[0].toUpperCase()} is for ${word}`)
})

