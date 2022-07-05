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

const render = async (page, data) => {
    let content = await fileRead(`./${page}.html`);
    return content.replace('{{res}}', data);
};

const pages = {
    '/': async (req, res) => {
        if (req.query.op) console.log(req.query.op);
        if (req.query.a) console.log(req.query.a);
        if (req.query.b) console.log(req.query.b);
        let content = await fileRead('./index.html');
        res.end(content);
    },
    '/home' : (req, res) => {
        res.end('HOME2!');
    },
    '/users': (req, res) => {
        res.end('USERS!');
    },
    '/plus': async (req, res) => {
        let result = `${Number(req.query.a) + Number(req.query.b)}`;
        res.end(await render('index', result));
    },
    '/minus': async (req, res) => {
        let result = `${Number(req.query.a) - Number(req.query.b)}`;
        res.end(await render('index', result));
    },
    '/delenje': async (req, res) => {
        let result = `${Number(req.query.a) / Number(req.query.b)}`;
        res.end(await render('index', result));
    },
    '/mnozenje': async (req, res) => {
        let result = `${Number(req.query.a) * Number(req.query.b)}`;
        res.end(await render('index', result));
    },
};

const server = http.createServer((req, res) => {
    // query string parameters // GET parameters
    // http://localhost:8080/users?a=10&b=5  
    // /users?a=10&b=5
    // /users                                     a=10&b=5
    let [path, _] = req.url.split('?');
    if (pages[path]) {
        const qs = url.parse(req.url, true).query;
        req.query = qs;
        pages[path](req, res);
    } else {
        res.end('');
    }
});

server.listen(8080);