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

let numbers = [1,2,3,4,5,6,7]
//for loop
for thing in numbers{
    let result = thing * 2
//    print(thing)
    print(result)
}

//while loop
var valuex = 0
while valuex < 3{
    valuex += 1
    print(valuex)
}


//Optionals and UnWrapping

//Optionals

var optionx:Int? = 3 // optionx might be nill, its optional
var optionz:Int? = 9
//var resultoption = optionx+ optionz -- won't work, so we have to Unwrapp the values to be usable

//UnWrapping to ensure none of the Values is Null.
if let valueXoption = optionx{
    if let valueZoption = optionz{
        var resultoption = valueXoption + valueZoption
        print(resultoption)
    }
}


var price: Double? = nil
print(price)//nil
price = 1.34
print(price) //nil Optional(1.34)

type(of: price) //Optional<Double>

//Conditional Operators

var condx = 12

if condx > 10{
    
}else if condx > 20{
    
}else{
    
}

//Guard Statements
//guard ensures that a statement is true
func numberLargerThanFive(guardnumber: Int) -> Bool {
    guard guardnumber > 5 else{
        return false
    }
    return true
}
numberLargerThanFive(guardnumber: 2)

var StringGuard: String?
//StringGuard = "hello people"

if let StringGuardCheck = StringGuard{
    
}

func printValues(){
    guard let guardNumber = StringGuard else {return}
    print(guardNumber)
}
printValues()

//Enums and Switch Statements
//Enums is a way to represent multiple states
enum States{
    case onprogress
    case onstart
    case onclosed
}
//to access the values
let current = States.onstart

//Switches
func checkStates(){
    switch current{
    case .onprogress:
        break
    case .onstart:
        print("onStart Here")
        break
    case .onclosed:
        break
    }
}

checkStates()

//Protocols
//a protocol is a blueprint or a set of rules that define a set of methods and properties. It provides a way to define a contract or an interface that classes, structures, or enumerations can adopt and conform to.

protocol CarProto{
    var color: String {get set}
    func Drive()
    func isAllWheelDriver() -> Bool
    
}

class CarNew{
    
}

class BMWcar:CarNew , CarProto{
    var color: String
    init(color:String) {
        self.color = color
    }
    
    func Drive() {
        
    }
    
    func isAllWheelDriver() -> Bool {
        return true
    }
    
    
}
















