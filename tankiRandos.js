const qs = `What does a DOCTYPE do?
How do you serve a page with content in multiple languages?
What kind of things must you be wary of when designing or developing for multilingual sites?
What are data- attributes good for?
Consider HTML5 as an open web platform. What are the building blocks of HTML5?
Describe the difference between a cookie, sessionStorage and localStorage.
Describe the difference between <script>, <script async> and <script defer>.
Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? Do you know any exceptions?
What is progressive rendering?
Why you would use a srcset attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.
Have you used different HTML templating languages before?
What is CSS selector specificity and how does it work?
What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
Describe floats and how they work.
Describe z-index and how stacking context is formed.
Describe Block Formatting Context (BFC) and how it works.
What are the various clearing techniques and which is appropriate for what context?
Explain CSS sprites, and how you would implement them on a page or site.
How would you approach fixing browser-specific styling issues?
How do you serve your pages for feature-constrained browsers? What techniques/processes do you use?
What are the different ways to visually hide content (and make it available only for screen readers)?
Have you ever used a grid system, and if so, what do you prefer?
Have you used or implemented media queries or mobile-specific layouts/CSS?
Are you familiar with styling SVG?
Can you give an example of an @media property other than screen?
What are some of the "gotchas" for writing efficient CSS?
What are the advantages/disadvantages of using CSS preprocessors?
Describe what you like and dislike about the CSS preprocessors you have used.
How would you implement a web design comp that uses non-standard fonts?
Explain how a browser determines what elements match a CSS selector.
Describe pseudo-elements and discuss what they are used for.
Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.
What does * { box-sizing: border-box; } do? What are its advantages?
What is the CSS display property and can you give a few examples of its use?
What's the difference between inline and inline-block?
What's the difference between a relative, fixed, absolute and statically positioned element?
What existing CSS frameworks have you used locally, or in production? How would you change/improve them?
Have you played around with the new CSS Flexbox or Grid specs?
Can you explain the difference between coding a website to be responsive versus using a mobile-first strategy?
How is responsive design different from adaptive design?
Have you ever worked with retina graphics? If so, when and what techniques did you use?
Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?
Explain event delegation
Explain how this works in JavaScript
Explain how prototypal inheritance works
What do you think of AMD vs CommonJS?
Explain why the following doesn't work as an IIFE: function foo(){ }();. What needs to be changed to properly make it an IIFE?
What's the difference between a variable that is: null, undefined or undeclared? How would you go about checking for any of these states?
What is a closure, and how/why would you use one?
Can you describe the main difference between a .forEach loop and a .map() loop and why you would pick one versus the other?
What's a typical use case for anonymous functions?
How do you organize your code? (module pattern, classical inheritance?)
What's the difference between host objects and native objects?
Difference between: function Person(){}, var person = Person(), and var person = new Person()?
What's the difference between .call and .apply?
Explain Function.prototype.bind.
When would you use document.write()?
What's the difference between feature detection, feature inference, and using the UA string?
Explain Ajax in as much detail as possible.
What are the advantages and disadvantages of using Ajax?
Explain how JSONP works (and how it's not really Ajax).
Have you ever used JavaScript templating? If so, what libraries have you used?
Explain "hoisting".
Describe event bubbling.
What's the difference between an "attribute" and a "property"?
Why is extending built-in JavaScript objects not a good idea?
Difference between document load event and document DOMContentLoaded event?
What is the difference between == and ===?
Explain the same-origin policy with regards to JavaScript.
Make this work: duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]
Why is it called a Ternary expression, what does the word "Ternary" indicate?
What is "use strict";? What are the advantages and disadvantages to using it?
Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
Why would you use something like the load event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?
Explain what a single page app is and how to make one SEO-friendly.
What is the extent of your experience with Promises and/or their polyfills?
What are the pros and cons of using Promises instead of callbacks?
What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
What tools and techniques do you use for debugging JavaScript code?
What language constructions do you use for iterating over object properties and array items?
Explain the difference between mutable and immutable objects.
Explain the difference between synchronous and asynchronous functions.
What is event loop? What is the difference between call stack and task queue?
Explain the differences on the usage of foo between function foo() {} and var foo = function() {}
What are the differences between variables created using let, var or const?
What are the differences between ES6 class and ES5 function constructors?
Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?
What advantage is there for using the arrow syntax for a method in a constructor?
What is the definition of a higher-order function?
Can you give an example for destructuring an object or an array?
ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?
Can you give an example of a curry function and why this syntax offers an advantage?
What are the benefits of using spread syntax and how is it different from rest syntax?
How can you share code between files?
Why you might want to create static class members?
Can you name two programming paradigms important for JavaScript app developers?
What is functional programming?
What is the difference between classical inheritance and prototypal inheritance?
What are the pros and cons of functional programming vs object-oriented programming?
What are two-way data binding and one-way data flow, and how are they different?
When is classical inheritance an appropriate choice?
When is prototypal inheritance an appropriate choice?
What does “favor object composition over class inheritance” mean?
What are two-way data binding and one-way data flow, and how are they different?
What are the pros and cons of monolithic vs microservice architectures? 
What is asynchronous programming, and why is it important in JavaScript?`
  .split(`
`);

document.querySelector("#stack").addEventListener("click", stacker);

arr = [];
gusd = [];
let randomNum = null;
function stacker() {
  for (
    let i = 1;
    i <= Math.min(Number(document.querySelector("#html").value), 11);
    i++
  ) {
    arr.push(i);
  }
  for (
    let i = 12;
    i <= Math.min(Number(document.querySelector("#css").value), 42);
    i++
  ) {
    arr.push(i);
  }
  for (
    let i = 43;
    i <= Math.min(Number(document.querySelector("#js").value), 108);
    i++
  ) {
    arr.push(i);
  }
  if (arr.length) {
    const yes = document.createElement("button");
    yes.id = "yes";
    document.body.appendChild(yes);
    document.querySelector("#yes").innerHTML = "Guessed Right";
    document.querySelector("#yes").style.color = "green";
    document.querySelector("#stack").innerHTML = "Wrong";
    document.querySelector("#stack").removeEventListener("click", stacker);
    document.querySelector("#stack").id = "wrong";
    document.querySelector("#wrong").style.color = "red";
    document.querySelector("h1").innerHTML = arr;

    const guessing = document.querySelectorAll("button");

    Array.from(guessing).forEach((b) => b.addEventListener("click", rando));
    randomNum = Math.floor(Math.random() * arr.length);
    document.querySelector("h2").innerHTML = `${arr[randomNum]}.${
      qs[arr[randomNum] - 1]
    }`;
    document.querySelector("#html").value = "";
    document.querySelector("#css").value = "";
    document.querySelector("#js").value = "";
    document.querySelector("#html").style.display = "none";
    document.querySelector("#css").style.display = "none";
    document.querySelector("#js").style.display = "none";
    document.querySelector("h1").style.fontSize = "22px";
    document.querySelector("h1").style.color = "darkgrey";
  } else {
    document.querySelector("h1").innerHTML =
      "read the instructions carefully then try again";
  }
}

let totalGuesses = 0;

function rando(click) {
  if (click.target.innerHTML[0] === "G") {
    gusd.push(arr[randomNum]);
    arr.splice(arr.indexOf(arr[randomNum]), 1);
    totalGuesses++;
    click.target.innerHTML = "Guessed Right " + totalGuesses;
    document.querySelector("h3").innerHTML = gusd;
  }
  randomNum = Math.floor(Math.random() * arr.length);
  document.querySelector("h2").innerHTML = `${arr[randomNum]}.${
    qs[arr[randomNum] - 1]
  }`;
  document.querySelector("h1").innerHTML = arr;
  if (!arr.length) {
    document.querySelector("h1").innerHTML = "Nice One";
    document.querySelector("h2").style.visibility = "hidden";
    document.querySelector("#wrong").style.visibility = "hidden";
    document.querySelector("#yes").style.visibility = "hidden";
  }
}
