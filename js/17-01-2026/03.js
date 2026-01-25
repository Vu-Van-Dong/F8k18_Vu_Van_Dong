
// array

const a = [1, 4, 6, 9]
const b = [2, 3, 4, 5, 8]


// const a = [1,2,3,4,10,7,8, 20 ,9]

// a.sort((a, b) => {
// 		return a - b
// }
// )

// console.log(a)
// a.unshift(13)

// a.push(b)
// console.log(a)

let i = 0, j = 0
const sortedNumbers = []

while (i < a.length && j < b.length) {
		if (a[i] !== b[i]) {
				sortedNumbers.push(a[i])
				i++
		}
		else {
				sortedNumbers.push(b[i])
				i++
		}
}

for (let idx = 0; idx < a.length; idx++) {
		sortedNumbers.push(a[idx])
}

for (let idx = 0; idx < b.length; idx++) {
		sortedNumbers.push(b[idx])
}

console.log(sortedNumbers)

console.log(sortedNumbers)









