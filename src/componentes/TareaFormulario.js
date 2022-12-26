import React from 'react';
import '../hojas-de-estilos/Formulario.css';

function Formulario(props){
    return(
        <form className='tarea-formulario'>
            <input
                className='tarea-input'
                type="text"
                placeholder='Escribe una tarea'
                name="texto"
            />
            <button className='tarea-boton'>Agregar Tarea</button>
        </form>
    );
}

export default Formulario;