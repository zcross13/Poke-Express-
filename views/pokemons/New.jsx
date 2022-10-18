const React = require('react')
const Default = require('../layouts/Default')


class New extends React.Component{
    render(){
        return(
            <Default title='Create A Ticket'>
            <body>
                <form method='POST' action='/pokemons'>
                    Name:<input name='name'></input><br/>
                    Picture:<input name='image'></input>
                    <input type='submit'></input>
                </form>
            </body>
            </Default>
        )
    }

}


module.exports = New 