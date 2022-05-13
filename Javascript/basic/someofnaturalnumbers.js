let multipleofThree = [];
let multipleofFive = [];
let sumOfThree = 0;
let sumOfFive = 0;

// find the sum of natural numbers with the multiples of 3 and 5 up to 25

mysum=(num)=>{
//  Finding multiples of 3 and 5 and storing in an array
for(let i=1;i<num;i++){
    if(i%3==0){
        multipleofThree.push(i);
    }
    else if(i%5==0){
        multipleofFive.push(i);
    }
}

console.log(multipleofFive)
console.log(multipleofThree)
// adding array values and storing to variables


for (let i = 0; i < multipleofThree.length; i++){
    sumOfThree += multipleofThree[i];
}

for (i=0; i < multipleofFive.length; i++){
    sumOfFive += multipleofFive[i];
}


console.log(sumOfThree)
console.log(sumOfFive)

let total = `The Total is ${sumOfFive + sumOfThree}`;

console.log(total);


}

// function mysum(num){
//     let multipleofThree = [];
//     let multipleOfFive = [];
//     for (i=0;i<num;i++){
//         console.log(num);
//     }
// }


mysum(10);
