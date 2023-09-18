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
let result = isEven(number: 100)
isEven(number:37)
isEven(number:193)


//Classes And Structs
//Class is a reference type
class Car{
    let color: String
    let make: String
    //init is a constructor of the class.
    init(color: String, make: String){
        self.color = color
        self.make = make
    }
    
}

var bmw:Car = Car(color: "Black", make: "BMW")
var Honda = Car(color: "White", make: "Honda")
var Subaru = Honda

//Struct
//Struct is a value type.
struct Car1{
    let color: String
    let make: String
    //init is a constructor of the class.
    init(color: String, make: String){
        self.color = color
        self.make = make
    }
    
}

var bmw2:Car1 = Car1(color: "Black", make: "BMW")
var Honda2 = Car1(color: "White", make: "Honda")
var Subaru2 = Honda2 //Subaru2 | Honda2 , is not dependent on.

//Loops










