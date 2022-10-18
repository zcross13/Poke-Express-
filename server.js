require('dotenv').config()

//Require Modules 
const express = require('express')
const methodOverride = require('method-override')
const db = require('./models/db')

const app = express ()

/* START CONFIG*/

app.use(express.urlencoded({ extended: true}))
app.use((req,res,next) => {
    res.locals.data = {}
    next()
})
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')
db.once('open', () => {
    console.log('connected to Mongo')
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