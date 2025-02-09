
const fs = require('fs');

const data = new Date();
const timestamp = data.getTime();

const logger = () => (req, res, next) => {
    const log = `${req.method} ${req.url} ${req.headers['x-forwarded-for'] ||  req.connection.remoteAddress}`
    console.log(log)
    next()
  }
  
  module.exports = logger