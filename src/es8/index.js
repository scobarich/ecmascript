const data = {
    frontend: 'oscar',
    backend: 'isabel',
    design: 'ana',
}

const entries = Object.entries(data);
console.log(entries.length);

//object values
const  data = {
    frontend: 'oscar',
    backend: 'isabel',
    design: 'ana',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

//padding
const string = 'Hello';
console.log(string.padStart(7,'Hi'));
console.log(string.padEnd(12,'-----'));
console.log('food'.padEnd(12,'-----'))

//la coma al final no generar error
const obj = {
    name: 'richard',
}

//async await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello world'), 3000)
        : reject(new Error('test error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

//
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};
anotherFunction();