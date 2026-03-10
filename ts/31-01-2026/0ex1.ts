
interface ProductI{
    getName:() => string
    getPrice:() => number
    getId:() => number
    setName:(name:string) => void
    setPrice:(price:number) => void
}


class Product implements ProductI{
    private name: string
    private price:number
    private id:number

    constructor(id :number,name:string,price:number) {
        this.name = name
        this.price = price
        this.id = id
    }

    getId(): number {
        return this.id
    }

    getName(): string {
        return this.name
    }

    getPrice(): number {
        return this.price
    }

    setName(name: string): void {
        this.name = name
    }

    setPrice(price: number): void {
        this.price = price
    }
}

interface PhoneI extends ProductI{
    getBranch:() => string
    setBranch:(branch:string) => void
}

class Phone extends Product implements PhoneI{

    private branch:string

    constructor(id:number,name: string, price:number, branch:string) {
        super(id,name,price)
        this.branch = branch
    }

    getBranch(): string {
        return this.branch
    }

    setBranch(branch: string): void {
        this.branch = branch
    }


}

const iphone5: PhoneI = new Phone(1,'iphon5',300000,'apple')

console.log(iphone5)


















