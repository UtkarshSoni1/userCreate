const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongodbpractice');

const userSchema = mongoose.Schema({
    name: String,
    email : String,
    password : String,
    image : {
        type : String,
        default : "/images/image.png"
    },
    posts : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'post'
    }]
});

module.exports = mongoose.model("user",userSchema);