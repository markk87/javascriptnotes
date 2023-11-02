// for(i = 0; i <= 7; i+=2){
//     console.log(i);
// }

// while(i<7){
//     console.log(i);
//     i++;
// }


function spaces(s, y, t) {
    let total = 0;
    for(let i = 0; i <= s; i++){
        if(y[i] === "C" && t[i] === "C") {
            total++;
        }
    }
    console.log(total);
}

spaces(5, "CC..C", ".CC..");