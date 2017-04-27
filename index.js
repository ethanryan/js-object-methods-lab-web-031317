// In index.js, build an ES6 President class with the following properties
// set by the constructor: name, politicalParty, yearsInOffice, and homeState.
// Add following methods to the class:
// veto — returns NO!
// passBill — returns You can do that!
// doCharity — returns I like to help people.
// conductPressInterview — returns I am proud to be an American.
// sayHi — returns Hi, my name is <name>. I am from <homestate>.
// I represent the <politcalParty>s, and was in office <yearsInOffice>.
// Then create the following presidents: George Washington, Abraham Lincoln,
// Richard Nixon, and Jimmy Carter.

class President {
  constructor(name, politicalParty, yearsInOffice, homeState) {
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState;
  }

   veto() {
    return "NO!";
  }

  passBill() {
   return "You can do that!";
 }

 doCharity() {
   return "I like to help people.";
  }

  conductPressInterview() {
    return "I am proud to be an American.";
  }

  sayHi() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}.`;
  }
}

//var d = new Dog('Mitzie');
var gw = new President('George Washington');
var honestAbe = new President('Abraham Lincoln');
var tickyDick = new President('Richard Nixon');
var peanutFarmer = new President('Jimmy Carter');


//example:

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//
//   get area() {
//     return this.calcArea();
//   }
//
//   calcArea() {
//     return this.height * this.width;
//   }
// }
//
// const square = new Rectangle(10, 10);
//
// console.log(square.area);
