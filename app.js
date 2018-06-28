'use strict'
const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello World! - v1.1'))
module.exports = app