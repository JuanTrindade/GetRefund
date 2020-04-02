const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ?
    '.env' :
    `.env.${process.env.NODE_ENV}`
});

const routes = require('./routes');

const errorHandler = require('./middlewares/errorHandler');
const routeNotFound = require('./middlewares/routeNotFound');

const app = express();

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, '..', 'public', 'uploads')));

app.use(routeNotFound);
app.use(errorHandler);

app.listen(process.env.PORT || 3001);
