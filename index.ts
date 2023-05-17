import axios from "axios";

const url= "https://jsonplaceholder.typicode.com/todos/1"

let a: number = 12
let b: any = 10
let now: Date = new Date()
let speed: String = 'new data'
let numberAboveZero: boolean | number = false;
let datanew = [-10, -1, 12]


//Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[] 

type GuitaristNew = {
    name?: string,
    active: boolean,
    albums:stringOrNumberArray
}

type UserId = stringOrNumber

//Using interface to define proper stcructure of an obj
interface Todo{

    id: number;
    title: any ;
    completed: boolean;
}

//Add two number, speed and Date examples
const sum = (a: number, b: number) =>{
    
    const ans = a + b 
    console.log("Answer of addition is: ", ans)
    console.log("Date is : ", now)



}

const brew = (speed: String) => {

    const data = speed.toUpperCase()
    console.log("Speed is : ", data)
}

const brewnew = (datanew: any)  => {

for(let i=0; i < datanew.length; i++ )
{
    if(datanew[i] > 0)
    {
        numberAboveZero = datanew[i];
    }
}
}

//Destrctureing and Annotations 
const todayWeather =
{
    date: new Date(),
    weather: 'summer days'
}

const logWeather  = ({ date, weather}: { date: Date, weather: String}): 

void => {

{
    console.log(date),
    console.log(weather)

}
}

//Example IMP

type Guitarist = {
    name: String,
    active: boolean,
    albums: (string | number) []
}

let jp: Guitarist = {
    active: true,
    name: 'sam',
    albums: ['i','ii','iv']
}

const greetGuitarist = (guitarist: Guitarist ) =>{

    if(guitarist.name)
    {
        console.log(`Hello ${guitarist.name.toUpperCase()}!`)
    }
    return 'Bette luck next..!'
}

//Main exceution 
axios.get(url).then(Response => {
    
    const todo = Response.data as Todo
    //console.log(Response.data);

    const id = todo.id;
    const title  = todo.title;
    const completed = todo.completed;

    logTodo(id, title,completed)
    sum(a,b)
    brew(speed)
    brewnew(datanew)
    logWeather(todayWeather)
    greetGuitarist(jp)
})

const logTodo = (id: number, title: string, completed: boolean) => {

    console.log(`
    The Todo with ID: ${id}
    has a title of: ${title}
    is it completed: ${completed} `);
}

