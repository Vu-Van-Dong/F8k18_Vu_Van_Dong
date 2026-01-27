interface AnimalI {
    arm: number
    lag: number
    speaking: () => string
    going: () => void
    setArm: (arm: number) => void
    setLeg: (leq: number) => void
}


class Animal implements AnimalI {
    arm: number = 2
    lag: number = 2

    speaking(): string {
        return 'speaking'
    }

    going(): void {
        console.log('going')
    }

    setArm(arm: number): void {
        console.log(arm)
    }

    setLeg(leq: number): void {

    }
}

const animal = new Animal()

animal.going()

animal.setArm(5)





class Dog implements AnimalI {
    arm: number = 2
    lag: number = 2



    going(): void {
        console.log('4 legs ')
    }

    setArm(arm: number): void {
    }

    setLeg(leq: number): void {
    }

    speaking(): string {
        return "meo meo";
    }

}




