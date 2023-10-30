1. Link element established relationship between current document and external resources like a style sheet. <link rel="stylesheet" href="main.css" />. Relationship and URL

2. <div></div>. A block division of content
3. In CSS, #title is for a unique ID id = “test” while .grid is a class selector. Classes can be applied to multiple elements. Ex: <div class="grid">This is a grid item</div>
.grid { display: grid; //this displays element's children in a grid orientation.
}
4. Padding is the space between the content of an element. Margin is the space outside an element, between the elements border and adjacent elements. 
5. Flex: "display" - all childrent of element will be in flex flow. "flex-direction" - used to arrange elements column or row. equal distribution. uses a flexible orientation. 
    '.flex-container {
        display: flex;
        flex-direction: row;
    }
    <div class="flex-container">
        <img src="image1.jpg" alt="Image 1">
        <img src="image2.jpg" alt="Image 2">
        <img src="image3.jpg" alt="Image 3">
    </div>' in this example, images will appear next to each other side by side. you can also use things like justifiy-content: center, or justify-content: space-between. to control the spacing between things.
header {
  flex: 0 80px;
  background: hsl(223, 57%, 38%);
} - the 0 means that it will not grow, and 80px means it has a starting base of 80 pixels.
flex 1 would mean it would get one fractional unit of growth or one unit of space. if there is only one child with a non zero, it's going to take up the rest of the space. If one child had 1 and another had 3, the one with 3 would take up 75%. 

6. (px = number of pixels) (em = based on the font size of root element) (percentage % = percentage of width or heigh of parent element) ex: padding: 10%. 
header {
  background-color: #444;
  padding: 1em;
  margin: 1em 0;
  border-radius: 5px;
}
padding: 1em; sets the padding for the header element. em = a multiplier of the width of the letter m in the parent's font. It provides spacing inside the header element, pushing the content away from the edges of the element. In this case, the padding creates space around the content inside the header. The padding is uniform on all four sides of the header. padding: 1em 2em; first would correspond with top and bottom. second would correspond with left and right.

you can do madding for top, right , bottom, left.
7. Arrow Functions!
    'const a = [1, 2, 3, 4];

    // standard function syntax
    a.sort(function (v1, v2) {
    return v1 - v2;
    });

    // arrow function syntax
    a.sort((v1, v2) => v1 - v2);

- these are the same. the arrow replaces the function key word after parameter delcaration.
arrow returns: 
    () => 3;
    // RETURNS: 3

    () => {
    3;
    };
    // RETURNS: undefined

    () => {
    return 3;
    };
  // RETURNS: 3
  next, arrow functions inherit the this pointer from the scope of where it is created. This makes what is know as a closures. A closures allows a function to confinue referencing its creating scope, even after it has passed out of that scope. (a,b) => a-b
8. arrays and maps
   ![image](https://github.com/mcshayla/startup/assets/137968448/25463760-f7dd-4203-bb69-c2eef2ffcd2c)

const result = testAll(["abc4", "bbbbb5", "5555"], (i) => i.length > 3);

9.  ' const progressBarsContainer = document.getElementById('progressContainer');
    progressBarsContainer.appendChild(progressBarLabel);
    progressBarsContainer.appendChild(progressBar);

    const streak = document.createElement('p');
    streak.textContent = 0;
    progressBarsContainer.appendChild(streak);
    
"returns an element with a specified value. returns null if the element does not exist."
    const increaseButton = document.createElement('button');
    increaseButton.textContent = 'Increase Progress';
    progressBarsContainer.appendChild(increaseButton);
    increaseButton.addEventListener('click', function () {updateProgressBar(inputName, progressBar, streak)});'
    'var button = document.getElementById("myButton");
    var output = document.getElementById("output");


    button.addEventListener("click", function() {
        output.innerHTML = "Button clicked!";
    });' example, "Button clicked" will be output when the button is pressed.

10.  
html: '<label for="text">New Habit: </label>
                <input type="text" id="newHabit" name="varText" placeholder="type your habit" required pattern="[A-Za-z\s]*" />'
     ex: function habitInput() {
  const newHabitEl = document.querySelector("#newHabit");
  const timesTrackEl = document.querySelector("#timesTrack");. The #selector in javascript selects an selement with specific ID of the HTML.

11. DOM
     [MDN Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [W3C DOM specification](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html) - This official specification is only for reference

The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.

The browser provides access to the DOM through a global variable name `document` that points to the root element of the DOM. If you open the browser's debugger console window and type the variable name `document` you will see the DOM for the document the browser is currently rendering.

```html
> document

<html lang="en">
  <body>
    <p>text1 <span>text2</span></p>
    <p>text3</p>
  </body>
</html>
```

```css
p {
  color: red;
}
```

For everything in an HTML document there is a node in the DOM. This includes elements, attributes, text, comments, and whitespace. All of these nodes form a big tree, with the document node at the top.

![image](https://github.com/mcshayla/startup/assets/137968448/524a11e6-3113-49d6-ab66-acedf3258959)


## Accessing the DOM

Every element in an HTML document implements the DOM Element interface, which is derived from the DOM Node interface. The [DOM Element Interface](https://developer.mozilla.org/en-US/docs/Web/API/Element) provides the means for iterating child elements, accessing the parent element, and manipulating the element's attributes. From your JavaScript code, you can start with the `document` variable and walk through the every element in the tree.

```js
function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
```

You can provide a CSS selector to the `querySelectorAll` function in order to select elements from the document. The `textContent` property contains all of the element's text. You can even access a textual representation of an element's HTML content with the `innerHTML` property.

```js
const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}
```

## Modifying the DOM

The DOM supports the ability to insert, modify, or delete the elements in the DOM. To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.

```js
function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
```

To delete elements call the `removeChild` function on the parent element.

```js
function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');
```

## Injecting HTML

The DOM also allows you to inject entire blocks of HTML into an element. The following code finds the first `div` element in the DOM and replaces all the HTML it contains.

```js
const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
```

However, directly injecting HTML as a block of text is a common attack vector for hackers. If an untrusted party can inject JavaScript anywhere in your application then that JavaScript can represent itself as the current user of the application. The attacker can then make requests for sensitive data, monitor activity, and steal credentials. The example below shows how the img element can be used to launch an attack as soon as the page is loaded.

```html
<img src="bogus.png" onerror="console.log('All your base are belong to us')" />
```

If you are injecting HTML, make sure that it cannot be manipulated by a user. Common injection paths include HTML input controls, URL parameters, and HTTP headers. Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using `innerHTML`.

## Event Listeners

All DOM elements support the ability to attach a function that gets called when an event occurs on the element. These functions are called [event listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener). Here is an example of an event listener that gets called when an element gets clicked.

```js
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
```

There are lots of possible events that you can add a listener to. This includes things like mouse, keyboard, scrolling, animation, video, audio, WebSocket, and clipboard events. You can see the full list on [MDN](https://developer.mozilla.org/en-US/docs/Web/Events). Here are a few of the more commonly used events.

| Event Category | Description           |
| -------------- | --------------------- |
| Clipboard      | Cut, copied, pasted   |
| Focus          | An element gets focus |
| Keyboard       | Keys are pressed      |
| Mouse          | Click events          |
| Text selection | When text is selected |

You can also add event listeners directly in the HTML. For example, here is a `onclick` handler that is attached to a button.

```html
<button onclick='alert("clicked")'>click me</button>
```
12. HTML span element has a default CSS display property value of: NONE. It's an inline container. unlike div which is a block-level element.
13. div { background-color: red;}
14. <a href="https://example.com">
  <img alt="Description of the image" src="image.jpg" ></a>
15. ![image](https://github.com/mcshayla/startup/assets/137968448/a7b10a74-0932-4bdf-8c8b-ebfd18f50099)

16. example of css:
```body {
  font-family: sans-serif;
}

h1 {
  border-bottom: thin black solid;
}

section {
  background: #eeeeee;
  padding: 0.25em;
  margin-bottom: 0.5em;
  border-left: solid 1em #eeeeee;  
}

/* h2 descendent of section */
section h2 {
  color: #0044EE;
}

/* Sibling of h2 */
h2 ~ p {
  padding-left: 0.5em;
}


/* paragraph with summary class */
p.summary {
  font-weight: bold;
}

/** on section mouse hover */
section:hover {
  border-left: solid 1em purple;
}```
**Class Selectors**
The first step in understanding CSS is mastering how to select the elements that a CSS rule applies to. The CSS rule selector can take many forms. In order to explain the most common selectors we need some demonstration HTML. Let's image a simple document describing the departments in a university. In our case we have a physics and a chemistry department. The information provided is very sparse, but the structure provided by the HTML is enough to work with.

```html
<body>
  <h1>Departments</h1>
  <p>welcome message</p>
  <section id="physics">
    <h2>Physics</h2>
    <p class="introduction">Introduction</p>
    <p>Text</p>
    <p class="summary">Summary</p>
  </section>
  <section id="chemistry">
    <h2>Chemistry</h2>
    <p class="introduction">Introduction</p>
    <p>Text</p>
    <p class="summary">Summary</p>
  </section>
</body>
```

By default every browser defines a base set of styles that it applies to all HTML. This varies slightly from browser to browser, but for the most part our document would render like this using the base browser styles.

![CSS selectors base](cssSelectorBase.jpg)

We would like to style our document so that it looks like this when we are done.

![CSS selectors final](cssSelectorFinal.jpg)

## Element type selector

To start things off, we want to make all elements in the document use a sans-serif font. We can do this by using an element name selector. By selecting the `body` element we will cascade our declaration down to all the children of the body, which is the whole document.

```css
body {
  font-family: sans-serif;
}
```

Note that we could also use the wildcard element name selector (`*`) to select all elements, but for our needs the `body` element will work just fine.

We can also use element name selectors to give a bottom border to the top level heading (`h1`), as well as modify the section elements to pop out with a gray background and some white space in the padding and margins.

```css
h1 {
  border-bottom: thin black solid;
}

section {
  background: #eeeeee;
  padding: 0.25em;
  margin-bottom: 0.5em;
}
```

## Combinators

Next we want to change the color of the second level headings (`h2`), but we only want to do that within the sections for each department. To make that happen we can provide a `descendant combinator` that is defined with a space delimited list of values where each item in the list is a descendant of the previous item. So our selector would be all `h2` elements that are descendants of `section` elements.

```css
section h2 {
  color: #004400;
}
```

There are other types of combinators that you can use. These include the following.

| Combinator       | Meaning                    | Example        | Description                                |
| ---------------- | -------------------------- | -------------- | ------------------------------------------ |
| Descendant       | A list of descendants      | `body section` | Any section that is a descendant of a body |
| Child            | A list of direct children  | `section > p`  | Any p that is a direct child of a section  |
| General sibling  | A list of siblings         | `p ~ div`      | Any p that has a div sibling               |
| Adjacent sibling | A list of adjacent sibling | `p + div`      | Any p that has an adjacent div sibling     |

We can use the general sibling combinator to increase the whitespace padding on the left of paragraphs that are siblings of a level two heading.

```css
h2 ~ p {
  padding-left: 0.5em;
}
```

## Class selector

The next selector we will use is the class selector. Remember that any element can have zero or more classifications applied to it. For example, our document has a class of `introduction` applied to the first paragraph, and a class of `summary` applied to the final paragraph of each section. If we want to bold the summary paragraphs we would supply the class name summary prefixed with a period (`.summary`).

```css
.summary {
  font-weight: bold;
}
```

You can also combine the element name and class selectors to select all paragraphs with a class of summary.

```css
p.summary {
  font-weight: bold;
}
```

## ID selector

ID selectors reference the ID of an element. All IDs should be unique within an HTML document and so this select targets a specific element. To use the ID selector you prefix the ID with the hash symbol (`#`). We would like to showcase our physics department by putting a thin purple border along the left side of the physics section.

```css
#physics {
  border-left: solid 1em purple;
}
```

## Attribute selector

Attribute selectors allow you to select elements based upon their attributes. You use an attribute selector to select any element with a given attribute (`a[href]`). You can also specify a required value for an attribute (`a[href="./fish.png"]`) in order for the selector to match. Attribute selectors also support wildcards such as the ability to select attribute values containing specific text (`p[href*="https://"]).

```css
p[class='summary'] {
  color: red;
}
```

For a full description of attribute selections refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors).

## Pseudo selector

CSS also defines a significant list of pseudo selectors which select based on positional relationships, mouse interactions, hyperlink visitation states, and attributes. We will give just one example. Suppose we want our purple highlight bar to appear only when the mouse hovers over the text. To accomplish this we can change our ID selector to select whenever a section is hovered over.

```css
section:hover {
  border-left: solid 1em purple;
}
```
17. 
![image](https://github.com/mcshayla/startup/assets/137968448/7eb8055a-3b58-41ba-afa7-c4ee7ce29c31)
![image](https://github.com/mcshayla/startup/assets/137968448/45a485d6-7f4c-441a-a1b8-e2edb2a31120)
![image](https://github.com/mcshayla/startup/assets/137968448/96885cd9-e57e-42fc-821e-d6d2515d0190)
18. // Select the element by its id
var element = document.getElementById("byu"); <-doesn't need #. ->does need #. or // Select the element by its ID using querySelector
const element = document.querySelector("#newHabit");

// Change the text color to green
element.style.color = "green";
19. 
Paragraph: <p>
Ordered List: <ol>
Unordered List: <ul>
Second Level Heading (H2): <h2>
First Level Heading (H1): <h1>
Third Level Heading (H3): <h3>

20. <!DOCTYPE html>

21. syntax:
        ## Conditionals

    JavaScript supports many common programming language conditional constructs. This includes `if`, `else`, and `if else`. Here are some examples.
    
    ```js
    if (a === 1) {
      //...
    } else if (b === 2) {
      //...
    } else {
      //...
    }
    ```
    
    You can also use the ternary operator. This provides a compact `if else` representation.
    
    ```js
    a === 1 ? console.log(1) : console.log('not 1');
    ```
    
    You can use boolean operations in the expression to create complex predicates. Common boolean operators include `&&` (and), `||` (or), and `!` (not).
    
    ```js
    if (true && (!false || true)) {
      //...
    }
    ```
    
    ### Loops
    
    JavaScript supports many common programming language looping constructs. This includes `for`, `for in`, `for of`, `while`, `do while`, and `switch`. Here are some examples.
    
    ### for
    
    Note the introduction of the common post increment operation (`i++`) for adding one to a number.
    
    ```js
    for (let i = 0; i < 2; i++) {
      console.log(i);
    }
    // OUTPUT: 0 1
    ```
    
    ### do while
    
    ```js
    let i = 0;
    do {
      console.log(i);
      i++;
    } while (i < 2);
    // OUTPUT: 0 1
    ```
    
    ### while
    
    ```js
    let i = 0;
    while (i < 2) {
      console.log(i);
      i++;
    }
    // OUTPUT: 0 1
    ```
    
    ### for in
    
    The `for in` statement iterates over an object's property names.
    
    ```js
    const obj = { a: 1, b: 'fish' };
    for (const name in obj) {
      console.log(name);
    }
    // OUTPUT: a
    // OUTPUT: b
    ```
    
    For arrays the object's name is the array index.
    
    ```js
    const arr = ['a', 'b'];
    for (const name in arr) {
      console.log(name);
    }
    // OUTPUT: 0
    // OUTPUT: 1
    ```
    
    ### for of
    
    The `for of` statement iterates over an iterable's (Array, Map, Set, ...) property values.
    
    ```js
    const arr = ['a', 'b'];
    for (const val of arr) {
      console.log(val);
    }
    // OUTPUT: 'a'
    // OUTPUT: 'b'
    ```
    
    ### Break and continue
    
    All of the looping constructs demonstrated above allow for either a `break` or `continue` statement to abort or advance the loop.
    
    ```js
    let i = 0;
    while (true) {
      console.log(i);
      if (i === 0) {
        i++;
        continue;
      } else {
        break;
      }
    }
    // OUTPUT: 0 1
    ```
    SWITCH STATEMENT:
    ![image](https://github.com/mcshayla/startup/assets/137968448/67850533-01c7-4199-8196-cc5e4c59790e)
    ![image](https://github.com/mcshayla/startup/assets/137968448/21e886c3-9428-44e1-a950-4fc1fda1641d)

22.  OBJECTS:
    A JavaScript object represents a collection of name value pairs referred to as properties. The property name must be of type String or Symbol, but the value can be of any type. Objects also have common object-oriented functionality such as constructors, a `this` pointer, static properties and functions, and inheritance.

Objects can be created with the new operator. This causes the object's constructor to be called. Once declared you can add properties to the object by simply referencing the property name in an assignment. Any type of variable can be assigned to a property. This includes a sub-object, array, or function. The properties of an object can be referenced either with dot (`obj.prop`) or bracket notation (`obj['prop']`).

```js
const obj = new Object({a:3});
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
```

The ability to dynamically modify an object is incredibly useful when manipulating data with an indeterminate structure.

⚠ Note the different uses of the term `object`. Object can refer to the standard JavaScript objects (e.g. `Promise, Map, Object, Function, Date, ...`), or it can refer specifically to the JavaScript Object object (i.e. `new Object()`), or it can refer to any JavaScript object you create (e.g. `{a:'a', b:2}` ). This overloaded usage can be a bit confusing.

## Object-literals

You can also declare a variable of object type with the `object-literal` syntax. This syntax allows you to provide the initial composition of the object.

```js
const obj = {
  a: 3,
  b: 'fish',
};
```

## Object functions

Object has several interesting static functions associated with it. Here are some of the commonly used ones.

| Function | Meaning                             |
| -------- | ----------------------------------- |
| entries  | Returns an array of key value pairs |
| keys     | Returns an array of keys            |
| values   | Returns an array of values          |

```js
const obj = {
  a: 3,
  b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']
```

## Constructor

Any function that returns an object is considered a `constructor` and can be invoked with the `new` operator.

```js
function Person(name) {
  return {
    name: name,
  };
}

const p = new Person('Eich');
console.log(p);
// OUTPUT: {name: 'Eich'}
```

Because objects can have any type of property value you can create methods on the object as part of its encapsulation.

```js
function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```

## This pointer

Notice in the last example the use of the keyword `this` when we referred to the name property (`this.name`). The meaning of `this` depends upon the scope of where it is used, but in the context of an object it refers to a pointer to the object. We will talk more about the `this` pointer in the instruction on scope.

    ## Classes

You can use classes to define objects. Using a class clarifies the intent to create a reusable component rather than a one-off object. Class declarations look similar to declaring an object, but classes have an explicit constructor and assumed function declarations. The person object from above would look like the following when converted to a class.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```

You can make properties and functions of classes private by prefixing them with a `#`.

```js
class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }
}

const p = new Person('Eich');
p.#name = 'Lie';
// OUTPUT: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class

23. YES! possilbe to add new properties to java script objects.
![image](https://github.com/mcshayla/startup/assets/137968448/c9c5ec3f-b071-442a-9894-34702b14cfb8)

24. <script src="login.js"></script> (typically at end so HTML can load first).
OR....
<script>
  // Your JavaScript code goes here
  alert("Hello, World!");
</script>

25.
example:
```<p> This is an <span id="animal">animal</span> and a fish. </p>```
```// Select the element with the ID "animal"
var animalElement = document.getElementById("animal");

// Check if the element exists before modifying its text
if (animalElement) {
  // Set the text of the element to "crow"
  animalElement.textContent = "crow";
}```

26.  JSON

JavaScript Object Notation (JSON) was conceived by Douglas Crockford in 2001 while working at Yahoo! JSON, pronounced like the name Jason, received official standardization in 2013 and 2017 (ECMA-404, [RFC 8259](https://datatracker.ietf.org/doc/html/rfc8259)).

JSON provides a simple, and yet effective way, to share and store data. By design JSON is easily convertible to, and from, JavaScript objects. This make it a very convenient data format when working with web technologies. Because of its simplicity, standardization, and compatibility with JavaScript, JSON has become one of the world's most popular data formats.

### Format

A JSON document contains one of the following data types:

| Type    | Example                 |
| ------- | ----------------------- |
| string  | "crockford"             |
| number  | 42                      |
| boolean | true                    |
| array   | [null,42,"crockford"]   |
| object  | {"a":1,"b":"crockford"} |
| null    | null                    |

Most commonly, a JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas. Curly braces delimit an object, square brackets and commas delimit arrays, and strings are always delimited with double quotes.

Here is an example of a JSON document.

```json
{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
```

JSON is always encoded with [UTF-8](https://en.wikipedia.org/wiki/UTF-8). This allows for the representation of global data.

### Converting to JavaScript

You can convert JSON to, and from, JavaScript using the `JSON.parse` and `JSON.stringify` functions.

```js
const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
```

Note that in this example, JSON cannot represent the JavaScript `undefined` object and so it gets dropped when converting from JavaScript to JSON.

27.
- chmod: Used to change file permissions on Unix-like systems. You can specify who can read, write, and execute a file.
- pwd: Stands for "Print Working Directory." It displays the current directory (folder) in the terminal.
- cd: Stands for "Change Directory." It is used to navigate between directories. For example, cd directory_name will move you to the specified directory.
- ls: Lists the files and directories in the current directory. It's used to view the contents of a directory.
- vim: A text editor often used in Unix-like systems. It's a command-line text editor for editing files. ex: to create or edit a file. vim example.txt
- nano: Another text editor for the command line, designed to be more user-friendly than vim.
- mkdir: Stands for "Make Directory." It is used to create a new directory (folder).
- mv: Stands for "Move." It is used to move or rename files and directories.
- rm: Stands for "Remove." It is used to delete files and directories.
- man: Stands for "manual." It's used to display the manual pages for a specific command, providing information and documentation.
- ssh: Stands for "Secure Shell." It is used to establish secure remote connections to other computers or servers.
- ps: Stands for "Process Status." It displays information about currently running processes, including their process IDs (PIDs).
- wget: Used to download files from the internet via the command line. You provide the URL of the file you want to download. ex: wget https://example.com/path/to/your/file.ext
- sudo: Stands for "Superuser Do." It is used to execute a command with superuser or root privileges, often used for administrative tasks. ex: sudo apt-get install package-name. getting a package that requires privillges.
- **echo** - Output the parameters of the command
- **cd** - Change directory
- **mkdir** - Make directory
- **rmdir** - Remove directory
- **rm** - Remove file(s)
- **mv** - Move file(s)
- **cp** - Copy files
- **ls** - List files
- **curl** - Command line client URL browser
- **grep** - Regular expression search
- **find** - Find files
- **top** - View running processes with CPU and memory usage
- **df** - View disk statistics
- **cat** - Output the contents of a file
- **less** - Interactively output the contents of a file
- **wc** - Count the words in a file
- **ps** - View the currently running processes
- **kill** - Kill a currently running process
- **sudo** - Execute a command as a super user (admin)
- **ssh** - Create a secure shell on a remote computer
- **scp** - Securely copy files to a remote computer
- **history** - Show the history of commands
- **ping** - Check if a website is up
- **tracert** - Trace the connections to a website
- **dig** - Show the DNS information for a domain
- **man** - Look up a command in the manual

  28. ssh creates a remote shell session (rsh)
 
  29.  For example, ls can list all files (even hidden ones) in a long format if you provide the parameter -la. ➜ ls -la

```total 16
-rw-r--r--  1 lee  staff   1.0K Nov 19 08:47 LICENSE
-rw-r--r--  1 lee  staff    82B Nov 19 08:47 README.md
drwxr-xr-x  4 lee  staff   128B Nov 19 08:48 profile
drwxr-xr-x  4 lee  staff   128B Nov 19 08:47 react```

30. subdomain.secondary.top = reatsimon.cs260.click          the root domain is secondary.top
ex: banana.fruit.bozo.click
top = click
subdomain = banana.fruit
root = bozo.click

31. Yes, a web certificate, specifically an SSL/TLS certificate, is necessary to use HTTPS (Hypertext Transfer Protocol Secure) on a website. HTTPS is the secure version of HTTP, and it provides encryption and data integrity to secure the communication between a web server and a user's web browser.

Web certificates are generated by a trusted 3rd party using public/private key encryption. The certificate issuer is responsible for verifying that the certificate owner actually owns the domain name represented by the certificate. Once you have a certificate for your domain name, you can serve the certificate from your web server and then the browser can validate the certificate by using the public keys of the certificate issuer.

Until about 2014 it would cost you hundreds of dollars a year to get a web certificate, and you needed a certificate for every domain and subdomain that you owned. That would cost, even a small company, thousands of dollars a year because the certificates needed to be renewed in order to ensure that it still represented the owner of the domain name and to limit the impact of a stolen certificate.

That all changed when two Mozilla employees created a non-profit called Let's Encrypt with the goal of creating trusted web certificates for free. This effectively broke the monopoly that the trusted web certificate issuers had on the industry.

Now using a service like Let's Encrypt, and the IETF standard ACME protocol that they pioneered, anyone who owns a domain name, can dynamically generate and renew a certificate for free. This incredible contribution of critical web technology has made the web safer, and more reliable, for everyone.

Caddy uses Let's Encrypt to generate a web certificate every time an HTTPS request is made for a domain name that Caddy doesn't have a web certificate for. When this happens Caddy asks Let's Encrypt to verify that the domain for the requested certificate is actually owned by the requester. Let's Encrypt does that by telling the requester to return a specific digitally signed response for a temporary URL when an HTTP request to the domain is made. Let's Encrypt then makes the HTTP request, and if successful, issues the certificate to the requester.

Modern browsers now expect web servers to exclusively use HTTPS for all communication. In fact, the next version of HTTP (v3) only supports secure connections. For this reason, you should always support HTTPS for any web application that you build.

You can obtain, and renew, a web certificate by enabling the ACME protocol for your web server and communicating with Let's Encrypt to generate the needed certificates. This is not difficult to do, and many languages such as Rust, Node.js, or Go support this functionality by simply including an additional library.

32. a DNS A (Address) record is specifically used to map a domain name to an IPv4 address. In other words, it points the domain name to an IP address. This is one of the fundamental functions of DNS.
A DNS A (Address) record is designed to map a domain name to an IPv4 address and cannot directly point to another A record.

33. Port 443 - reserved for HTTPS. Port 80 = HTTP.  Port 22 = SSH

34. Promises.
JavaScript executes as a single threaded application. That means there is only ever one piece of code executing at the same time. However, the fact that it does not execute concurrently does not mean that it does not execute in parallel. You can asynchronously execute code with the use of a JavaScript `Promise`. Because the execution is asynchronous the promise object can be in one of three states at any given point in time.

1. **pending** - Currently running asynchronously
1. **fulfilled** - Completed successfully
1. **rejected** - Failed to complete

You create a promise by calling the Promise object constructor and passing it an executor function that runs the asynchronous operation. Executing asynchronously means that promise constructor may return before the promise executor function runs.

We can demonstrate asynchronous execution by using the standard JavaScript `setTimeout` function to create a delay in the execution of the code. The setTimeout function takes the number of milliseconds to wait and a function to call after that amount of time has expired. We call the delay function in a for loop in the promise executor and also a for loop outside the promise so that both code blocks are running in parallel.

```js
const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2
```

## Resolving and rejecting

Now that we know how to use a promise to execute asynchronously, we need to be able to set the state to `fulfilled` when things complete correctly, or to `rejected` when an error happens. The promise executor function takes two functions as parameters, `resolve` and `reject`. Calling `resolve` sets the promise to the `fulfilled` state, and calling `reject` sets the promise to the `rejected` state.

Consider the following "coin toss" promise that waits ten seconds and then has a fifty percent chance of resolving or rejecting.

```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
```

If you log the coinToss promise object to the console immediately after calling the constructor, it will display that it is in the `pending` state.

```js
console.log(coinToss);
// OUTPUT: Promise {<pending>}
```

If you then wait ten seconds and the log the coinToss promise object again, the state will either show as `fulfilled` or `rejected` depending upon the way the coin landed.

```js
console.log(coinToss);
// OUTPUT: Promise {<fulfilled>}
```

## Then, catch, finally

With the ability to asynchronously execute and set the resulting state, we now need a way to generically do something with the result of a promise after it resolves. This is done with functionality similar to exception handling. The promise object has three functions: `then`, `catch`, and `finally`. The `then` function is called if the promise is fulfilled, `catch` is called if the promise is `rejected`, and `finally` is always called after all the processing is completed.

We can rework our coinToss example and make it so 10 percent of the time the coin falls off the table and resolves to the rejected state. Otherwise the promise resolves to fulfilled with a result of either `heads` or `tails`.

```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});
```

We then chain the `then`, `catch` and `finally` functions to the coinToss object in order to handle each of the possible results.

```js
coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
```

## The observer pattern

Promises are the standard way to do asynchronous processing in JavaScript, but they are not the only way. The `Observer` pattern, popularized by web programming frameworks such as `Angular`, use a model called `Observer`. The major difference between Observers and Promises is that Promises immediately begin to execute when the Promise is created, but Observers form a pipeline that you then pass an execution object into. This allows Observers to be reused, and the result of executing an Observable to be saved as a history of a particular execution.

