const React = require('react')

class Edit extends React.Component{
    render(){
        const{name, image, _id} = this.props.pokemon
        return(
            <form action={`/pokemons/${_id}?_method='PUT`} method='POST'>
                <input name='name' defaultValue={name}></input>
                <input name='image' defaultValue={image}></input>
                <input type='submit'></input>
            </form>
        )
    }
}

module.exports = Edit 