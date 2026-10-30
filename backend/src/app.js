const express = require('express');
const postModel = require('./models/post.model');
const multer = require('multer')
const cors = require('cors');  


const uploadFile = require("./services/storage.service")

const app= express()
// Middleware to read JSON data
app.use(express.json());
app.use(cors())

const upload =multer({storage:multer.memoryStorage()}) 

// Middleware to read standard Form Data (x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true })); 

/* POST -> to creat  a post */
app.post("/create-post",upload.single('image'),async (req,res)=>{
    // console.log(req.body)
    // console.log(req.file)
     

    const result =await uploadFile(req.file.buffer)
    console.log(result)

    const newPost=await postModel.create({
        image:result.url,
        caption:req.body.caption})

    res.status(200).json({
        message:"post created succesfully",
        newPost
    })
})

// GET -> see all posts

app.get("/posts", async(req,res)=>{
    const posts= await postModel.find()

    res.status(201).json({
        message:"post fetch successfully",
        posts
    })

})



module.exports = app;