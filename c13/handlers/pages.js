const blogpost = require('../models/blogpost');

const main = async (req, res) => {
    try {
        let data = await blogpost.getAll();
        return res.render('main', {data});
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const singleBlogpost = (req, res) => {
    return res.render('single_blogpost');
};

const formAdd = (req, res) => {
    return res.render('form_add');
};

const formEdit = async (req, res) => {
    try {
        let data = await blogpost.getOne(req.params.id);
        return res.render('form_edit', {data});
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    main,
    singleBlogpost,
    formAdd,
    formEdit
};