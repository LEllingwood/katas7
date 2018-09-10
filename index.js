// 1.  forEach() executes a provided function once for each array element
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

// 2. map() creates a new array with the results of calling a provided function on every element in the calling array. Returns a new array with each element
// this isn't putting the numbers in one array.  why?  

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

// 3. some() Tests whether at least one element in the array passes the test implemented by the function. Returns true or false.
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

// 4. find() Returns the value of the first element in the array that satisfies the provided testing function.  
// this isn't doing quite what i want it to.  It's pulling all examples that meet the conditions, not just the first.  I think i need to "break" or "return" after it finds the first one, but not sure how to make that work
{
    function find(array, callbackToRunFindOnEachItem) {
        for (let index = 0; index < array.length; index++) {
            const currentValue = array[index]
            callbackToRunFindOnEachItem(currentValue, index, array)
        }
    }
    const numbers = [3, 10, 766, 9, 8]
    find(numbers, function (number, index, array) {
        const firstNumberGreaterThanTen = []
        if (number >= 10) {
            firstNumberGreaterThanTen.push(numbers[index])
            console.log(firstNumberGreaterThanTen)
        }
    })
}

// 5. findIndex() returns the index of the first element in the array that satisfies the provided testing function.  Otherwise, -1 is returned.
{
    function findIndex(array, callbackToRunFindIndexOnEachItem) {
        for (let index = 0; index < array.length; index++) {
            const currentValue = array[index]
            callbackToRunFindIndexOnEachItem(currentValue, index, array)
        }
    }
    const numbers = [3, 4, 7, 95, 87]
    findIndex(numbers, function (number, index, array) {
        const firstNumberGreaterThanTen = []
        if (number > 10) {
            console.log(`The number ${number} is at position ${index}`)
        }
    })
}
// 6. every() The every method tests whether all elements in an array pass the test implemented by the function.  returns true/false
{
    function findEvery(array, callbackToRunFindEveryOnEachItem) {
        for (let index = 0; index < array.length; index++) {
            const currentValue = array[index]
            callbackToRunFindEveryOnEachItem(currentValue, index, array)
        }
    }
    const numbers = [99, 10, 766, 987, 8, 100]
    findEvery(numbers, function (number, index, array) {
        const doAllNumbersComply = (numbers < 100) ? true : false;
            console.log(doAllNumbersComply)

    })
}

// 7. filter() Creates a new array with all elements that pass the test implented by the function.  returns a new array.
// again, this doesn't seem to be in one array, although the function is working (it's identifying those ages in the array under 30. not sure why)
{
    function filter(array, callbackToRunFilterOnEachItem) {
        for (let index = 0; index < array.length; index++) {
            const currentValue = array[index]
            callbackToRunFilterOnEachItem(currentValue, index, array)
        }
    }
    const ages = [14, 56, 23, 78, 19, 6]
    filter(ages, function (number, index, array) {
        const agesThatMeetCriteria = []
        if ((ages[index]) < 30){
            agesThatMeetCriteria.push(ages[index])
        }
        console.log(agesThatMeetCriteria)
    })
    
}

