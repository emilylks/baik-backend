const express = require('express');
const bodyParser = require('body-parser');
var createError = require('http-errors');
var userRouter = require('./routers/User');
const port = 3000;
const app = express();

app.use(bodyParser.json())
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/user', userRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(port, () => console.log("Listening on port 3000"));
