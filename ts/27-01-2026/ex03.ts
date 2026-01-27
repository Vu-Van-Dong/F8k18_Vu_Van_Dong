

// Tinh dong goi
interface ProductI{
    getId:() => number
    getName:() =>string
    getPrice:() =>string
}

interface StoreI{
    id:string
    name:string
    address: string

    // addNewproduct:() => void
    getProducts:() => ProductI[]

}

class Product implements ProductI{
    private id: number;
    private name: string;
    private price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id
        this.name = name
        this.price = price
    }

    public getID(){
        return this.id;
    }
    public getName(){
        return this.name;
    }

    public getPrice(){
        return this.price;
    }

    // getId: () => number
    // getName: () => string
    // getPrice: () => string

}

const iphone4:Product = new Product(1,'iphon4',100)
const iphone5:Product = new Product(2,'iphon5',200)





// const iphone4 : ProductI= new Product()
// iphone4.id = 1
// iphone4.name = 'iphone4'
// iphone4.price = 200000

// iphone5.name = 'iphon6'

// iphone5.setName('iphon5s')


// console.log(iphone4.getName(), iphone4.getPrice())
console.log(iphone5)

interface CustomerI{
    getId():() => number
    getName():() => string
    setName:(name:string) => void
}





interface StoreI{
    getId:() => number
    getName:() => string
    getaddress:() => number

    setName:(name:string) => void
    setaddress:(address:string) => void


    addNewproduct:(product:ProductI ) => void
    getProducts:() => ProductI[]
    deleteProduct:(productId:number ) => void


    getCustomers:() => CustomerI[]
    addNewCustomer:(customer:CustomerI ) => void
    deleteCustomer:(cstId:number ) => void

}

class Store implements StoreI{
    addNewCustomer(customer: CustomerI): void {
    }

    addNewproduct(product: ProductI): void {
    }

    deleteCustomer(cstId: number): void {
    }

    deleteProduct(productId: number): void {
    }

    getCustomers(): CustomerI[] {
        return [];
    }

    getId(): number {
        return 0;
    }

    getName(): string {
        return "";
    }

    getaddress(): number {
        return 0;
    }

    setName(name: string): void {
    }

    setaddress(address: string): void {
    }

    address: string;

    getProducts(): ProductI[] {
        return [];
    }

    id: string;
    name: string;

}

/*
  - store co the
    + Them san pham
    + Them KH
    + Lay Kh
    + thoong bao cho khach hang biet khi co san pham moi ve

 */


















