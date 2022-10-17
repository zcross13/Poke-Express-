const React = require('react')

class New extends React.Component{
    render(){
        return(
            <>
            <body>
                <form method='POST' action='/pokemons'>
                    Name:<input name='name'></input><br/>
                    Picture:<input name='image'></input>
                    <input type='submit'></input>
                </form>
            </body>
            </>
        )
    }

}


module.exports = New 