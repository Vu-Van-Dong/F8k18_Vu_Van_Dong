



const student={
		id: 1,
		name: 'student',
		"custom-key" : 123456
}



//get value



//news key

student.address = 'Ha Noi'
student['age'] = 10

// console.log(student)

const key = 'custom-key'

student[key] = '123456789'

console.log(student["custom-key"])

delete student.address

// console.log(student)


// for (const  item in student) {
// 		console.log(item,student[item])
// }
//


const keys = Object.keys(student)
console.log(keys)

const values = Object.entries(keys)
console.log(values)







