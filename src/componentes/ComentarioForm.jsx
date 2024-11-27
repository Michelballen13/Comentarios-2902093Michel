import { React, useState, useContext } from 'react'
import Card from './Card'
import ComentarioCalificacion from './ComentarioCalificacion'
import ComentariosContexto from '../contexto/ComentariosContexto'

const ComentarioForm = () => {
    const [text, setText] = useState('')
    const [calificacion, setCalificacion] = useState(0)
    const { addItem } = useContext(ComentariosContexto)

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Crear el objeto comentario
        const newComentario = {
            comentario: text,
            calificacion: calificacion
        }
        addItem(newComentario)
        window.alert('Se agregó correctamente el comentario')
        setText('')
        setCalificacion(0)
    }

    return (
        <Card>
            <form action='' onSubmit={handleSubmit}>
                <ComentarioCalificacion select={(calificacion) => { setCalificacion(calificacion) }} />
                <div className='input-group'>
                    <input type='text' value={text} onChange={handleTextChange} placeholder='Ingrese su comentario aquí' />
                    <button type="submit">
                        Guardar
                    </button>
                </div>
            </form>
        </Card>
    )
}

export default ComentarioForm