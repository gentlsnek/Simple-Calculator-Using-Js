'use strict'

let disp = document.getElementById("disp");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const num0 = document.getElementById("num0");
const numd = document.getElementById("numd");
const numequals = document.getElementById("numequals");
const sum = document.getElementById("sum");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");
const clear = document.getElementById("clear");




function start() {

let inputQueue = [];
let numberQueue = [];
let processQueue = []

disp.textContent = "";


const addQueue = function() {
    let num = "";
    for(let i = 0; i < inputQueue.length; i++){
     num += inputQueue[i];
    }
    inputQueue.length = 0;
    numberQueue.push(num);
}

const compute = function(){
console.log("this runs");
    let answer = Number(numberQueue[0]);
    console.log(answer);
  for(let i = 1; i < numberQueue.length; i++){
    let j = i-1;
    console.log("loop 1 runs");
        console.log(processQueue[j]);
        switch(processQueue[j]){
            case "+": 
                answer = answer + Number(numberQueue[i]);
                break;

            case "-":
                answer = answer - Number(numberQueue[i]);
                break;

            case "x":
                answer = answer * Number(numberQueue[i]);
                break;

            case "/":
                if( answer == 0){
                    answer = "error";
                }
                else{
                answer = answer / Number(numberQueue[i]);
                }
                break;

                default:
                    console.log("idk what happened");
        }  
    }
    console.log(answer);
    disp.textContent = answer;
    inputQueue.length = 0;
    numberQueue.length = 0;
    processQueue.length = 0;
  }

function display (input){
    console.log(input);
    let original = disp.textContent;
    let newText = original + input;
    console.log(original);
  //  console.log(newText);
    disp.textContent = newText;
    newText = "";
    original = "";

}

num1.addEventListener('click', function(){
    inputQueue.push(num1.textContent);
    display(num1.textContent);
})


num2.addEventListener('click', function(){
    inputQueue.push(num2.textContent);
    display(num2.textContent);
})

num3.addEventListener('click', function(){
    inputQueue.push(num3.textContent);
    display(num3.textContent);
})

num4.addEventListener('click', function(){
    inputQueue.push(num4.textContent);
    display(num4.textContent);
})

num5.addEventListener('click', function(){
    inputQueue.push(num5.textContent);
    display(num5.textContent);
})

num6.addEventListener('click', function(){
    inputQueue.push(num6.textContent);
    display(num6.textContent);
})

num7.addEventListener('click', function(){
    inputQueue.push(num7.textContent);
    display(num7.textContent);
})

num8.addEventListener('click', function(){
    inputQueue.push(num8.textContent);
    display(num8.textContent);
})

num9.addEventListener('click', function(){
    inputQueue.push(num9.textContent);
    display(num9.textContent);
})

num0.addEventListener('click', function(){
    inputQueue.push(num0.textContent);
    display(num0.textContent);
})

numd.addEventListener('click', function(){
    inputQueue.push(numd.textContent);
    display(numd.textContent);
})

sum.addEventListener('click', function(){
   addQueue();
   processQueue.push(sum.textContent);
   display(sum.textContent);
})

sub.addEventListener('click', function(){
    addQueue();
    processQueue.push(sub.textContent);
    display(sub.textContent);
 })

mul.addEventListener('click', function(){
    addQueue();
    processQueue.push(mul.textContent);
    display(mul.textContent);
 })


div.addEventListener('click', function(){
    addQueue();
    processQueue.push(div.textContent);
    display(div.textContent);
})



numequals.addEventListener('click', function(){
      addQueue();
      compute(); 
})

}






start();

clear.addEventListener('click', function(){
    window.location.reload();
})