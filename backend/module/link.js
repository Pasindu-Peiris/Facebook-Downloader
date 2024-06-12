const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const linkSchema = new Schema({

    slink:{
        type:String,
    },
   
}, {timestamps:true})

const Link = mongoose.model('Link', linkSchema);
module.exports = Link;