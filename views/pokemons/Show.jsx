const React = require('react')
const Default = require('../layouts/Default')


class Show extends React.Component {
    render() {
        const { name, image, _id } = this.props.pokemon
        return (
            <Default title={`${name} Show Page`} pokemon={this.props.pokemon}>
                <div id='image'>
                    <img src={image}></img>
                </div>
            </Default>
        )
    }
}

module.exports = Show 