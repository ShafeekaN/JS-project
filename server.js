const express = require('express')
const app = express()
const ejs = require('ejs')
const expressLayouts = require("express-ejs-layouts")

const port = 5000;
const indexRouter = require('./routes/index')

app.set('view engine', "ejs")
app.set('views', __dirname + "/views")
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

// mongodb password = Q9HgqyiR33RzqO6S

const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb+srv://credentials', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((error) => {
    console.error('MongoDB Connection Error:', error);
  });

const db = mongoose.connection;



// const schema = {
//   type: "object",
//   properties: {
//     TaskName: {type: "string"},
//     TaskGroup: {type: "string"},
//   },
//   required: ["TaskName","TaskGroup"],
//   additionalProperties: false
// }

app.use('/', indexRouter)

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});


