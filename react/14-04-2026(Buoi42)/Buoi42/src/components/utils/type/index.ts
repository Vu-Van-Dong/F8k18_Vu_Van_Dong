
interface Style{
    [key: string]: string;
}



interface Column{
    value: string,
    text: string,
    style?: Style

}

 interface Row{
    id: number
     [key: string]: string |number
 }


export type {
    Column,
    Row
}



