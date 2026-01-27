

interface AnimalI {
    id: number
    name: string
    price: number

    going: () => void
    speaking:() => void
}

interface Person extends AnimalI{
    studying:() => void
}

interface PugI extends AnimalI{
    // doSomthing:() => void
}


class  Animal implements AnimalI {
    id: number;
    name: string;
    price: number;
    going(): void {
        console.log('Going...');
    }

    speaking(): void {
        console.log('Speaking...');
    }

}

class Dog extends Animal {
    speaking() {
        super.speaking()
        console.log("go go")
    }
    doSomething() {
        this.going()
        this.speaking()
    }

}
 class Pug extends Dog implements PugI{
     // speaking() {
     //     super.speaking()
     //     console.log('Pug')
     // }

     going() {
         console.log('My pug going...');
     }
     speaking() {
         console.log('My pug speaking...');
     }
 }



const dog1 = new Dog();
const pug = new Pug();

dog1.speaking()
// dog1.speaking()

pug.doSomething()



























