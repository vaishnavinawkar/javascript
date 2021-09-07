const balls= document.getElementsByClassName('ball')
const body=document.querySelector('body')

const arr =[1,2,3,4,5]

// const added=arr.unshift(6)
// arr.splice(2,1)
// arr.shift() 
// arr.shift()

// console.log(arr)

// for(var i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

arr.forEach((element)=> {
    console.log('iteration')
    console.log(element)
})

let age = 20
console.log('your age is ' + age)
console.log('your age is ${age}')