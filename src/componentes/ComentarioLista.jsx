import {React , useContext } from 'react'
import ComentariosContexto from '../contexto/ComentariosContexto'
import ComentarioItem from './ComentarioItem'
import { AnimatePresence, motion } from 'framer-motion'


function ComentarioLista () {

      const {comments , isLoading} = 
            useContext(ComentariosContexto) 
      

      if ( !isLoading && (comments.length === 0 || !comments ) ) {
            return <p>No hay comentarios</p>
      } 
      
            
      return isLoading?  
      (<h2> Cargando... </h2>) 
      :
      (
            <div className='comments'>
                  <AnimatePresence>
                        <ul>
                        { 
                              comments.map( comentario => 
                                    <motion.div
                                          key={comentario.id}
                                          initial={{opacity: 0}}
                                          animate={{opacity: 1}}
                                          exit={{ opacity:0 }}
                                    >
                                          <ComentarioItem 
                                                      key={comentario.id}
                                                      comentario={comentario}
                                                     
                                          />       
                                    </motion.div>
                                   
                              )
                        }
                        </ul>
                  </AnimatePresence>
            </div>
      )
      }


export default ComentarioLista