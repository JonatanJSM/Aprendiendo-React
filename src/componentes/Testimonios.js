import React from "react";

function Testimonio(){
    return(
        <div className = "contenedor-testimonio">
            <img className = "imagen-testimonio"
            src={require("../imagenes/testimonio-emma.png")}
            alt = "Foto de Emma"/>
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio">Jonatan Jafet</p>
                <p className="cargo-testimonio">Ingeniero de software</p>
                <p className="testo-tetimonio"> jeimircoimeociemrciemciermceirmceoicmeoirmcoeirmcirmceoircmeoircmeoic</p>
            </div>
        </div>
    );
}


export default Testimonio;