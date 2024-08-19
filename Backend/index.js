const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cookieParser=require('cookie-parser')
const bodyParser=require('body-parser')
const cors = require('cors')
const path = require('path');
require('dotenv').config();
const port = process.env.PORT || 5000;
// parse option
app.use(express.json())
app.use(cors(
    {
        origin:'http://localhost:5173',
        credentials:true,
    }
))
app.use(express.static(path.join(__dirname, '../Frontend/dist')));
app.use(cookieParser())
app.use(bodyParser.json({limit:'10mb'}));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}))

//Routes
const blogRoute = require('./src/routers/blog.route')
const commentRoute = require('./src/routers/comment.route')
const userRoute=require('./src/routers/auth.user.route')

app.use("/api/blogs", blogRoute);
app.use("/api/comments",commentRoute);
app.use("/api/auth",userRoute);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/dist', 'index.html'));
  });

async function main() {
    await mongoose.connect(process.env.MONGODB_URL);

    app.get('/', (req, res) => {
        res.send("Welcome!");
    })
}

main()
    .then(() => {
        console.log('MongoDb is connected');
    })
    .catch((err) => {
        console.log('Error' + err.message);
    })

app.listen(port, () => {
    console.log(`Server serve at port ${port}`);
})