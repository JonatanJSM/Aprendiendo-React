import React from "react";
import Formulario from "./TareaFormulario"
import '../hojas-de-estilos/Lista.css';

function ListaDeTareas(){
    return(
        //Fragmentos
        <> 
            <Formulario/>
            <div className="tareas-lista-contenedor">
                Lista de ListaDeTareas
            </div>
        </>
    );
}

export default ListaDeTareas;