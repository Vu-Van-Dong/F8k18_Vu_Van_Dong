//
//
// const xhr = new XMLHttpRequest()
//
// xhr.open("GET", "https://www.googleapis.com/books/v1/volumes?q=inauthor:tolkien")
//
//
// xhr.onload=function() {
// 		if (xhr.status>=200 && xhr.status<300) {
// 				const  data = JSON.parse(xhr.responseText)
// 				console.log(data)
//
// 		}else {
// 				console.error("Loi: ", xhr.status ,xhr.statusText)
// 		}
// }
//
// xhr.onerror=function() {
// 		console.error("network error: ")
//
// }
//
// xhr.send()



// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((reponse) => reponse.json())
//    .then((data) => console.log(data))
// .catch((error) => console.log("Error: ", error))



//
//
//
// (async () => {
// 		const reponse = await fetch("https://jsonplaceholder.typicode.com/posts")
// 		const data = await reponse.json()
// 		console.log(data)
//
// 		const  listItem = data.map(post => {
// 				return ` <li>${post.title} </li>`
// 		})
//
// 		const postListEl = document.querySelector("#post-list")
// 		postListEl.innerHTML = listItem.json()
//
// 		console.log(listItem)
//
//
// })




import "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"

console.log()


















