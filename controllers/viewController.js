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
    edit(req,res,next){
        res.render('pokemons/Edit', res.locals.data)
    },
// Show
    show(req, res, next){
        res.render('pokemons/Show', res.locals.data)
    }, 
// redirect Home 
    redirectHome(req, res, next){
        res.redirect(RESOURCE_PATH)
    },
// redirect Show 
    redirectShow(req,res, next){
        res.redirect(`${RESOURCE_PATH}/${req.params.id}`)
    }
}

module.exports = viewController