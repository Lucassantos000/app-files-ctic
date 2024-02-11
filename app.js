require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));


const userRouter = require('./routes/user');

app.use(`/${process.env.NOME_APP}/user`, userRouter);

app.listen(process.env.PORT_APP, () => {
    console.log(`Server is running on port ${process.env.PORT_APP}`);
})