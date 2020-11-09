const express = require("express");
const app = express();
require("dotenv").config();
const { db } = require("./Models");

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api',require('./Routes/index'))

db.sync()
  .then(
    app.listen(PORT, () => {
      console.log(`here is URL http://localhost:${PORT}/`);
    })
  )
  .catch((err) => console.log(err.message));
