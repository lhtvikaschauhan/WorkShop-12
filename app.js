const express = require ('express');
const bodyParser = require('body-parser');
const user = require('./router/user.route');
const db = require('./db.js');
const app = express();
const port = 3000;

app.use(bodyParser.json({limit: '25mb'}));
app.use(bodyParser.urlencoded({limit: '25mb', extended: true}));
app.use('/user', user.getRouter());

app.listen(port, () => {
    console.log(`server is running ${port}`);
});