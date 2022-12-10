const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const apiUsersRouter = require('./routes/apiUsersRouter').router;
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/', apiUsersRouter);

app.listen(3000, () => {
    console.log('Success running 3000');
});
module.exports = app;