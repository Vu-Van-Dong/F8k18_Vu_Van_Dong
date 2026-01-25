//
// const numbers = [0,1,2,4,5,7,4,9]
//
// numbers.forEach((value)=>{
// 		console.log(value)
// })
// //




///======index

const numbers = [0,2,3,5,6,7,9]
const index = numbers.indexOf(3,9)
console.log(index)


const products = [
		{ id: 1 , name: "Gao St25(5Kg)" ,price: 180000,remaining:20},
		{ id: 2 , name: "Dầu ăn Simply(1l )" ,price: 650000,remaining:15},
		{ id: 3 , name: "Nước nắm Nam Ngư (750ml)" ,price: 450000,remaining:30},
		{ id: 4 , name: "Sữa tươi vinamill (1l)" ,price: 380000,remaining:25},
		{ id: 5 , name: "Trứng gà(10 quả )" ,price: 450000,remaining:18},
]

// find element with =3

const product = products.find((product) => product.id === 3)
console.log(product)

// filter elemnt with id =3

const filteredProducts = products.filter((product) => {
		return product.id === 3
})


// map
const names = products.map((product) => {
		return product.name
})

console.log(names)






















