import {React} from 'react'
import { BrowserRouter as Router ,
         Routes,
         Route } from 'react-router-dom'
import Header from './componentes/Header';
import ComentarioLista from './componentes/ComentarioLista';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';
import About from './paginas/About';
import AboutIconLink from './componentes/AboutIconLink';
import { ComentariosProvider } from './contexto/ComentariosContexto';

function App() {

  
    const titulo = "App de Comentarios";
    const Autor = "Michel Ballen y Kevin Paredes"
    const ficha = "2902093"
    const loading = false;
    if (loading === true) return (<h1> Cargando comentarios.. </h1>)        
    
    
      
  return (
    <ComentariosProvider>
        <Router>
         <div className='container'>
            <Header titulo={titulo} autor={Autor} ficha={ficha}/>
            <ComentarioForm />
            <ComentarioStats />
            <ComentarioLista />
            <Routes>
              <Route exact path='/' element={
                <>
                 
                 
                </>
              } >
                 
              </Route>
              <Route path='/about' element={
                <About 
                  titulo={titulo}
                  autor={Autor}
                  ficha={ficha}
                /> }></Route>
            </Routes>
           
          </div>
    </Router>
    </ComentariosProvider>
    
   
  )
}

export default App