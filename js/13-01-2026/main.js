// const students=[
// 		{id: 1, name: 'Jone'},
// 		{id: 2, name: 'kate'},
// ]

//
// for (const student of students){
// 		console.log(student)
// 		student.name = 'replaced'
// }
//
// console.log(students)
//

// for (let i =0; i < students.length; i++) {
// 		students[i].name = 'replaced'
// }
// console.log(students)



// ============================================================


/*
* 2 array (companies, persons)
* id - unique number
* */

const companies = [
		{ id: 1, name: 'fpt' },
		{ id: 3, name: 'viettel' },
		{ id: 2, name: 'vnpt' }
]

const persons = [
		{ id: 1, name: 'Huong Tran', companyId: 3 },
		{ id: 2, name: 'Dong Vu', companyId: 1 },
		{ id: 3, name: 'Tien Vuong', companyId: null },
		{ id: 4, name: 'Son Nguyen', companyId: 2 },
		{ id: 5, name: 'Bach Hoang', companyId: 3 }
]


/*
* console.log(personName, '--', companyName)

* console.log(`${personName} -- ${companyName})`
* Huong Tran -- viettel
* Dong Vu -- fpt
* Tien Vuong --
* */



// for ( const person of persons ) {
// 		const {companyId} = person
// 		if (companyId === null) {
// 				console.log(`${person.name} --------`)
// 		}
//
// 		for (const company of companies) {
// 				if (company.id === companyId) {
// 						console.log(`${person.name} ----- ${company.name}`)
// 				}
// 		}
// }

// findCompanyByPersonID(persons,companyId) ->companyName


const findByID = (arr,id) => {
		
		// for (let i = 0; i < arr.length; i++) {
		// 		const item = arr[i]
		// 		if (item.id === id) return arr[i]
		// }
		
		for (const  item of  arr){
				if (item.id === id) return item
		}
}

const findCompanyByPersonId = (persons, companies,personId) => {
		const person = findByID(persons,personId)
		const {companyId} = person
		
		const company =findByID(companies,companyId)
		return company ? company.name : null
		
}

const companynName = findCompanyByPersonId(persons,companies,1 )
console.log(companynName)













