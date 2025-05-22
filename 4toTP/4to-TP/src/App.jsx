import Contador from './components/Contador'
import Reloj from './components/Reloj'
import NombreEdad from './components/NombreEdad'
import './App.css'

function App() {
  return (
    <>
      <h1>Trabajo Practico 4 - React</h1>
      <div className="puntos">
        <Contador />
        <Reloj />
        <NombreEdad />
      </div>
    </>
  )
}

export default App