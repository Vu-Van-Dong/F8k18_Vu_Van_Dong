//
//===============Đề 1============================
//
// const products = [
// 		{ id: 1, name: "Gạo ST25 (5kg)", price: 18000, remaining: 20 },
// 		{ id: 2, name: "Dầu ăn Simply (1L)", price: 65000, remaining: 15 },
// 		{ id: 3, name: "Nước mắm Nam Ngư (750ml)", price: 45000, remaining: 30 },
// 		{ id: 4, name: "Sữa tươi Vinamilk (1L)", price: 38000, remaining: 25 },
// 		{ id: 5, name: "Trứng gà (10 quả)", price: 45000, remaining: 18 }
// ];
//
// /*
// * get product names with price greater than 20000
// * //lấy tên sản phẩm có giá lớn hơn 200000
// * */
//
// const filteredProducts = products
// .filter(product => product.price >20000)
// .map(product => product.name)
//
// console.log(filteredProducts)
//
//


// ===============================================================


const users = [
		{ id: 1, account: "admin", password: "123456", role: "admin", isActive: true },
		{ id: 2, account: "user01", password: "abc123", role: "user", isActive: true },
		{ id: 3, account: "user02", password: "111111", role: "user", isActive: false },
		{ id: 4, account: "teacher", password: "teach2025", role: "teacher", isActive: true }
]


/*
* account / pass
*
* if it's correct and active -> log "login ok"
* if account is correct and active is false ->  user have been deleted
* if incorrect -> "account | pass is correct"
* */
// * nếu đúng và đang hoạt động -> đăng nhập "đăng nhập ok"
// * nếu tài khoản đúng và hoạt động là sai -> người dùng đã bị xóa
// * nếu sai -> "tài khoản | pass đúng"


