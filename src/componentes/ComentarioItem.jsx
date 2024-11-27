import {React, useState, useContext} from 'react'
import Card from './Card'
import {FaTimes} from 'react-icons/fa'
import ComentariosContexto from '../contexto/ComentariosContexto'

const ComentarioItem = ({comentario}) => {
  


    const [comment, setComment ] = useState(comentario.comentario)
    const [rating, setRating] = useState(comentario.calificacion)
    const [identificacion, setIdentificacion] = useState(comentario.id)
    
    const { borrarItem } = useContext(ComentariosContexto)  

    return (
      <Card reverse={true}>
          <div className='num-display'>{rating}</div>
          <button className='close' onClick={ () => {borrarItem(comentario.id) }}>  
            <FaTimes color='green'/>
          </button>
          <div className='text-display'>{comment}</div>
      </Card>
    )
}

export default ComentarioItem