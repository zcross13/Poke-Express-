const React = require('react')
const Default = require('../layouts/Default')


class Edit extends React.Component{
    render(){
        const{name, image, _id} = this.props.pokemon
        return(
            <Default>
            <form action={`/pokemons/${_id}?_method=PUT`} method='POST'>
                <input name='name' defaultValue={name}></input>
                <input name='image' defaultValue={image}></input>
                <input type='submit'></input>
            </form>
            </Default>
        )
    }
}

module.exports = Edit 