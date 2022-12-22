import './App.css';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import Contador from "./componentes/Contador"
import { useState } from 'react';

function App() {

    //Valor del estado, función para actualizar
  const [numClics, sNumClics] = useState(0);

  const manejarClic = () =>{
    sNumClics(numClics + 1);
  }

  const reiniciarcontador = () =>{
    sNumClics(0);
  }

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img 
        className='freecodecamp-logo'
        src = {freeCodeCampLogo}
        alt = 'logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
          texto = 'Click'
          esBotonDeClic = {true}
          manejarClic = {manejarClic}
        />
        <Boton
          texto = 'Reiniciar'
          esBotonDeClic = {false}
          manejarClic = {reiniciarcontador}
        />
      </div>
    </div>
  );
}


//el unico que se va a expoertar de este archivo
export default App;

// la exportacion nombrada exporta muchos
