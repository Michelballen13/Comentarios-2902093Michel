import { createContext, useEffect, useState  }
          from 'react'

//Crear contexto
const ComentariosContexto = createContext()
//crear provider: para que el contexto
// se reconozca en todo componente
export const ComentariosProvider = ({ children }) => {

    const [comments, setComments] = useState()
    const [ isLoading , setIsLoading ] = useState(true)

    useEffect(()=>{
      fetchComentarios()
    },[])

    /*funcion para traer los comentarios
    desde json server*/
    const fetchComentarios = async() => {
       const response = await fetch('http://localhost:5000/comentarios')
       const comentariosAPI = await response.json()
      setComments(comentariosAPI)
      setIsLoading(false) 
    }

    const addItem = async (newComentario) => {
      const response = await fetch('http://localhost:5000/comentarios',
        {method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(newComentario)
      })
      const data = await response.json()
      setComments([data , ...comments])
    }

    const borrarItem= async (id) =>{
        if(  window.confirm('¿Estas seguro que quieres borrar el comentario?')){
          const response = await fetch(`http://localhost:5000/comentarios/${id}`,
            {method: 'DELETE'
          })
          
          //asignar nuevo estado a comments
          //filter:para quitar los comentarios
          //cuyo id concuerde con el parametro id
          setComments(comments.filter((c)=> c.id !== id))     
        }  
      }


    return (
            <ComentariosContexto.Provider 
            value={{ 
              comments, isLoading , 
              setComments,
              setIsLoading,
              addItem,
              borrarItem 
            }}  >
        { children }
    </ComentariosContexto.Provider>)
}

export default ComentariosContexto



