const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const port = 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//database
connectDB()

app.get('/', (req, res) => {
    res.send('hello');
})

app.listen(port, () => {
    console.log(`server is running ${port}`);
})


