'use strict'
const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello again World!'))
module.exports = app