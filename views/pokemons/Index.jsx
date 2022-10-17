const React = require('react')
const Default = require('../layouts/Default')

class Index extends React.Component {
    render() {
        const { pokemons } = this.props
        return (
            <Default>
                <ul>
                    {
                        pokemons.map((pokemon) => {
                            const { name, image, _id } = pokemon
                            return (
                                <li key={pokemon._id}>
                                    <a href={`/pokemons/${pokemon._id}`}>{name}</a>
                                    <form method='POST' action={`/pokemons/${pokemon._id}?_method=DELETE`}>
                                        <input type='submit' value={`Delete ${name}`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index