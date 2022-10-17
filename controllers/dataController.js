const Pokemon = require('../models/pokemon')

const dataController = {
// Index 
    index(req,res,next){
        Pokemon.find({}, (err, foundPokemons) => {
            if(err){
                res.status(400).send({
                    msg: err.message, 
                })
                console.log('error')
            } else {
                res.locals.data.pokemons = foundPokemons
                next()
            }
        })
    },
// Delete(Destroy)
    delete(req,res,next){
        Pokemon.findByIdAndDelete(req.params.id, (err, deletedPokemon) => {
            if(err){
                console.error(err)
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.pokemon = deletedPokemon
                next()
            }
        })
    }, 
// Update
    update(req,res,next){

    },
// Create
    create(req,res,next){
        Pokemon.create(req.body, (err, createdPokemon) => {
            if(err){
                console.error(err)
                res.status(400).send({
                    msg:err.message
                })
            } else {
                res.locals.data.pokemon = createdPokemon
                next()
            }
        })
    },
// Edit
// Show
    grabPokemon(req,res,next){
        Pokemon.findById(req.params.id, (err, foundPokemon) =>{
            if(err){
                console.error(err)
                res.status(404).send({
                    msg: err.message,
                    output: 'Could not find a Pokemon with that ID'
                })
            } else {
                res.locals.data.pokemon = foundPokemon
                next()
            }
        })
    }, 
}

module.exports = dataController 