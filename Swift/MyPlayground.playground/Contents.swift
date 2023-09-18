import Foundation

//function and Parameters
func addTwoNumbers(a:Int, b:Int) ->Int{
    return a+b
}

func isEven(number: Int) ->Bool{
    if number % 2 == 0{
        return true
    }
    return false
}

var x = 4
var y = 9
let sum = addTwoNumbers(a: x, b: y)
isEven(number: 100)
isEven(number:37)
isEven(number:193)
