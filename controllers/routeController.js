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
// Update
// Create
router.post('/', dataController.create, viewController.redirectHome)
// Edit
// Show
router.get('/:id', dataController.grabPokemon, viewController.show)

module.exports = router 