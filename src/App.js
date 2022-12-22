import './App.css';
import logo from "./imagenes/freecodecamp-logo.png"
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from "./componentes/BotonClear"
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  // unput es la variable que se actualiza con setInput
  const [unput, setInput] = useState('');

  const calcularResultado = () => {
    if (unput) {
      setInput(evaluate(unput));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

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
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear = {()=> setInput('')}>
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
