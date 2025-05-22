import Contador from './components/Contador'
import Reloj from './components/Reloj'
import EstimarEdad from './components/EstimarEdad'
import EdadLautaro from './components/EdadLautaro'
import './App.css'

function App() {
  return (
    <>
      <h1>Trabajo Practico 4 - React</h1>
      <div className="puntos">
        <Contador />
        <Reloj />
        <div className="punto-3">
          <EstimarEdad />
          <EdadLautaro />
        </div>
      </div>
    </>
  )
}

export default App