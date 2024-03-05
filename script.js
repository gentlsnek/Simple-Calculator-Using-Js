'use strict'

//Js variables for all elements that will be used
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
const brk1 = document.getElementById("bracket1");
const brk2 = document.getElementById("bracket2");
const clear = document.getElementById("clear");





//arrays for taking in input properly 
let inputQueue = [];
let numberQueue = [];
let processQueue = []



//clears textarea
disp.textContent = "";

//adds a inputed number to queue 
const addQueue = function() {
    let num = "";
    for(let i = 0; i < inputQueue.length; i++){
     num += inputQueue[i];
    }
    inputQueue.length = 0;
    numberQueue.push(num);
}

//main function that carries out the calculations
const compute = function(){

    let answer = Number(numberQueue[0]);
    console.log(answer);
  for(let i = 1; i < numberQueue.length; i++){
    let j = i-1;
    console.log("loop 1 runs");
        console.log(processQueue[j]);
        //switch to carry out operations
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

            case "(":
                break;


            case ")":
                break;

                default:
                    console.log("idk what happened");
        }  
    }
    //prints out answers and clears out all queues
    console.log(answer);
    disp.textContent = answer;
    inputQueue.length = 0;
    numberQueue.length = 0;
    processQueue.length = 0;
  }

  //function to display  buttons clicked
function display (input){
    console.log(input);
    let original = disp.textContent;
    let newText = original + input;
    console.log(original);
    disp.textContent = newText;
    newText = "";
    original = "";

}

//event lisnters for every button in website
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

brk1.addEventListener('click', function(){
    addQueue();
    processQueue.push(brk1.textContent);
    display(brk1.textContent);
})

brk2.addEventListener('click', function(){
    addQueue();
    processQueue.push(brk2.textContent);
    display(brk2.textContent);
})

//too many fucking buttons i wanna kms



numequals.addEventListener('click', function(){
      addQueue();
      compute(); 
})

//for the clear button, it just refreshs the page
clear.addEventListener('click', function(){
    window.location.reload();
})