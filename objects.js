const date = new Date();
let year = date.getFullYear();
const Dennis = {
    firstName: "Dennis",
    lastName: "Unknown",
    DOB: 2007,
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