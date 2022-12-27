import React from "react";
import '../hojas-de-estilos/Testimonio.css'

class Testimonio extends React.Component{
    render(){
        return(
            <div className = "contenedor-testimonio">
                <img className = "imagen-testimonio"
                src={require(`../imagenes/testimonio-${this.props.imagen}.png`)}
                alt = "Foto de Emma" />
                <div className="contenedor-texto-testimonio">
                    <p className="nombre-testimonio">
                        <strong>{this.props.nombre}</strong>
                    </p>
                    <p className="cargo-testimonio">{this.props.cargo}</p>
                    <p className="testo-tetimonio">{this.props.testimonio}</p>
                </div>
            </div>
        );
    }
}

export default Testimonio;