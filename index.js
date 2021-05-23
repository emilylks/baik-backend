const express = require('express');
const bodyParser = require('body-parser');
var createError = require('http-errors');
var cors = require('cors');
var userRouter = require('./routers/User');
const port = 3000;
const app = express();

app.use(bodyParser.json())
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.append('Accept', ['*/*']);
    next();
});

app.use('/user', userRouter);
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use(function(req, res, next) {
  next(createError(404));
});


app.listen(port, () => console.log("Listening on port 3000"));
