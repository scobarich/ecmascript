const obj = {
    name: 'richard',
    age: 42,
    country: 'BO',
};

// let {name, ...all} = obj;
// console.log(name, all);

let {country, ...all} = obj;
console.log(country, all);

//
const obj = {
    name: 'richard',
    age: 42,
}

const obj1 = {
    ...obj,
    country: 'BO'
}

console.log(obj1);

//
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        //? resolve('hello world')
        ? setTimeout(() => resolve('hello world'), 3000)
        : reject(new Error('test error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'))

//
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
