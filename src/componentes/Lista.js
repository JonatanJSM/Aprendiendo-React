import React  from "react";
import Formulario from "./TareaFormulario"
import '../hojas-de-estilos/Lista.css';
import  {useState} from "react";
import Tarea from "./Tarea";

function ListaDeTareas(){
    const [tareas, serTareas] = useState([]);
    
    const agregarTarea = tarea =>{
        console.log("Tarea agregada");
    }
    
    return(
        //Fragmentos
        <> 
            <Formulario/>
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) =>
                        <Tarea 
                        texto={tarea.texto}
                        completada={tarea.completada}
                        />
                    )
                }
            </div>
        </>
    );
}

// 6:46:41
export default ListaDeTareas;