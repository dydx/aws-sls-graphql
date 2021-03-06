'use strict';

const awsServerlessExpress = require('aws-serverless-express');
const app = require('./src/app');
const server = awsServerlessExpress.createServer(app);

module.exports.main = (event, context) => awsServerlessExpress.proxy(server, event, context);
