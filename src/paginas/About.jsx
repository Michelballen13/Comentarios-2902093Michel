import React from 'react'
import Card from '../componentes/Card'

const About = ({titulo, autor, ficha}) => {
  return (
    <Card>
        <div className='about'>
            <h1>Acerca de este proyecto</h1>
            <h3>Esta es una app en react </h3>
            <p><b>titulo:</b> {titulo}</p>
            <p><b>autor:</b> {autor}</p>
            <p><b>ficha:</b> {ficha}</p>
            <p><b>Version:</b>1.0.0</p>
            <p>
                <a href="/">Volver a Página Principal</a>
            </p>
        </div>
    </Card>
  )
}

export default About