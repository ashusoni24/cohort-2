const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username, 
        password
    })
    res.json({
        message: "User created successfully"
    })
});
router.get('/courses',async function(req,res){
    const response = await Course.find({});
    res.json({
        courses : response
    })
})
router.post('/courses/:courseId',userMiddleware,async function(req,res){
    const cousreeId = req.params.courseId;
    const title = req.body.title;
    const username = req.headers.username;
    await User.updateOne({
       username : username,
    },{
        "$push":{
            purchasedCourses:cousreeId
        }
    })
    res.json({
        message : "purchased complete"
    })
})
router.get('/purchasedcourses', userMiddleware, async function(req,res){
   const user = await User.findOne({
        username : req.headers.username
   })
   console.log(user.purchasedCourses)
   const courses = await Course.find({
       _id : {
        "$in" : user.purchasedCourses
       }
   });
   res.json({
    courses : courses
   })
})

module.exports = router;