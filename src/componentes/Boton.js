import React from "react";
import '../hojas-de-estilos/Boton.css'

//sintaxis de desestructuración
function Boton(props){
    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return(
        <div                                                                        //Remueve espacios al final de la cadena
        className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
        onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    );
}
export default Boton;