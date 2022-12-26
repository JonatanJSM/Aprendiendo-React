import './App.css';
import logo from "./imagenes/freecodecamp-logo.png"
//import Tarea from "./componentes/Tarea"
//import Formulario from "./componentes/TareaFormulario"
import Lista from "./componentes/Lista"

function App() {
  return (
    <div className="Aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img src={logo} className="logo" alt="logo"/>
      </div>
      <div className='tareas-lista-contendor'>
        <h1>holis</h1>
        <Lista />
      </div>
    </div>
  );
}


//el unico que se va a expoertar de este archivo
export default App;

// la exportacion nombrada exporta muchos
