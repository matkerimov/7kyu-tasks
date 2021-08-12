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
// function spinWords(string){
//     return string.split(" ").map(item => {
//         if (item.length > 5){
//             return item.split("").reverse().join("")
//         }
//         return item
//     }).join(" ")
// }
// console.log(spinWords("Hey fellow warriors"))

// task6 | Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
// You will be given an array of objects (associative arrays in PHP) representing data about developers who
// have signed up to attend the next coding meetup that you are organising. The list is ordered according
// to who signed up first.
// Your task is to return one of the following strings:
//     < firstName here >, < country here > of the first Python developer who has signed up; or
//         There will be no Python developers if no Python developer has signed up.
// ----------------------------------------------------
// function getFirstPython(list) {
//     let result = list.find(item => {
//         return item.language === "Python"
//     })
//     return result ? `${result.firstName}, ${result.country} ` : "There will be no Python developers"
// }
// console.log(getFirstPython([
//     { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//     { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//     { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
// ]))
// console.log(getFirstPython([
//     { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
//     { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
// ]))

// task7 | Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
// You will be given a sequence of objects representing data about developers who have signed up to
// attend the next coding meetup that you are organising.
//     Your task is to return a sequence which includes the developer who is the oldest. In case of a tie,
//     include all same-age senior developers listed in the same order as they appeared in the original input array.
// ----------------------------------------------------
// function findSenior(list) {
//     let age = list.map((item ) => item.age)
//     let mathAge = Math.max(...age)
//     return list.filter(el => el.age === mathAge)
// }
// console.log(findSenior([
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//     { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]))

// task8 | Find the unique number
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
//
//     findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// ----------------------------------------------------
// function findUniq(arr) {
// return arr.find(item => {
//     return arr.indexOf(item) === arr.lastIndexOf(item)
// })
// }
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
// console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))
// ----------------------------------------------------

// task9 | Persistent Bugger.
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num until you reach a single digit.
//     For example:
//     persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                           // and 4 has only one digit
// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                        // 1*2*6 = 12, and finally 1*2 = 2
// persistence(4) === 0 // because 4 is already a one-digit number
// ----------------------------------------------------
// function persistence(num) {
//     let counter = 0
//     while (num >= 10){
//         num = num.toString().split('').reduce((acc, item) => {
//            return  item * acc
//         }, 1)
//          counter++
//     }
//     return counter
// }
// console.log(persistence(9))
// ----------------------------------------------------

// task10 | Coding Meetup #10 - Higher-Order Functions Series - Create usernames
// Given the following input array:
//     var list1 = [
//         { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//         { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
//     ];
// write a function that adds the username property to each object in the input array:
//     The value of the username property is composed by concatenating:
//
//     firstName in lower-case;
// first letter of the lastName in lower-case; and
// the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year.
//     Please make sure that your function delivers the correct birth year irrespective of when it will be executed,
// for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.
// Notes:
//     The input array will always be valid and formatted as in the example above.
//     Age is represented by a number which can be any positive integer.
//     Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
// Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.
// ----------------------------------------------------
function addUsername(list) {
    let year = new Date().getFullYear()
    // let year = now.getFullYear()
    return list.map(item => item.firstName.toLowerCase() + item.lastName[0].toLowerCase() + `${year - item.age}`  )
}
console.log(addUsername([
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' },
    // {"firstName":"Harry","lastName":"K.","country":"Brazil","continent":"Americas","age":19,"language":"Python"}
]))
// ----------------------------------------------------
// let now = new Date()
// let year = now.getFullYear()
// console.log( year -30)
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------



