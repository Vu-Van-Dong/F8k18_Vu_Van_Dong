

// ======Tình trừu tượng

interface AnimalI {
    id: number
    name: string
    going: () => void
    speaking: () => void

}

abstract class Animal{
    id: number
    name: string
    abstract  going(): void
    abstract speaking(): void
}



class Dog extends Animal{
    going(){
        console.log('going')
    }

    speaking() {
        console.log('speaking')
    }

}


// obsever

















