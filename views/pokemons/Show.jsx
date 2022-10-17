const React = require('react')
const Default = require('../layouts/Default')


class Show extends React.Component {
    render() {
        const { name, image, _id } = this.props.pokemon
        return (
            <Default>
                <a href={`/pokemons/${_id}/edit`}>{`Edit ${name}`}</a>
                <p>{name} 
                <br />
                <img src={image}></img>
                </p>
            </Default>
        )
    }
}

module.exports = Show 