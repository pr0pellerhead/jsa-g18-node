const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://dev:4TMVLxjKt5XPPo7R@cluster0.c3iyx.mongodb.net/baza1?retryWrites=true&w=majority';

const connect = (connectionString) => {
    return new Promise((success, fail) => {
        mongoose.connect(connectionString, err => {
            if (err) return fail(err);
            console.log('Connected successfully to DB!');
            return success();
        });
    })
};

const Studenti = mongoose.model(
    'studenti', // model name
    {
        ime: String,
        prezime: String,
        prosek: Number
    },
    'studenti' // collection name
);

connect(connectionString)
    .then(() => {
        return Studenti.find({});
    })
    .then(res => {
        console.log(res);
        let s = new Studenti({
            ime: "Ivan",
            prezime: "Ivanovski",
            prosek: 7.3
        });
        return s.save();
    })
    .then(res => {
        console.log('SAVED!', res);
        return Studenti.updateOne({ _id: '62d6fe4cfc16f51c30966767'}, {prezime: 'Petrovski'});
    })
    .then(res => {
        console.log('UPDATE FINISHED!', res);
        // Studenti.deleteMany()
        return Studenti.deleteOne({ _id: '62d70abbceedb50c0cd1af9a'});
    })
    .then(res => {
        console.log('DELETED RECORD!');
        return Studenti.find({ime: 'Ivan'}, {prezime: 1});
    })
    .then(res => {
        console.log('FILTERED RESULTS:', res);
        return Studenti.find({ prosek: {'$gte': 9} }, { prezime: 1, prosek: 1 }).sort({prezime: 1});
    })
    .then(res => {
        console.log('FILTERED RESULTS 2:', res);
    })
    .catch(err => {
        console.log(err);
    });

// **********************************************************************
// **********************************************************************
// **********************************************************************


/*

1. Додадете минимум 20 уникатни записи (документи) во колекцијата studenti
2. секој запис треба да се состои од следниве податоци
{
    ime: String,
    prezime: String,
    prosek: Number,
    lokacija: {
        grad: String,
        drzava: String
    }
}
3. извршете ги следниве барања (queries)

- Топ 5 студенти според просек. Приказ на име, презиме и просек.
- Најлоши 3 студенти од Скопје
- Најдобри 10 студенти од Скопје
- Најдобри 3 студенти од Македонија. Приказ на име, презиме и град.
- Најлоши 5 студенти од Битола. Приказ на презиме и просек
- Приказ на студенти од Битола подредени по презиме
- Приказ на студенти од Куманово подредени по име
- Приказ на најдобриот студент од Македонија





*/