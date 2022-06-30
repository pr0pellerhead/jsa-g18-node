// // 

// let op = 'minus';

// if(op === 'plus') {
//     console.log('plus');
// }

// if (op === 'minus') {
//     console.log('minus');
// }

// if (op === 'delenje') {
//     console.log('delenje');
// }

// //  ...

// if (op === 'plus') {
//     console.log('plus');
// } else if (op === 'minus') {
//     console.log('minus');
// } else if (op === 'delenje') {
//     console.log('delenje');
// }

// // ...

// switch(op) {
//     case 'plus': 
//         console.log('plus');
//         break;
//     case 'minus':
//         console.log('minus');
//         break;
//     case 'delenje':
//         console.log('delenje');
//         break;
// }

// let result = {
//     plus: () => {
//         console.log('plus');
//     },
//     minus: () => {
//         console.log('minus');
//     },
//     delenje: () => {
//         console.log('delenje');
//     },
// };

// result[op]();


// const a = {
//     ime: 'Pero',
//     prezime: 'Perovski',
//     'horoskopski znak': 'frizhider',
//     apsolvent: false,
//     godina_na_studii: 10,
//     akcija: () => {
//         console.log('PEROOOOOOO!!!');
//         return 'PEROVSKIIIIII!!!!';
//     }
// };

// console.log(a.ime, a['ime']);
// console.log(a.prezime, a['prezime']);

// let prop = 'ime';
// console.log(a[prop]);

// console.log(a['horoskopski znak']);
// console.log(a.apsolvent);
// console.log(a.godina_na_studii);

// console.log(a.akcija());















const http = require('http');
const fs = require('fs');
const url = require('url');

const fileRead = (filename) => {
    return new Promise((success, fail) => { // resolve, reject
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(data);
        });
    });
};

const pages = {
    '/': async (req, res) => {
        const qs = url.parse(req.url, true).query;

        console.log(qs);

        if (qs.op) console.log(qs.op);
        if (qs.a) console.log(qs.a);
        if (qs.b) console.log(qs.b);

        let content = await fileRead('./index.html');
        res.end(content);
    },
    '/home' : (req, res) => {
        res.end('HOME2!');
    },
    '/users': (req, res) => {
        res.end('USERS!');
    }
};

const server = http.createServer((req, res) => {
    // query string parameters // GET parameters
    // http://localhost:8080/users?a=10&b=5  
    // /users?a=10&b=5
    // /users                                     a=10&b=5
    let [path, _] = req.url.split('?');
    if (pages[path]) {
        pages[path](req, res);
    } else {
        res.end('');
    }
});

server.listen(8080);