const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');

const models = require('./models');
const schema = require('./schema/schema');

const app = express();
const PORT = process.env.PORT || 4000;

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

const DB_USER = 'antonio';
const DB_PASSWORD = 'password';
const MONGO_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@ds129333.mlab.com:29333/brandme`;
mongoose.connect(MONGO_URI, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
  console.log('Connected to MongoLab instance.');
});

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Running on port: ${PORT}!`);
  }
});

module.exports = app;
