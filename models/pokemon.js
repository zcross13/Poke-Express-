const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    name: {
        type:String, 
        require: true
    },
    image: {
        type: String, 
        require: true
    }
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

module.exports = Pokemon