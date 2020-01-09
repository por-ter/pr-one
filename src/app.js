const path = require('path')
const express = require('express')
const hbs = require('hbs')
const request = require('request')
const chalk = require('chalk')

const app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to server
app.use(express.static(publicDirPath))

// # render login (index) page
app.get('', (req, res) => {
    res.render('index', {
        title: 'Login',
        benutzer: 'David Porter' // to do - make dynamic *****
    })
})


// # render zeiterfass table page
app.get('/zeiterfass', (req, res) => {
    res.render('zeiterfass', {
        title: 'Zeiterfassung',
        benutzer: 'David Porter' // to do - make dynamic **
    })
})


// Start server
app.listen(port, () => {
    console.log(chalk.blueBright('Server is up on port ' + port))
})