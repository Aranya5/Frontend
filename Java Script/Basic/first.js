console.log("Hello");
let name = "Aranya Basu";
console.log(name);

const student = {
    fullName: "Aranya Basu",
    age: 20,
    cgpa: 9.69,
    isPass: true,
};

student["age"] = student["age"]+1;
// student.age = student.age+1;
console.log(student.age);

let a = 5;
let b = 2;
let c = "5";

console.log("a*b=",a*b);
console.log("a^b=", a**b);
console.log(a == c);
console.log(a === c); // it also compares the data type 
//let num = prompt("Enter a number");
// if(num%5 === 0){
//     console.log("Multiple of 5");
// }
// else{
//     console.log("Not a multiple of 5");
// }

let str = "MyNameisAranya";
for(let val of str){
    console.log(val);       
}


for(let key in student){
    console.log("key=",key,"value=",student[key]);
}

let output = `My name is ${student.fullName} & my age is ${student.age}`;
console.log(output);

let marks = [85,97,44,37,76,60];
let sum=0;

for(i=0; i<marks.length; i++){
    sum=sum+marks[i];
}

// for(let i of marks){
//     sum=sum+i;
// }
console.log(sum);

console.log("Avg is",sum/marks.length);

marks.push("76","68");
console.log(marks.toString());
let delVal = marks.shift();
console.log("Deleted value is",delVal);
marks.unshift("100");

let bhuchu =[999,777];
let puchu=[143,1432];

let onekNumber = marks.concat(bhuchu,puchu);
console.log(onekNumber);

onekNumber.splice(2,3,111,222,333);
console.log(onekNumber);

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
let delCom= companies.shift();
console.log("Removed company",delCom);
companies.splice(1,1,"Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);

const arrowSum = (a,b) => {
    console.log(a+b);
}




