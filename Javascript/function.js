function add(a, b){
    return a + b;
}
console.log(add(10, 5));

const add1 = function(x, y){
    return x + y;
}
console.log(add1(5, 5));


let greeting = 'hello';

let greet = function(naam){

    return 'Hello ' + naam;
}

console.log(greet('Haris'));

const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  // This will return "John Doe":
  console.log(person.fullName());  