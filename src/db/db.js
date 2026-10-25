const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://askajay025:r0ZwbCb4nFaDUUde@cluster0.jdlef3e.mongodb.net/project1")
    console.log("connected to DB")
}

module.exports = connectDB;
