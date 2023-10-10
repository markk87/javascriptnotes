    const students = [
     {
         firstName: "Mark",
         lastName: "Kleyman",
         graduated: true,
         number: [1]
     },
     {
         firstName: "Paul",
         lastName: "Mkaicja",
         graduated: false
     },
     {
        firstName: "Josh",
         lastName: "Rovenskyyyyy",
         graduated: true
     }
 ];
 students.forEach((name) => console.log(name.firstName));

 const graduates = students.filter((student) => student.graduated === true);
 console.log(graduates);


const words = ['hello', 'kleyman', 'APCS', 'computer', 'batman'];

const result = words.filter((word) => word.length > 5);

console.log(result);

words.forEach((print) => console.log(print));

// example.forEach((result) => {
//     //iterate through the array and run function on each element
//     //pass each element into the function as parameters
//     console.log(result);

// })

