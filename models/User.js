// const mongoose = require('mongoose');
// const mexp = require('mongoose-elasticsearch-xp');

// const UserSchema = new mongoose.Schema({
//     fname:{
//         type : String,
//         required : true
//     },
//     mname:{
//         type : String,
//     },

//     lname:{
//         type : String,
//         required : true
//     },

//     department:{
//         type : String,
//         required : true
//     },

//     email:{
//         type : String,
//         required : true
//     },

//     password:{
//         type : String,
//         required : true
//     },

//     date:{
//         type:Date,
//         default : Date.now
//     }
// },
// {
//     collection: 'authors'
// })

// UserSchema.plugin(mexp);

// const User = mongoose.model('User', UserSchema)

// module.exports = User;