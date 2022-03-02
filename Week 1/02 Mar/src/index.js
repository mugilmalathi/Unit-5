import "../src/index.css";

import img from "../src/masai_logo.png"

function fact(n){
    if(n==1 || n==0){
        return 1;
    }
    return n * fact(n-1);
}

function fib(n){
    if(n==1 || n==0){
        return 1;
    }
    return fib(n-1)+fib(n-2);
}

console.log(fact(5));
console.log(fact(10));
console.log(fact(3));

console.log(fib(10));
console.log(fib(5));
console.log(fib(25));

const h1 = document.createElement('h1');
h1.textContent = "ToDo List";
h1.setAttribute('class', 'head');
const image = document.createElement('img');
image.setAttribute('class', 'img');
image.src = img;

document.getElementById('header').append(image, h1)