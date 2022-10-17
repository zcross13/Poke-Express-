const React = require('react')

class Index extends React.Component{
    render(){
        const {pokemons} = this.props 
        return(
            <>
                <h1>PokeExpress</h1>
                <ul>
                    {
                        pokemons.map((pokemon) =>{
                            const{name, image, _id} = pokemon
                            return(
                                <li key={pokemon._id}>
                                    <a href={`/pokemons/${pokemon._id}`}>{name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
}

module.exports = Index