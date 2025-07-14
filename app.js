const express = require('express');
require('dotenv').config();
const app = express();
const path = require('path');
const fs = require('node:fs');
const usermodel = require('./models/user');
const postmodel = require('./models/post');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const { hash } = require('node:crypto');
const { type } = require('node:os');
const multer = require('multer')
const crypto = require('node:crypto')

const { storage } = require('./config/multer-config'); 
const upload = multer({ storage: storage });

app.use(cookieParser());


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine','ejs');

const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.redirect('/login'); 
    }

    const decoded = jwt.verify(token, "secret");

    const user = await usermodel.findById(decoded.id);
    if (!user) {
      return res.redirect('/login'); 
    }

    req.user = user; 
    next();
  } catch (err) {
    return res.redirect('/login'); 
  }
};

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/home/:id',isLoggedIn, async (req, res) => {
    let users = await usermodel.find().populate("posts").exec();
    let mainUser = await usermodel.findOne({_id : req.params.id});

    res.render('home',{users,mainUser});
   
});

app.post('/create',(req, res) => {
    let {name, email,password} = req.body;
    bcrypt.genSalt(10,(err,salt) => {
        bcrypt.hash(password,salt, async (err,hash) => {

            let CreatedUser = await usermodel.create({
                name,
                email,
                password : hash,
                
            });
            
            res.redirect(`/home/${CreatedUser._id}`);
            
        });
    });
    
})

app.get('/show',async (req, res) => {
    let CreatedUsers = await usermodel.find();
    
    res.render('show',{users : CreatedUsers});
});

app.get('/login',(req, res) => {
    res.render('login');
});

app.post('/login',async (req, res) => {
    let {email, password} = req.body;
    let user = await usermodel.findOne({email : email});
    bcrypt.compare(password,user.password,(err,result) => {
        
        if(result) {

            const token = jwt.sign({ id: user._id.toString() }, "secret");
            res.cookie("token",token);
            res.redirect(`/home/${user._id}`);
        }
        else res.send("no you cant login");
    })
});

app.get('/logout', (req, res) => {
    res.cookie("token","");
    res.redirect('/login');
})

app.get('/delete-all', async (req, res) => {
    await usermodel.deleteMany({});
    res.send("All users deleted.");
});

app.post('/edit/:id', isLoggedIn, upload.single('newimage'), async (req, res) => {
    const { newname, newemail } = req.body;
    const newimage = req.file ? `/images/uploads/${req.file.filename}` : undefined;

    const updateData = {
        name: newname,
        email: newemail
    };

    if (newimage) {
        updateData.image = newimage;
    }

    await usermodel.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.redirect(`/profile/${req.params.id}`);
});


app.get('/edit/:id',isLoggedIn,async (req, res) => {
    let previousUser = await usermodel.findOne({_id : req.params.id});
    res.render('edit',{user : previousUser});
});

app.get('/delete/:id',isLoggedIn,async (req, res) => {
    let user = await usermodel.findOneAndDelete({_id : req.params.id});
    
    res.redirect('/show');
});

app.get('/post/:id',isLoggedIn,async (req, res)=> {
    let user = await usermodel.findOne({_id : req.params.id});
    
    res.render('post', { user });
});

app.post('/post/:id',isLoggedIn,async (req,res ) => {
    let {content} = req.body;
    let post = await postmodel.create({
        content,
        author : req.params.id
    });
    await usermodel.findByIdAndUpdate(req.params.id, {
    $push: { posts: post._id }});
    
    res.redirect(`/profile/${req.params.id}`);
});

app.get('/like/:id', isLoggedIn, async (req, res) => {
    const postId = req.params.id;
    const userId = req.user._id;

    try {
        const post = await postmodel.findById(postId);

        if (!post) {
            return res.status(404).send("Post not found");
        }

        const alreadyLiked = post.likes.includes(userId);

        if (alreadyLiked) {
            
            post.likes.pull(userId);
        } else {
           
            post.likes.push(userId);
        }

        await post.save();

        res.redirect(`/home/${post.author}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});


app.get('/profile/:id', isLoggedIn, async (req, res) => {
    const user = await usermodel.findById(req.params.id).populate({
        path: 'posts',
        populate: {
            path: 'likes author',
            model: 'user'
        }
    });
    res.render('profile', { user });
});

app.get('/profile-others/:id',async (req, res) => {
    let user = await usermodel.findOne({_id : req.params.id}).populate("posts").exec();
    res.render('profileOthers',{user});
})

app.listen(process.env.PORT,() => {
    console.log("server running");
});