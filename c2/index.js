console.log('test'); // print a string
console.log(1234); // print a number
console.log(true); // print a boolean
console.log(['test1', 'test2']); // print a array
console.log({a: 'test1', b: 'test2'}); // print a object

a = 10;
var b = 20;
let c = 30;

const d = 40; 
const e = 'nekakov string';
const f = false;
// d = 50;

// string, boolean and number are base data types

const student = { // object
    ime: 'Pero',
    prezime: 'Perovski'
};

// console.log(a);
student.ime = 'Janko';

console.log(student);

// student = {
//     ime: 'Stanko',
//     prezime: 'Stankovski'
// };

console.log(student);



// BASE TYPE MEMORY USAGE

// let a    | let b    | let c    |
// --------------------------------
// 10       | 'Pero'   | true     |

// base types -> number, string, boolean
// complex types -> arrays, objects

// COMPLEX TYPES MEMORY USAGE

// let d = {ime: 'Pero', znak: 'Vaga'}
// d.ime = 'Jako' // is OK
// d = {ime: 'Stanko'} // throws error!!!

// const d               | const e                |
// ------------------------------------------------
// &d124god              | 

const testFn = (o = {}) => {
    o.ime = 'Stanko';
    console.log(o);
};

const s = {ime: 'Pero', prezime: 'Perovski'};

testFn(s);

// console.log(o);

// console.log(s);


let ucenik = {ime: 'Janko', ocena: 10};
let stu = ucenik;

// console.log(ucenik);
// console.log(stu);

stu.ocena = 7;

console.log(ucenik);

const tempConvert = (type, value) => {
    switch (type) {
        case 'c2f':
            return value * 9/5 + 32;
        case 'f2c':
            return (value - 32) * 5/9;
        default:
            console.log('Cannot convert!');
            break;
    }
};

let temp = 100;
let res = tempConvert('f2c', temp);
console.log('Convert result:', res);























