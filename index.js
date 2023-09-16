// Follow along with the examples here
/* function doNothing() {}

function sayHello() {
    console.log("Hello!");
  }
sayHello(); */

function sayHelloToIsabel() {
  console.log("Hello, Isabel!");
}

sayHelloToIsabel();

function sayHelloToSofia() {
  console.log("Hello, Sofia!");
}

sayHelloToSofia();

function sayHelloToBrendan() {
  console.log("Hello, Brendan!");
}

sayHelloToBrendan();


function doSth(thing){
  let sth = thing.toUpperCase()
  console.log(sth)
}

doSth('now in uppercase!');

function doSomething(thing) {
  console.log(thing);
}

doSomething("anything");

function sayHelloTo(firstName){
  console.log(`Hello, ${firstName}!`)
}

sayHelloTo("Isabel");
sayHelloTo("Jane");
sayHelloTo("R2D2");
sayHelloTo(1);

/* function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}
//say("Goodbye", "Julio");
say("Julio", "hello"); */

function say(greeting, firstName) {
  console.log("firstName: ", firstName);
  console.log("greeting: ", greeting);
  console.log(`${greeting}, ${firstName}!`);
}
say("Julio", "hello");

function add(x, y) {
  return x + y;
}
console.log(add(1, 2))