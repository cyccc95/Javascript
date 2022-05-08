// Function
// - fundamental building block in the program
// subprogram can be used multiple times
// performs a task or calculats a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters:  passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const hansu = { name: 'hansu'};
console.log(hansu);
changeName(hansu);
console.log(hansu);

// 3. Default parameters (added in ES6)
function showMessage(message, from) {
  console.log(`${message} by ${from}`);
}
showMessage('hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'hansu');

// 5. Local scope , 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage); // error
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function() { //anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function exxpression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
};
// anonymous function
const printYes = function () {
  console.log('yes!');
};

// named function
// better debugging in debugger's stact traces
// recursions
const printNo = function print () {
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//   console.log('simplePrint!');
// };
const simplePrint = () => console.log('simplePrint!');
simplePrint();
const add = (a, b) => console.log(a + b);
add(1, 2);
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})();

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
  switch(command) {
    case 'add':
      return a + b
    case 'subtract':
      return a - b
    case 'divide':
      return a / b
    case 'multiply':
      return a * b
    case 'remainder':
      return a % b
    default:
      throw Error('unknown command');
  }
}
console.log(calculate('add', 5, 2));
console.log(calculate('subtract', 5, 2));
console.log(calculate('divide', 5, 2));
console.log(calculate('multiply', 5, 2));
console.log(calculate('remainder', 5, 2));