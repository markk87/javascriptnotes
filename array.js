const students = [
    {
        firstName: "Mark",
        lastName: "Kleyman",
        graduated: true
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
// students.forEach((name) => console.log(name.firstName));

const graduates = students.filter((student) => student.graduated === true);
console.log(graduates);