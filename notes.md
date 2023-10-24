# CS260 NOTES

Using GitHub


git add .

git commit -m "adding a file"

git push


This is the pattern that you want to make a reflexive part of your development process.

    1. Pull the repository's latest changes from GitHub (git pull)
    2. Make changes to the code
    3. Commit the changes (git commit)
    4. Push the changes to GitHub (git push)

git fetch - you can see what is on github without pulling it yet

git status - to show you if the branches ==

git pull


## JavaScript
<script src="javascript.js"></script>
*Rest*: allows you to have any number of parameters. only the last parameter can be a rest parameter with the ....   

function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);

*Spread*: is the opposite of rest. takes an object that is iterable like a list, and expands it into a function's parameters.

try {
  // normal execution code
  
} catch (err) {
  // exception handling code
  
} finally {
  // always called code
}

*destructuring*: declare what variables you want to destructure out of an array or something. 

const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a, c } = o;      - this would rename a and b -> const { a: count, b: type } = o;

console.log(a, c);
// OUTPUT 1, ['fish', 'cats']


*Classes*
class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }
}

const p = new Person('Eich');
p.#name = 'Lie';
// OUTPUT: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class

![javascript array functions](https://github.com/mcshayla/startup/assets/137968448/c02e024d-4176-40b2-9379-1537d2947d82)

![javascript strings](https://github.com/mcshayla/startup/assets/137968448/8013dc2a-5fa6-4858-bd27-c4917285c3d3)

![javascript classes and inheritance ](https://github.com/mcshayla/startup/assets/137968448/bd90d1e8-01c0-455b-813d-919dc118d8b2)

*scopes*
- var: ignores block scope.
- this: can be global, function (, or object.
- => arrow function, makes a pointer at the time of the creation. so even if this.x is called in a function, it could return what's .x outside of the function.

*modules* in javascript you can share code.
'export function alertDisplay(msg) {
  alert(msg);
}'
'
'import { alertDisplay } from './alert.js';

alertDisplay('called from main.js');'

*DocumentObjectModel Dom*

