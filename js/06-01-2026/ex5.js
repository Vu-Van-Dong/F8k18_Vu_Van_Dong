
const person = {
		name : "Huong Tran",
		age : 20,
		address: "HN",
		self: function (){
				return this
		}
}

person.self().self().self().name="Dong Vu"

// console.log(person)

const {name ,age} =person
// const name = person.name (ten biến và tên key bằng nhau )
console.log(name)

const  str = `${name} nam nay ${age} tuoi`
console.log(str)












