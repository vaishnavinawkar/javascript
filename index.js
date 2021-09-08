console.log("MERGED CLASS 1 ES6")

const arr=[1,2,3,4];
console.log(arr[2]);

const [one,two,three,four]=[1,2,3,4];//es6 destructuring
console.log(three);
console.log(four);

function getscores(){
    return [90,100];
}

let [x,y,z]=getscores();

console.log(x);
console.log(y);
console.log(z);

//object destructuring

const obj ={
    name:"Vaishnavi Nawkar",
    email:"vaishnavinawkar3101@gmail.com",
    age:20
}

console.log(obj.email)//without using ES6

//now by using ES6

let {name,email,age,dum}= obj;
console.log(email)
console.log(dum)


let person = {
    firstname: "Nikhil",
    lastname: "Agarwal",
    age1: 20,
    middlename: "DNA"
}
let {age1, firstname, lastname, middlename="" } = person;
console.log(age1);
console.log(firstname);
console.log(lastname);
console.log(middlename);


//es6 arrow function
//it just like a function but itjust a short expression to write a function 

function add(x,y){ //traditional methd to write function
    return x+y
}

let addition=function (r,s){ //this is not es6 arrow function it just a function in a variable format
    return r+s;
}

console.log(add(1,2))

let sum= (q,w)=> q+w;//this is a ES6 arrow function
console.log(sum(10,12))

