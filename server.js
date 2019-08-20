require('dotenv').config

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const stripe = require('express-jwt')
const jwksRsa = require('jwks-rsa')

const PORT = process.env.PORT || 6565
const app = express()

app.get('/test', (req, res, next) => {
    res.json ({
        message: 'Test route'
    })
})

app.use(notFound)
app.use(errorHandler)

function notFound(req, res, next) {
    res.status(404).send({ error: 'Not found', status: 404, url: req.originalUrl })
}

function errorHandler (err, req, res, next) {
    console.error('ERROR', err)
    const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
    res.status(500).send({ error: err.message, stack, url: req.originalUrl})
}

app.listen(PORT, ()=> {
    console.log(`Back to get wrecked on ${PORT}`)
})