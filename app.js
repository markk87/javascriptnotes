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
function calculateBMI(x,y){
    return x/(y * y) * 703;
}
function getBMI(){
    const height = prompt('height');
    const weight = prompt('weight');

    console.log(calculateBMI(weight,height));
  
}

getBMI();

let z = getBMI();
if(z <= 18.5) {
    console.log("You're underweight")

}
if (z >= )
else {
    console.log("You're healthy")
}



//BMI = weight(kg) / height(m)^2