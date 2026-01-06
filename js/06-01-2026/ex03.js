
// const a = 10
// const b = 3
// const c = a%b
// console.log(c)
//






//f(x)= a*x^2 + bx + c
//denta= b^2 -4ac
// x1,x2 = -b +- can(denta)/(2a)


// const a = 6,b = 5 ,c = 1


function phuongTrinh(a,b,c){
		const  denta = b*b -(4*a*c)
		if(denta === 0){
				console.log("Phuong trinh co nghiem kep x = " + ((-b)/(2*a*c)) )
		}else if(denta > 0){
				console.log("phuong trinh co 2 nghiem phan biet x1 = " + (((-b) +(denta)**0.5)/(2*a*c)) ,"x2 = " + (((-b) - (denta)**0.5)/(2*a*c)) )
		}else {
				console.log("Phuonh trinh vo nghiem")
		}
}

phuongTrinh(6,5, 1)














