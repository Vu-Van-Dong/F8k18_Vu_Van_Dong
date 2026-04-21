

const  formEl = document.querySelector('#loginForm')
formEl.addEventListener('submit', function (e){
		e.preventDefault()
		
		const data = new FormData(this)
		
		const email = data.get('email')
		const password = data.get('password')
		
})




