const express = require("express");
const adminMiddleware = require("../middlewares/admin");
const { Admin, Course, User } = require("../db");
const router = express.Router();
const jwt = require("jsonwebtoken"); 
const jwt_secret = require("../index");

router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists
    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        message: 'Admin created successfully'
    })
    
});
router.post('/signin',async function(res,req){
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.find({
        username,
        password
    })
    if(user){
        const token = jwt.sign({
            username
        },jwt_secret);
        res.json({
            token
        })
    }
    else{
        res.status(411).json({
            message  : "incorrect email and pass"
        })
    }
   

})

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});
router.get('/courses',adminMiddleware,async function(req,res){
   const response = await Course.find({});
   res.json({
    courses : response
   })


})

module.exports = router;