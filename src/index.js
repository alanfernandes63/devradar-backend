const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect("mongodb://localhost:27017/oministack10",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333)