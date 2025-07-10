const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

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