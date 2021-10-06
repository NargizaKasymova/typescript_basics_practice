// // const str: string ="hello"
// // console.log(str)

// const isFetching: boolean = true
// const isLoading: boolean = false
// const int: number = 42
// // int = "lkfd"
// const float: number = 4.2

// const num: number = 3e1
// console.log(num)
// const message: string = 'hello'

// const array: number[] = [1, 1, 2, 3, 5, 8, 13]
// const array2: Array<number> = [1, 2, 3, 4, 5]

// const words: string[] = ["fd0", "fd"]

// //Tuple
// const contact: [string, number] = ['vlad', 2929]

// //Any
// let variable: any = 42
// variable = []

// //Function
// function sayMyName(name: string): void {
//     console.log(name)
// }
// sayMyName('Nargizx')

const name1 : string = 'Nargo'
const num1: number = 42
const array0: number[] = [1, 3, 4]
const array3: string[] = ['1', '2']

//tuple
const contact1: [string, number] = ['ivan', 2372]
//any
let mone3: any = 1
mone3 = 'jfd'

//function
function sayMyName2(name: string): void {
    console.log(name)
}
// sayMyName2('Nargoo')

//never

function throwError (message: string): never {
    throw new Error(message)
}

function infininte(): never {
    while(true) {

    }
}

//type
type Login = string

const login: Login = "admin"

type ID = string | number
const login2: ID = 123
const login3: ID = '123'

