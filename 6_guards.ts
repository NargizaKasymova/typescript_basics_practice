function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim()
}
console.log(strip(5))
console.log(strip('  too//'))


class MyResponse {
    header = 'response header'
    result = 'response result'
}
// const response = new MyResponse
// console.log(handle(response))

class MyError {
    header = 'error header'
    message = 'error result'
}
// const response = new MyError
// console.log(handle(response))

function handle(res: MyResponse | MyError) {
    if(res instanceof MyResponse) {
        return {
            info: res.header + " " + res.result
        }
    } else {
        return{
            info: res.header + " " + res.message
        }
    }
}


// 
type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
    console.log('Nargo')
}
setAlertType('success')
setAlertType('danger')
// setAlertType('default')
