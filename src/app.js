const express = require('express')
const chalk = require('chalk')

const app = express();
const port = process.env.PORT || 3000;

app.get('', (req, res) => {
    res.render('index', {
        title: 'pr-one'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        message: '404 Placeholder'
    })
})

// Start server
app.listen(port, () => {
    console.log(chalk.greenBright('Server is up on port ' + port))
})

