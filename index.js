// 1.  forEach() 
function find(array, callbackToRunOnEachItem) {
    for (let index = 0; index < array.length; index++) {
        const currentValue = array[index]
        callbackToRunOnEachItem(currentValue, index, array)
    }
}
const letters = ['a', 'b', 'c', 'd', 'e']
find(letters, function (letter, index, array) {
    const letterIsVowel =
        letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'
    const letterType = letterIsVowel ? 'vowel' : 'consonant'
    console.log(`The letter '${letter}' at position ${index} of ${array} is a ${letterType}.`)
})

// 2. map() 
function map(array, callbackToMapEachItem) {
    for (let index = 0; index < array.length; index++) {
        const currentValue = array[index]
        callbackToMapEachItem(currentValue, index, array)
    }
}
const numbers = ['1', '2', '3', '5', '10']
map(numbers, function (number, index, array) {
    const newArray = []
    newArray.push(number * number)
    console.log(newArray)
})
// this isn't putting the numbers in one array.  why?  

// 3. some() 
function some(array, callbackToRunSome) {
    for (let index = 0; index < array.length; index++) {
        const currentValue = array[index]
        callbackToRunSome(currentValue, index, array)
    }
}
some(letters, function (letter, index, array) {
    const letters = ['a', 'b', 'c', 'd', 'e']
    const letterIsVowel =
        letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'
    const letterType = letterIsVowel ? true : false
    console.log(letterType)
})

// 4. find() 
{
function find(array, callbackToRunFindOnEachItem) {
    for (let index = 0; index < array.length; index++) {
        const currentValue = array[index]
        callbackToRunFindOnEachItem(currentValue, index, array)
    }
}
const numbers = [3, 10, 766, 9, 8]
find(numbers, function (number, index, array) {
    const letterIsVowel =
        number === 'a' || number === 'e' || number === 'i' || number === 'o' || number === 'u'
    const letterType = letterIsVowel ? 'vowel' : 'consonant'
    console.log(`The letter '${number}' at position ${index} of ${array} is a ${letterType}.`)
})
}
// 5. findIndex() 
// 6. every() 
// 7. filter()