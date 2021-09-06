// const rock=document.querySelector('#rock')
// console.log(rock)

// const paper=document.querySelector('#paper')
// console.log(paper)

// const Scissor=document.querySelector('#Scissor')
// console.log(Scissor)

function logName(name="Vaishnavi", age=20){
    console.log(name + " your are " +   age )
}
//never mispell the function keyword
//a function can have multilple parameters
//you can set default values for the parameters
//anyvariable you defined in a function's body is local to that function only
logName()


function add(a=0,b=0){
    const sum= a+b
    console.log(a+b)
}
add(2,8)


function Addition(a=0,b=0){
    return a + b
}
const result = Addition()
comsole.log(result)