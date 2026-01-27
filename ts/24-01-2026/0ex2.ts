


interface Employee {
    id: number
    name: string
    salary: number
    active: boolean
}

const employees: Employee[] = [
    {
        id: 1,
        name: "Nguyen Van A",
        salary: 120000,
        active: true,
    },
    {
        id: 2,
        name: "Nguyen Van B",
        salary: 110000,
        active: false,
    },
    {
        id: 3,
        name: "Nguyen Van C",
        salary: 10000,
        active:true
    }
]


const activeEmployees: Employee[] = employees.filter((employee: Employee) => employee.active)
console.log(activeEmployees)


