

// hàm

// hàm khai báo Declaration Function

// function sum(){
// 		console.log("Chao ban nhe");
// 		console.log("Chao ban lan 2 ");
// }
// sum();


// 2. hàm biểu thức
// const sum = function (a,b){
// 		return a+b;
// 		// các câu lệnh sau retủrn sẽ bị bỏ qua và không thực hiện
// }
// console.log(sum(3,4)) // lowif gọi nhàm



//3. hàm mũi tên
// const sum =(num1, num2) => {
// 		return num1 + num2;
// }
// console.log(sum(2, 3)); // loiwf gọi hàm


// 4. IIFE (biểu thức thực thi hàm ngay lập tức )

// (function  hello(){
// 		console.log("hello")
// })()


//5. hamf vo danh

// (function (){
// 		console.log("helloooo")
// })()

// (() =>{
// 		console.log("Hello Ex04");
// })()


//6. hàm Callback
// hàm được dùng như 1 tham số trong hàm khác. nghĩa là:
    // - là hàm
		// - được truyền vào như 1 tham số trong hàm khác

function  sum(num1, num2) {
		return num1 + num2
}
function calculate(callback) {
		console.log(sum(3,8));
}
calculate(sum())

