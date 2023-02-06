const bodyParser = require('body-parser')
const ejs = require('ejs')
const env = process.env.NODE_ENV? process.env.NODE_ENV: 'production'
const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const port = 3000
const distPath = env === 'production'? 'dist': 'test'

const project_name = require('./project.config').project_name

app.set('view engine', 'html')
app.engine('html', ejs.__express)
app.set('views', path.resolve(__dirname, distPath, 'pages'))
app.use(`/${project_name}/dist`, express.static(path.resolve(__dirname, distPath)))

app.get('/', (req, res) => {
	res.send('浮夸的控制台Server已经运行了')
})

app.get(`/${project_name}`, (req, res) => {
	res.redirect(`/${project_name}/real`)
})

app.get(`/${project_name}/real`, (req, res) => {
    res.render('index_real.html')
})

app.get(`/${project_name}/demo`, (req, res) => {
    res.render('index_demo.html')
})

app.get(`/${project_name}/data/static`, (req, res) => {
    fs.readFile(path.resolve(__dirname, 'data/static.json'), 'utf-8', (err, data) => {
        if (err) throw err
        res.send(data)
    })
})

app.get(`/${project_name}/data/demo`, (req, res) => {
    fs.readFile(path.resolve(__dirname, 'data/demo.json'), 'utf-8', (err, data) => {
        if(err) throw err
        res.send(data)
    })
})

app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  	console.log(`浮夸的控制台已经在 ${port} 端口以 ${env} 模式运行了`)
})

function logErrors(err, req, res, next) {
	console.error(err.stack)
	next(err)
}
function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' })
    } else {
        next(err)
    }
}
function errorHandler(err, req, res, next) {
    res.status(500)
}