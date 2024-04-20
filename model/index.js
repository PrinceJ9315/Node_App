const mongoose = require("mongoose");
// const URL = "mongodb+srv://test12345:OQqBnKzmV2YOkMkK@cluster0.nokgtgy.mongodb.net/testt";
const URL = "mongodb://127.0.0.1:27017/My-Server";

const connectToMongoose = async () => {
     try {
         await mongoose.connect(URL)
         console.log('Connected to MongoDB');
     } catch (error) {
         console.log('Error Connecting TO MongoDB', error.message);
 
     }
}

connectToMongoose()

module.exports = {
     Admin: require('../model/Admin')
};