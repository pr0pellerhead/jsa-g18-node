const fs = require('fs'); // filesystem module

fs.writeFile('iminja.txt', 'Janko, Stanko', (err) => {
    if(err) {
        console.log('ERROR:', err);
    }
});

// const fileWrite = () => {
//     return new Promise();
// };

// const fileWrite = () => {
//     return new Promise(() => {

//     });
// };

// const fileWrite = () => {
//     return new Promise((success, fail) => {

//     });
// };

// const fileWrite = () => {
//     return new Promise((success, fail) => {
//         fs.writeFile('iminja.txt', 'Janko, Stanko', (err) => {
//             if (err) {
//                 return fail(err);
//             }
//             return success();
//         });
//     });
// };

const fileWrite = (filename, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(filename, data, (err) => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
};

fileWrite('ocenki.txt', '4, 5, 3, 4, 4, 5, 3, 1, 2')
    .then(() => { // then == success
        console.log('SUCCESS!');
        return fileWrite('boi.txt', 'crvena, zholta, zelena');
    }).then(() => { // then == success
        console.log('SUCCESS 2!');
        return fileWrite('boi3.txt', 'crvena, crna, bela');
    }).then(() => { // then == success
        console.log('SUCCESS 3!');
    }).catch(err => { // catch == fail
        console.log(err);
    });

const main = async () => {
    try {
        await fileWrite('fajl1.txt', "FILE ONE!"); // 
        await fileWrite('fajl2.txt', "FILE TWO!"); // 
        await fileWrite('fajl3.txt', "FILE THREE!"); // 
    } catch(err) {
        console.log(err);
    }
};

main();

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

(async () => {
    try {
        let boi = await fileRead('boi.txt');
        console.log('BOI:', boi);
    } catch(err) {
        console.log(err);
    }
})();

let imenik = [
    {ime: 'Pero Perovski', telefon: 223305},
    {ime: 'Janko Jankovski', telefon: 223306},
    {ime: 'Stanko Stankovski', telefon: 223307}
];

(async () => {
    try {
        let imenikData = JSON.stringify(imenik); // convert object to string
        console.log(imenikData);
        await fileWrite('imenik.txt', imenikData);
        let dataString = await fileRead('imenik.txt');
        let data = JSON.parse(dataString); // convert string to object
        console.log(data);
    } catch(err) {
        console.log(err);
    }
})();

// self executing function
// (() => {

// })();