import React  from "react";
import Formulario from "./TareaFormulario"
import '../hojas-de-estilos/Lista.css';
import  {useState} from "react";
import Tarea from "./Tarea";

function ListaDeTareas(){
    const [tareas, setTareas] = useState([]);
    
    const agregarTarea = tarea =>{
        console.log(tarea);
        if(tarea.texto.trim()){ // probando que la cadena no esté vacia si quitamos espacios antes y depués
            tarea.texto = tarea.texto.trim();
                                // Los puntos ... son para que se mantengan los elementos anteriores
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    }

    const eliminarTarea = id => {               //Se agrega la tarea que cumpla la condición
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }
    
    return(
        //Fragmentos
        <> 
            <Formulario onSubmit={agregarTarea}/>
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) =>
                        <Tarea
                        key={tarea.id} //no se pasa como prop
                        id={tarea.id} 
                        texto={tarea.texto}
                        completada={tarea.completada}
                        eliminarTarea = {eliminarTarea}
                        />
                    )
                }
            </div>
        </>
    );
}

// 6:46:41
export default ListaDeTareas;