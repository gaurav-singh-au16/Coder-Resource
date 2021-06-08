require("dotenv").config()
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const mongoose = require('mongoose')

const {DATABASE} = process.env

mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err) => {
    if (err) throw err
    console.log('DataBase Connected')
})

const homeRoutes = require("./routes/home")
const askQuestionRoutes = require("./routes/askQuestion")
const postResourceRoutes = require("./routes/postResource")

app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: false
}));
app.set('view engine', '.hbs');

app.use(express.static("style"))
app.use(express.static("script"))

app.use("", homeRoutes)
app.use("", askQuestionRoutes)
app.use("", postResourceRoutes)

app.listen(process.env.PORT || 3000, () => {
    console.log("Server Started @ 3000")
})