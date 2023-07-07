const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const cors = require('cors');
const ejs = require('ejs');
require('dotenv').config();


let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = '100HoursProject',
    collection
    
MongoClient.connect(dbConnectionString)
    .then(client =>{
        console.log(`Connected to Database`)
        db = client.db(dbName)
        collection = db.collection('todos')
    })

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.get('/', async (request, response) => {
    try {
        response.render('index.ejs')
    } catch (error) {
        response.status(500).send({message: error.message})
    }
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`)
})