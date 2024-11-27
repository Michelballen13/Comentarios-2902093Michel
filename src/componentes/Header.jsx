import { React , useState} from 'react'

function Header ({titulo, autor, centro, ficha}) {

    const [ title , setTitle ] = useState(titulo)
    const [ aut , setAut] = useState(autor)

    const headerStyles = {
        backgroundColor: 'rgba(0,0,0,0.4)',
        color: '#045abc',
    },
    titleStyles = {
        color: "green"
    },
    autorStyles = {
        color: 'blue'
    },
    centroStyles = {
        color: 'red'
    },
    fichaStyles = {
        color: 'yellow'
    }




  return (
    <header style={headerStyles}>
        <div className='container'>
            <p style={titleStyles}>{ title }</p>
            <p style={autorStyles}>Autor: { aut } </p>
            <p style={fichaStyles}>Ficha: {ficha}</p>
        </div>
    </header>
  )
}

export default Header