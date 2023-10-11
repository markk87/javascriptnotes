    const students = [
     {
         firstName: "Marky",
         lastName: "Kleyman",
         graduated: true,
         number: [1000]
     },
     {
         firstName: "Pavlik",
         lastName: "Mkaicja",
         graduated: false,
         number: [1001]
     },
     {
        firstName: "Josh",
         lastName: "Rovenskyyyyy",
         graduated: true,
         number: [1002]
     }
 ];

students.forEach((imena) => console.log(imena.firstName + " " + imena.lastName));



 students.forEach((number) => {
    number.number.forEach((numero)=> {
        console.log(numero)
    })
 });

 const graduates = students.filter((nombre) => nombre.graduated === true );
 console.log(graduates);
