import React  from "react";
import Formulario from "./TareaFormulario"
import '../hojas-de-estilos/Lista.css';
import  {useState} from "react";
import Tarea from "./Tarea";

function ListaDeTareas(){
    const [tareas, setTareas] = useState([]);
    
    const agregarTarea = tarea =>{
        if(tarea.texto.trim()){ // probando que la cadena no esté vacia si quitamos espacios antes y depués
            tarea.texto = tarea.texto.trim();
                                // Los puntos ... son para que se mantengan los elementos anteriores
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    };

    const eliminarTarea = id => {               //Se agrega la tarea que cumpla la condición
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    };


    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
          if (tarea.id === id) {

            //invertir estados
            tarea.completada = !tarea.completada;
          }

          //Se retorna en la contsnate "tareasActualizadas"
          return tarea;
        });
        setTareas(tareasActualizadas);
    };
    
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
                        completarTarea={completarTarea}
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