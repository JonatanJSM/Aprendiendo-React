import React from 'react';
import '../hojas-de-estilos/Tarea.css';
import { AiOutlineCloseSquare } from "react-icons/ai";


function Tarea({texto, completada}){
    return(
        <div className={completada?'tarea-contenedor completada': 'tarea-contenedor'}>
            <div className='tarea-texto'>
                {texto}
            </div>
            <div className='tarea-contenedor-icono'>
                <AiOutlineCloseSquare className='tarea-icono'/>
            </div>
        </div>
    );
}

export default Tarea;