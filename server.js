const express = require('express')
const app = express();
require('dotenv').config();

const db = require('./model/index')
const Admin = db.Admin


app.use(express.json())

app.post('/post', async (req, res) => {
    try {
        const { title, content } = req.body;
        const newPost = new Admin({ title, content })
        await newPost.save()
        res.status(200).json({
            success: true,
            message: 'Data Send on Database '
        })
    } 
    catch (error) {
        console.log('error', error);
        res.status(500).json({
            message: "Internal Server Error", error
        })
    }
})



app.listen(process.env.PORT || 6000, () => {
    console.log(`Example app listening on port ${process.env.PORT || 6000}`)
})