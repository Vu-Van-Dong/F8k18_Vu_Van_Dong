// let i=0

// for (let i = 0; i <= 10; i++) {
// 		console.log(i)
// }


//
// const numbers=[1,3,5,3,3,4,9,8]
// // bai 1: in ra tung phan tu
//
// for (let i = 0; i < numbers.length; i++){
// 		console.log(numbers[i])
// }


// function phantu(numbers){
// 		if(Array.isArray(numbers)){
// 				for(let i=0;i<=numbers.length;i++){
// 						console.log(numbers[i])
// 				}
// 		}
// }
// phantu(numbers);

// bai2 inra so chan


// const isEventNum =(n) =>n%2===0
// for (let i = 0; i < numbers.length; i++){
// 		if (isEventNum(numbers[i])){
// 				console.log(numbers[i])
// 		}
// }


// function phantuChan(numbers){
// 		if(Array.isArray(numbers)){
// 				for(let i=0;i<=numbers.length;i++){
// 						if (numbers[i] %2===0){
// 								console.log(numbers[i])
// 						}
//
// 				}
// 		}
// }

// phantuChan(numbers);

// bai3: tinh tong cac so le
// Bài 3: Tính tổng các số lẻ trong mảng

// let sum =0
// for (let i = 0; i < numbers.length; i++){
// 		if (isEventNum(numbers[i])){
// 				sum+=numbers[i]
// 				console.log(sum)
// 		}
// }


// function phantule(numbers) {
// 		let tong = 0;
//
// 		if (!Array.isArray(numbers)) {
// 				for (let i = 0; i < numbers.length; i++) {
// 						if (numbers[i] % 2 !== 0) {
// 								tong += numbers[i];
// 						}
// 				}
// 		}
//
// 		return tong;
// }
// console.log("Tong cac phan tu le la: "+  phantule(numbers)); // 16
//

// bai 4. in ra so lon nhat
// function maxElement(numbers){
// 		let max = numbers[0]
// 		if (!Array.isArray(numbers)){
// 				for (let i = 0; i < numbers.length; i++){
// 						if (numbers[i] > max){
// 								max = numbers[i]
// 						}
// 				}
// 		}
// 		return max;
// }
// maxElement(numbers);

// const numbers = [1, 3, 5, 3, 3, 4, 9, 8]
// const getMaxnum = (arr) => {
// 		if (!Array.isArray(arr)) return
// 		if (arr.length === 0) return null
//
// 		let max = arr[0]
//
// 		for (let i = 0; i < arr.length; i++) {
// 				if (max < numbers[i]) {
// 						max = numbers[i]
// 				}
// 		}
// 		return max
//
// }
// console.log(getMaxnum(numbers))


//bai5. in ra so be nhat
// function minElement(numbers) {
// 		let min = numbers[0]
// 		if (!Array.isArray(numbers)) {
// 				for (let i = 0; i < numbers.length; i++) {
// 						if (numbers[i] < min) {
// 								min = numbers[i]
// 						}
// 				}
// 		}
// 		return min;
// }
//
// minElement(numbers);

// sap xep cac so tu be dne lon

// for (let j = 0; j < numbers.length; j++) {
// 		for (let i = 1; i < numbers.length; i++) {
// 				if (numbers[i] > numbers[i + 1]) {
// 						const temp = numbers[i]
// 						numbers[i] = numbers[i + 1]
// 						numbers[i + 1] = temp
// 				}
// 		}
// }
//
// console.log(numbers);




//
// const numbers=[2,9,5,1]
//
// for(const i of numbers){ // lặp lần lượt tất cả các phần tử trong numbers
// 		console.log(i)
// }


// const  sorteedNumbers = [1,2,3,5,7,9,11,12,13]
//
// // tim vi ti so 11
// const getIndex =(arr , n) =>{
// 		if (!Array.isArray(arr)){
// 				console.log("Invalid")
// 				return
// 		}
// 		if (arr.length ===0){
// 				console.log("Invalid")
// 				return
// 		}
// 		for (let i = 0; i < arr.length; i++) {
// 				if (arr[i] === n) return i;
//
// 		}
// }
// console.log(getIndex(sorteedNumbers , 11))



const  sorteedNumbers = [1,2,3,5,7,9,11,12,13]

// log ra nhung so nho hon 11
let count =0
// for (let i = 1; i <= sorteedNumbers.length; i++) {
// 		count ++
// 		if (sorteedNumbers[i] < 11) {
// 				console.log(sorteedNumbers[i])
// 		}else{
// 				break
// 		}
// }

// cach 2

// for(const number of sorteedNumbers){
// 		count ++
// 		if (number < 11){
// 				console.log(number)
// 		}else {
// 				break
// 		}
// }
// console.log("count" ,count)


const numbers = [1,2,3,4]
for(let number of numbers){
		console.log("vao day ")
		if(number%2===0) continue
		
}










