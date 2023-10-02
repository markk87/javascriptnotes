/* //we can pass in arguments or parameters
function test(mess) { // declare and define function, input output machines

    console.log(mess);
}
//run the function
test(45);

//String ""
const x="String";
//declaring a variable, defining a variable
test(x);

//Number/Integer
const y = 98;
test(y);

//Boolean true or false
const z = true;
test(z);

function add(x,y) {
    console.log(x + y)
    }

//need to convert the String to a Number
let a = Number(prompt("Enter THE number"));
let b = Number(prompt("Enter another number"));
add(a, b); */

function add(x,y){
    //creates an output
    return x + y;
}

const sum = add(45, 34);

function calc() {
    const sum = add(45, 34);
    console.log(sum);
}
calc();