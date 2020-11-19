const express = require('express');
const morgan = require('morgan');
const { db } = require('./models');


const app = express();
app.use(express.urlencoded({ extended: false }));



app.use(morgan("dev")) //What is the "dev" argument
app.use(express.static(__dirname + "/stylesheets"));


app.get("/", (req, res) => {
    res.send("SWAG SWAG SWAG");
});

db.authenticate()
  .then(() => {
    console.log('connected to the database');
})


app.listen(3000);

