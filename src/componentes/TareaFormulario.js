import React from 'react';
import '../hojas-de-estilos/Formulario.css';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function Formulario(props){

    const [input, setInput] = useState("");

    const manejarCambio = e =>{
        setInput(e.target.value); //extrar valor
    }

    const manejarEnvio = e =>{
        e.preventDefault();

        //Lo de abajo es un objeto
        const tareaNueva ={
            id: uuidv4(),
            texto:input,
            completada:false
        }

        props.onSubmit(tareaNueva);
    }

    return(
        <form className='tarea-formulario'
        onSubmit={manejarEnvio}>
            <input
                className='tarea-input'
                type="text"
                placeholder='Escribe una tarea'
                name="texto"
                onChange={manejarCambio}
            />
            <button className='tarea-boton'>Agregar Tarea</button>
        </form>
    );
}

export default Formulario;