const express = require('express');
const cors = require('cors');
const { router } = require('./app/Route/ProductRoute.js');
const connectDb = require('./app/config/dbConnect.js');
require('dotenv').config();

const port = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/note", router);

connectDb();

app.listen(port, () => {
    console.log(`App is listening on Port: ${port}`);
});
