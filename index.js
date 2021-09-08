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