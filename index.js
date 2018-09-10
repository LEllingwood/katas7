// 1.  forEach() 
function findEvery(array, callbackToRunOnEachItem) {
    for (let index = 0; index < array.length; index++) {
        const currentValue = array[index]
        callbackToRunOnEachItem(currentValue, index, array)
    }
}
const letters = ['a', 'b', 'c', 'd', 'e']
findEvery(letters, function (letter, index, array) {
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
    function findEvery(array, callbackToRunFindOnEachItem) {
        for (let index = 0; index < array.length; index++) {
            const currentValue = array[index]
            callbackToRunFindOnEachItem(currentValue, index, array)
        }
    }
    const numbers = [3, 10, 766, 9, 8]
    findEvery(numbers, function (number, index, array) {
        const firstNumberGreaterThanTen = []
        if (number >= 10) {
            firstNumberGreaterThanTen.push(numbers[index])
            console.log(firstNumberGreaterThanTen)
        }
    })
}
// this isn't doing quite what i want it to.  

// 5. findIndex() 
{
    function findEvery(array, callbackToRunFindIndexOnEachItem) {
        for (let index = 0; index < array.length; index++) {
            const currentValue = array[index]
            callbackToRunFindIndexOnEachItem(currentValue, index, array)
        }
    }
    const numbers = [3, 4, 7, 95, 87]
    findEvery(numbers, function (number, index, array) {
        const firstNumberGreaterThanTen = []
        if (number > 10) {
            console.log(`The number ${number} is at position ${index}`)
        }
    })
}
// 6. every() 
{
    function findEvery(array, callbackToRunFindEveryOnEachItem) {
        for (let index = 0; index < array.length; index++) {
            const currentValue = array[index]
            callbackToRunFindEveryOnEachItem(currentValue, index, array)
        }
    }
    const numbers = [99, 10, 766, 987, 8]
    findEvery(numbers, function (number, index, array) {
        const firstNumberGreaterThanTen = []
        if (number <= 100) {
            firstNumberGreaterThanTen.push(numbers[index])
            console.log(firstNumberGreaterThanTen)
        }
    })
}
// 7. filter()