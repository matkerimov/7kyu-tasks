// task1 | Testing 1-2-3
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
// -------------------------------------------------------
// var number=function(array){
//     return array.map((item, idx) => `${idx + 1}:${item} `)
// }
// console.log(number(["a", "b", "c"]))
// -------------------------------------------------------

// task2 | Find the capitals
// Write a function that takes a single string (word) as argument.
// The function must return an ordered list containing the indexes of all capital letters in the string.
// -------------------------------------------------------
// let capitals = function (word) {
//     return word.split('').reduce((acc, item, idx) => {
//         if (item.toUpperCase() === item) {
//             return [...acc, idx]
//         }
//         return acc
//     }, [])
// }
// let capitals = function (word) {
//     let acc = []
//     for(let i = 0; i < word.length; i++){
//         if(word[i] === word[i].toUpperCase()){
//             // return acc.push(i)
//             acc = [...acc, i]
//         }
//     }
//     return acc
// }
// console.log(capitals('CodEWaRs'))

 // task3 | 5 without numbers !!
// Write a function that always returns 5
// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
// -------------------------------------------------------
// function unusualFive() {
//     return "qqqqq".length
// }
// console.log(unusualFive('0123456789'))

// task4 | Sort array by string length
// Write a function that takes an array of strings as an argument and returns a sorted
// array containing the same strings, ordered from shortest to longest.
//     For example, if this array were passed as an argument:
//     ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:
//     ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths,
//     so you will not have to decide how to order multiple strings of the same length.
// -------------------------------------------------------
// function sortByLength (array) {
//     return array.sort((a, b) => a.length > b.length ? 1 : -1 )
// }
// console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))
// -------------------------------------------------------

// task5 | Stop gninnipS My sdroW!
// Write a function that takes in a string of one or more words,
// and returns the same string, but with all five or more letter words reversed (like the name of this kata).
// Strings passed in will consist of only letters and spaces.
//     Spaces will be included only when more than one word is present.
//     Examples:
// spinWords("Hey fellow warriors") => "Hey wollef sroirraw"
// spinWords("This is a test") => "This is a test"
// spinWords("This is another test") => "This is rehtona test"
// ----------------------------------------------------
function spinWords(string){
    return string.split(" ").map(item => {
        if (item.length > 5){
            return item.split("").reverse().join("")
        }
        return item
    }).join(" ")
}
console.log(spinWords("Hey fellow warriors"))
// ----------------------------------------------------



