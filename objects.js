const date = new Date();
let year = date.getFullYear();
const Dennis = {
    firstName: "Dennis",
    lastName: "Unknown",
    DOB: 2007,
    siblings: ["Paul","Josh"],
    graduated: false,
    age: function() {
    return year - this.DOB 
    },

};
const Marky = {
    firstName: "Mark",
    lastName: "Kleyman",
};
console.log(Dennis,);


let nums = [1, 2, 3, 4, 5];
let movies = ["Star Wars", "Marvel Thing", "Barbie"];
//access individual element from list/array index, starts at 0
console.log(nums[nums.length - 2]);
nums.forEach((el)=> console.log(el));
movies.forEach((movies)=> console.log(movies));
//for each loop
//arrow functions auto return, this key word points glba