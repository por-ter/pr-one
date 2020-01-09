const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'pr-one'

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error) {
        return console.log(error, 'Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // database interaction.
})