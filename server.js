require('dotenv').config()

//Require Modules 
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const app = express ()

/* START CONFIG*/

app.use(express.urlencoded({ extended: true}))
app.use((req,res,next) => {
    res.locals.data = {}
    next()
})
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', () => {
    console.log('connect to mongo')
})
/* END CONFIG */

/* Start Middleware */ 

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/pokemons', require('./controllers/routeController'))
/* End Middleware */ 



app.listen(3000, () => {
    console.log('Listening on Port 3000')
})