const React = require('react')

class Default extends React.Component{
    render(){
        const {pokemon} = this.props 
        return(
            <html>
                <head>
                    <link rel='stylesheet' href='/css/app.css'></link>
                    <title>Poke Express</title>
                </head>
                <body>
                    <nav>
                        <a href='/pokemons'>Home Page</a>
                        <a href='/pokemons/new'>Create Ticket</a>
                        {pokemon? <a href={`/pokemons/${pokemon._id}/edit`}>Edit Page</a>: ''}
                        {pokemon? <a href={`/pokemons/${pokemon._id}`}>Show Page</a>: ''}
                    </nav>
                    <h1>Poke Express</h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default