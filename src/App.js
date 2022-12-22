import './App.css';
import logo from "./imagenes/freecodecamp-logo.png"
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from "./componentes/BotonClear"
import { useState } from 'react';

function App() {

  // unput es la variable que se actualiza con setInput
  const [unput, setInput] = useState('');

  const agregarInput = val =>{
    setInput(unput + val);
  };

  return (
    <div className="App">
      <div className='freecodeCamp-logo-contenedor'>
        <img
          src={logo}
          className = "logo"
          alt = "Logo de ____"
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input = {unput}/>
        <div className='fila'>
          <Boton manejar>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear>
            Borrar
          </BotonClear>
        </div>
      </div>
    </div>
  );
}


//el unico que se va a expoertar de este archivo
export default App;

// la exportacion nombrada exporta muchos
