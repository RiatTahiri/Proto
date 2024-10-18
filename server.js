let ejs = require('ejs');
let path = require('path');

const express = require("express");
const app = express();

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views/'));

app.get("/", (req, res) => {
  res.render('home')
});







const port = 3000
app.listen(port, ()=> console.log(`Dolphin app listening on port ${port}!`))
