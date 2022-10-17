const RESOURCE_PATH = '/pokemons'

const viewController = {
// Index 
    index(req,res, next){
        res.render('pokemons/Index', res.locals.data)
    },
// New 
    new(req,res,next){
        res.render('pokemons/New')
    }, 
// Edit
// Show
    show(req, res, next){
        res.render(`pokemons/Show`, res.locals.data)
    }, 
// redirect Home 
    redirectHome(req, res, next){
        res.redirect(RESOURCE_PATH)
    }
// redirect Show 
}

module.exports = viewController