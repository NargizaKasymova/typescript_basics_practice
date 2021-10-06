const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5, 8]
const arrayOfStrings: Array<string> = ["hello", "Nargo"]

// function reverse(array) {
//     return array.reverse()
// }

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

console.log(reverse(arrayOfNumbers))
console.log(reverse(arrayOfStrings))