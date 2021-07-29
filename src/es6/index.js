function newFunction(name,age,country){
    var name = name || 'richard';
    var age = age || '42';
    var country = country || 'SC';

    console.log(name, age,country);
}

//ec6
function newFunction2(name= 'richard', age='42', country = 'sc'){
    console.log(name,age,country);
};

newFunction2();
newFunction2('Richi',23,'BO');

//Template Literals
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


//
let lorem = "I want to write a epic phrase \n"
+ "second line ot continue..."

let lorem2 = `otra frase epica que necesitamos,
como quiero ordenar la frase, pues solo salto de linea,
sin necesidad de concatenar!`

console.log(lorem);
console.log(lorem2);

//
let person = {
    'name': 'richard',
    'age': 42,
    'country': 'BO'
}

console.log(person.name, person.age, person.country);

let {name} = person;
console.log(name);

//
let team1 = ['oscar', 'julian', 'ricardo'];
let team2 = ['valeria', 'yesica', 'camila'];

let education = ['david', ...team1, ...team2];

console.log(education);

//
var hola = 'holaas';

{
    var globalVar = 'es global var';
}

{
    let globalLet = 'es un global let';
    console.log(globalLet);
}

console.log(globalVar);
//console.log(globalLet);

const a = 'b';
a = 'a';
console.log(a);

//----------promesas
let name = 'richard';
let age = 42;
//conES5 antes
obj = {name:name, age:age};
//con ES6
obj2 = { name, age };
console.log(obj2);

//---------arrow functions
const names = [
    {name: 'richard', age: 42},
    {name: 'yasica', age: 32}
]

let listOfNames = names.map(function(item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name => {
    ...
}

const square = num => num * num;

//--- promesas
const helloPromisse = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('todo bien!');
        } else {
            reject('ups algo salio mal');
        }
    });
}

helloPromisse()
.then(Response => console.log(Response))
.then(() => console.log('holaaaa'))
.catch(error => console.log(error))

// ----- clases
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,4));

//
import { hello } from './module';

hello();

//generator
function* helloWorld(){
    if (true) {
        yield 'Hello yield, ';
    }
    if (true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

//
