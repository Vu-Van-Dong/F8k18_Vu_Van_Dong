
const age = 18

// if (age < 18) {
// 		console.log("Ban nho hon 18 tuoi")
// }else {
// 		console.log("Ban nho hon 18 tuoi")
// }

// if (age < 18){
// 		console.log("ban chua du 18 tuoi")
// }else if (age === 18){
// 		console.log("ban vua du 18 tuoi")
// }else{
// 		console.log("ban hon 18 tuoi")
// }

//
// let ages = 18
// switch (true) {             // cho là true để so sánh và trả về giá trị đúng
// 		case(ages>18):
// 				console.log("Tuoi lon hon 18")
// 				break
// 		case(ages<18):
// 				console.log("Tuoi nho hon 18")
// 				break
// 		case(ages===18):
// 				console.log("Tuoi bang 18")
// 				break
// 		default:
// 				console.log("Tuoi khong hop le")
// }

// 4. switch ...case
// let   day ="su";
// switch (day) {
// 		case "monday":
// 				console.log("hom nay la monday: ")
// 				break
// 		case "tuesday":
// 				console.log("hom nay la tuesday: ")
// 				break
// 		case "wednesday":
// 				console.log("hom nay la wednesday: ")
// 				break
// 		case "thursday":
// 				console.log("hom nay la thursday: ")
// 				break
// 		case "friday":
// 				console.log("hom nay la friday: ")
// 				break
// 		case "saturday":
// 				console.log("hom nay saturday: ")
// 				break
// 		case "sunday":
// 				console.log("hom nay sunday: ")
// 				break
// 		default:
// 				console.log("Ngay khong hop le ! ")
//
// }


//5. ternry operrator
// const  agess=18
// console.log(agess < 18 ? "ban chua du 18 tuoi " :"ban da du 18 tuoi")



//Bài 1: Toán tử & Điều kiện
//
// 1. Viết chương trình tính chỉ số BMI (Cân nặng / (Chiều cao ^ 2)). Nhập chiều cao (m), cân nặng (kg). In ra phân loại: Gầy (BMI < 18.5), Bình thường (18.5 - 24.9), Thừa cân (>= 25).

let Height = 1.6
let Width = 60

let BMI = Width/Height *2

if (BMI < 18.5){
		console.log("gay")
}else if(BMI >= 25){
		console.log("Thua can")
}else  if(BMI >= 18.5 && BMI <= 24.9){
		console.log("Binh thuong")
}



// 2. Viết chương trình kiểm tra xem một số có phải là số chẵn hay lẻ, đồng thời kiểm tra nó có chia hết cho 3 không.

let number = 34
if (number % 2 === 0 && number % 3 === 0) {
		console.log("la so chan va chia het cho 3")
}else if(number % 2 === 1 && number % 3 === 0) {
		console.log("la so le va chia het cho 3")
}else{
		console.log("la so le va khong  chia het cho 3")
}
//
// 3. Viết chương trình nhập tuổi và xác định độ tuổi: Trẻ em (<12), Thanh niên (12-25), Trưởng thành (25-60), Người già (>60).

let agesss = 36
if (agesss < 12){
		console.log("Tre em")
}else if(agesss <= 12 && agesss <= 25){
		console.log("Thanh nien")
}else if(agesss <= 60 && agesss >= 25){
		console.log("Truong thanh")
}else if(agesss > 60 ){
		console.log("Nguoi gia")
}









