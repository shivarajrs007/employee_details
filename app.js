const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path');
// const expressLayouts = require('express-ejs-layouts');
// const router = express.Router();
const ejs = require('ejs');





const app = express()
app.use(bodyParser.urlencoded({ extended: true }))


// EJS
// view engine setup
// view engine setup
app.set('views', './views');
app.set('view engine', 'ejs');


//mongo db connection
const db = require('./models/Config').dbUrl;
const Employee = require('./models/empSchema');

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => {
        console.log("Db connection sucessfull")
    })
    .catch(err => console.log("db connection  error", err)
    )

app.get('/', function (req, res) {

    res.render('welcome');

});


app.post('/register', (req, res) => {
    let elements = {
        Name: req.body.name,
        Email: req.body.email,
        Address: req.body.address,
        Id: req.body.number
    }

    let emp = new Employee(elements)
    emp.save()
        .then(doc => {
            console.log(doc)
        })
        .catch(err => {
            console.error(err)
        })
    res.render('welcome', {
        msg: 'Register Successfully'
    })

})



// emp.save()
//     .then(doc => {
//         console.log(doc)
//     })
//     .catch(err => {
//         console.error(err)
//     })



const port = process.env.port || 4000;

app.listen(port, console.log(`localhost ${port}`));