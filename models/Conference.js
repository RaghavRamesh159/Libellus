const mongoose = require('mongoose');
const mexp = require('mongoose-elasticsearch-xp');

const ConfSchema = new mongoose.Schema({
    author1:{
        type : String,
    },
    author2:{
        type : String
    },
    author3:{
        type : String
    },
    author4:{
        type : String
    },
    author5:{
        type : String
    },
    conferenceType:{type:String},
    conferenceName:{type:String},
    doi  : {type:String},
    isbn : {type:String},
    researchArea : { type:String},
    projectName  : { type:String},
    paperTitle   : { type:String},
    organiser    : { type:String},
    fromDate     : { type:Date},
    toDate       : { type:Date},
    venue        : { type:String},
    abstract     : { type:String},
    pages        : { type:String},
    keywords     : { type:Object},
    url          : { type:String},
    info  : {type:String}
},
    {
        collection: 'conference'
})

ConfSchema.plugin(mexp);

const Conf = mongoose.model('Conference', ConfSchema)

module.exports = Conf;