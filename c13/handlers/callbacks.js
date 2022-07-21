const blogpost = require('../models/blogpost');

const create = async (req, res) => {
    try {
        let data = {
            ...req.body,
            publish_date: new Date().toISOString()
        };
        await blogpost.create(data);
        res.redirect('/');
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const edit = async (req, res) => {
    try {
        let data = {
            ...req.body
        };
        await blogpost.updateOne(req.params.id, data);
        res.redirect('/');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const remove = (req, res) => {
    res.send('OK');
};

module.exports = {
    create,
    edit,
    remove
};