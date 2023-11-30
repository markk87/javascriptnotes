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

const URL = `https://api.favqs.com/api/qotd`

async function getData(URL) {
    try {
        const response = await fetch(URL);
        console.log(response);
        const data = await response.json();
        console.log(data);
        document.querySelector("h1").textContent = data.content
        document.querySelector("h2").textContent = data.author
    } catch (error) {
        
    }
    
}
getData(URL);