const React = require('react')

class Show extends React.Component {
    render() {
        const { name, image, _id } = this.props.pokemon
        return (
            <div>
                <a href='/pokemons/:id/Edit'></a>
                <p>{name} 
                <br />
                {image}
                </p>
            </div>
        )
    }
}

module.exports = Show 