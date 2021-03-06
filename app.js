const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require("path");

const app = express();
const PORT = process.env.PORT;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname ,"/public/")));

app.set("views","./src/views");
app.set("view engine", "ejs")

app.get("/", (req,res) =>{

    res.render('index',{username: 'Snack', customers: ["Coffee","Mango","NaTo"]});

})

app.listen(PORT, ()=>{
    debug("Listerning on port" + chalk.green(" : " +PORT));
})