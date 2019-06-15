const express = require('express');
const bodyParser = require("body-parser");
const root = require('./modules/index');

const app = express();


  

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', root);

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log(`
  ------------------------------------
      Server running on port ${port}    
  ------------------------------------
  `);
});

