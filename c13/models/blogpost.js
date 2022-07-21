const mongoose = require('mongoose');

const Blogpost = mongoose.model(
    'blogpost',
    {
        title: String,
        content: String,
        publish_date: Date
    },
    'blogposts'
);

const create = async (data) => {
    let bp = new Blogpost(data);
    return bp.save();
};

const getAll = async () => {
    return Blogpost.find({}).sort({publish_date: -1});
};

const getOne = async (id) => {
    return Blogpost.findOne({_id: id});
};

const updateOne = async (id, data) => {
    return Blogpost.updateOne({_id: id}, data);
};

const remove = async (id) => {
    return Blogpost.deleteOne({_id: id});
};

module.exports = {
    create,
    getAll,
    getOne,
    updateOne,
    remove
};