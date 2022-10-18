const React = require('react')

class Default extends React.Component{
    render(){
        const {pokemon, title} = this.props 
        return(
            <html>
                <head>
                    <link rel='stylesheet' href='/css/app.css'></link>
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href='/pokemons'>Home Page</a>
                        <a href='/pokemons/new'>Create Ticket</a>
                        {pokemon? <a href={`/pokemons/${pokemon._id}/edit`}>{pokemon.name}Edit Page</a> : ''}
                        {pokemon? <a href={`/pokemons/${pokemon._id}`}>{pokemon.name}Show Page</a> : ''}
                    </nav>
                    <h1>{title}</h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default