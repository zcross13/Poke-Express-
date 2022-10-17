const React = require('react')

class Show extends React.Component{
    render(){
        const{name, image, _id} = this.props.pokemon
        return(
            <p>{name} <br/>
            {image}
            </p>
        )
    }
}

module.exports = Show 