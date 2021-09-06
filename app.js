const rock=document.querySelector('#rock')
// console.log(rock)

const paper=document.querySelector('#paper')
// console.log(paper)

const Scissor=document.querySelector('#scissor')
// console.log(Scissor)

const board =document.querySelector("#board")

// const handler =(action)=>{
//     console.log("you clicked " + action)
// }
const handler =(event)=>{
    const action =event.target.id
    // if(action =='rock'){
    //     board.innerHTML="Rock crushes scissors"
    // } else if (action =='paper'){
    //     board.innerHTML="paper traps ROck"
    // }else if (action =='scissor') {
        
    //     board.innerHTML="scissor cuts paper"
    // }else {
    //     board.innerHTML="click something"
    // }

    switch (action){
        case 'rock':
            board.innerHTML="Rock crushes scissors"
            break
        case 'paper':
            board.innerHTML="paper traps ROck"
            break
        case 'scissor':
            board.innerHTML="scissor cuts paper"
            break
        default:
            board.innerHTML="click something"

    }
}

rock.addEventListener('click', handler)
paper.addEventListener('click', handler)
scissor.addEventListener('click', handler)
// paper.addEventListener('click', handler('paper'))
// scissor.addEventListener('click', handler('scissor'))

// function logName(name="Vaishnavi", age=20){
//     console.log(name + " your are " +   age )
// }
//never mispell the function keyword
//a function can have multilple parameters
//you can set default values for the parameters
//anyvariable you defined in a function's body is local to that function only
// logName()


// function add(a=0,b=0){
//     const sum= a+b
//     console.log(a+b)
// }
// add(2,8)


// function Addition(a=0,b=0){
//     return a + b
// }
// const result = Addition(12,99)
// console.log(result)

// //ECMA SCRIPT 

// const sub=function (a=0,b=0){
//     return a - b
// }

// console.log(sub(10,5))

// //by using arrow function delclartion
// const mul= (a=0,b=0)=> {
//     return a * b
// }

// console.log(mul(10,5))
