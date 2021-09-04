// //Arithmetic oprators
// //  const specific_name ="vaishnavi"

// //  console.log(specific_name)

// //  const a=2
// //  const b=15


// //  console.log(a+b)

// //  console.log(a-b)

// //  console.log(a*b)

// //  console.log(a/b)

// //  console.log(a%b)

// //  console.log(a**b)

// //  const c=a+b

// // let c=5

// // c**=3

// // //assignment oprators

// // let name='vaishnavi'

// // let a =20

// // a+=name

// // a = a+1

// // console.log(a)
// // console.log(typeof a)

// // // compariosn operators

// // const a= 21
// // const b=7
// // const c=21

// // console.log('a>b', a>b)
// // console.log('a<b', a<b)
// // console.log('a==b', a==b)
// // console.log('a==c', a==c)
// // console.log('a>=c', a>=c)

// // console.log('-------------------------------------------------')

// // // -----------------------------------
// //  const e=11
// //  const d='11'

// //  console.log(e==d)
// //  console.log(e === d)

//  //e==d 

//  //logical operators

// //  const g=2
// //  const k=3

// //  const j=35

// //  console.log(j > g && j<k)

// //  console.log('g==k', g==k)
// //  console.log('g != k', g!=k)

// //  console.log('Truth table for AND')
// //  console.log('')

// //  console.log('false && false', false&&false)
// //  console.log('true && false', true&&false)
// //  console.log('false && true', false&&true)
// //  console.log('true && true', true&&true)

// //  console.log('Truth table for OR')
// //  console.log('')

// //  console.log('false || false', false||false)
// //  console.log('true || false', true||false)
// //  console.log('false || true', false||true)
// //  console.log('true || true', true||true)

// //Conditional statements
//  const a=0

// //  if(a % 2 == 0){
// //      console.log("Number is even")
// //  }
// //  else{
// //      console.log("NUmber is odd")
// //  }

// if(typeof a === 'number'){
//     if(a ===0){
//         console.log("Neither even nor odd")
//     }
//     else if(a% 2 == 0){
//         console.log("NUmber is even")
//     }
//     else {
//         console.log("Number is odd")
//     }
// }
//   else{
//     console.error("Not a number")
// }

// const element = document.getElementById('selectme')

// const element = document.getElementsByClassName('heading')

//  const element = document.getElementsByTagName('h2')

// const element=document.querySelector("#selectme")
// element.innerHTML="this is from Js"


// element.style.color="cyan"
// element.style.fontsize="40px"
// element.style = 'display:none'

// console.log(element.classList)
// element.classList.add('five')
// console.log(element.classList)
// element.classList.remove('one')
// console.log(element.classList)


// const body =document.querySelector('body')

// console.log(body)

// console.log(body.classList.toggle('dark'))

// const value= element.classList.contains('three')

// console.log(value)


const button =document.querySelector('button')
const element =document.querySelector('#selectme')

// console.log(button,element)



button.addEventListener('click',()=>{
    // console.log('you clicked me')
    // element.style="background:aqua"

    element.classList.toggle('dark')
    
})



 