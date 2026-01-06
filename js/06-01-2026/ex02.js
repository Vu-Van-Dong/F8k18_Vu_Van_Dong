


//
// function demo() {
// 		console.log('123456')
// }
// demo()


// const demo=() =>{
// 		console.log('123456')
// }
// demo()
//


// const demo = function (){
// 		console.log('123456')
// }
// demo()
//
//



/// Callback=====================

// const demo =function (){
// 		console.log('123457')
// }
// const  execute =(func) =>{
// 		console.log(func())
// }
//
// execute(demo)
//


const doSt1=()=>{
		console.log('do St 1 ')
}
const doSt2=()=>{
		console.log('do St 2')
}

const action1 = (st1, st2) => {
		st2()
		st1()
		
}

const action2 = (st1, st2) => {
		st1
		st2
}

action1( doSt1, doSt2 )  // st1 = doSt1 , st2=doSt2








