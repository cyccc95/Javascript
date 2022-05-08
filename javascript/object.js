'use strict';
// Objects
// one of the JavaScript's data types
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object consturctor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const hansu = { name: 'hansu', age: 4};
print(hansu);
// with JavaScript magic (dynamically typed language)
// can add properties later
hansu.hasJob = true;
console.log(hansu.hasJob);
// can delete properties later
delete hansu.hasJob;
console.log(hansu.hasJob);

// 2. Computed properties
// key should be always string
console.log(hansu.name);
console.log(hansu['name']);
hansu['hasJob'] = true;
console.log(hansu.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(hansu, 'name');
printValue(hansu, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = new Person('hansu', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in hansu);
console.log('age' in hansu);
console.log('random' in hansu);
console.log(hansu.random);

// 6. for..in vs for..of
// for (key in obj)
// console.clear();
// for (key in hansu) {
//   console.log(key);
// }

// for (value of iterable)
const array = [1, 2, 4, 5];
for(let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// for (value of array) {
//   console.log(value);
// }

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'hansu', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
// const user3 = {};
// for (key in user) {
//   user3[key] = user[key];
// }
// console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);