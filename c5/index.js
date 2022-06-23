const fs = require('fs');

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
        let dataString = await fileRead('studenti.json');
        let studenti = JSON.parse(dataString);

        console.log(studenti);

        let sortProsek = [...studenti.sort((a, b) => {
            if(a.prosek > b.prosek) {
                return -1;
            } else if(a.prosek < b.prosek) {
                return 1;
            }
            return 0;
        })];

        let sortIme = [...studenti.sort((a, b) => {
            if (a.ime < b.ime) {
                return -1;
            } else if (a.ime > b.ime) {
                return 1;
            }
            return 0;
        })];

        let najvisokProsek = sortProsek[0];
        let najnizokProsek = sortProsek[sortProsek.length - 1];

        let sredenProsek = studenti.reduce((prev, cur) => {
            return cur.prosek + prev;
        }, 0);

        let cities = {}; // {"Los Angeles": 8.2, "New York": 9.3}...

        for(let s of studenti) {
            if(!cities[s.grad]) { // cities["Los Angeles"]
                cities[s.grad] = s.prosek; // cities["Los Angeles"] = 8.2
            }
            cities[s.grad] = (cities[s.grad] + s.prosek) / 2;
        }

        let citiesArray = [];

        for(let c in cities) {
            citiesArray.push({
                grad: c,
                prosek: cities[c]
            });
        }

        citiesArray.sort((a, b) => {
            if(a.prosek > b.prosek) {
                return -1;
            } else if(a.prosek < b.prosek) {
                return 1
            }
            return 0;
        });

        console.log(sortProsek);
        console.log(sortIme);
        console.log(najvisokProsek);
        console.log(najnizokProsek);
        console.log(sredenProsek / studenti.length);
        console.log(citiesArray);
        console.log(citiesArray[0]);
        console.log(citiesArray[citiesArray.length - 1]);

    } catch(err) {
        console.log(err);
    }
})();


