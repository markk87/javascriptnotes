// function greet(name){
//     const greetPromise = new Promise(function(resolve, reject) {
//         resolve(`Hello ${name}`)
// });
// return greetPromise;
// }

// const Aaron = greet("Aaron");
// console.log(Aaron);
// //do NOT use .then
// Aaron.then((result) => {
//     console.log(result);
// })

//REST API - Relation State Tranfer Application Programming Interface

// const URL = `https://api.quotable.io/random`;

// async function getData(URL) {
//     try {
//         const response = await fetch(URL);
        
//         console.log(response);
//         const data = await response.json();
//         console.log(data);
       
       
//     } catch (error) {
//         document.querySelector("h1").textContent = error;
//     }
    
// }
// getData(URL);


const urmom = {
    name: "Yourmom", //String
    age: 16, //Integer
}

// let x = Array.from(urmom.name);
// console.log(x);

// // for(let i = 0; i < urmom.name.length; i++) {
// //     console.log(urmom.name[i])
// // }
// let i = 0
// while(i < urmom.name.length) {
//     console.log(urmom.name[i]);
//     i++
// }

// function needle(name, search){
//     if(name.includes(search)){
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(needle(urmom.name, "U"))

// console.log(urmom.name)

function sortString(name){
    let x = [...name].sort();
    console.log(x);
}

sortString("kdfjliaewuyruh3iwe7gywlijfhskdjfhsladkjfh")
let x = [1,2,3];
let y = [4,5,6];
let z = [...x, ...y];
x = [...x, ...y];
console.log(x);

function removeL(name) {
    let x = Array.from(name);
    x.splice(-1);
    console.log(x);
}

removeL(urmom.name).forEach((el) => console.log(el))