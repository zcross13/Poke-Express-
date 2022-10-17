const express = require('express')
const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')

// Routes 

// Index 
router.get('/', dataController.index, viewController.index)
// New 
router.get('/new', viewController.new)
// Delete(Destroy)
router.delete('/:id', dataController.delete, viewController.redirectHome)
// Update
// Create
router.post('/', dataController.create, viewController.redirectHome)
// Edit
router.get('/:id', dataController.grabPokemon, viewController.edit)
// Show
router.get('/:id', dataController.grabPokemon, viewController.show)

module.exports = router 