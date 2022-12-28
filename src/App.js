import React from 'react';
import './App.css';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import Contador from "./componentes/Contador"


class App extends React.Component{

  //Solo si se necesita para definir estados o pasar cosas a los componentes
  constructor(){
    super();
    this.state = {
      numClics:0 // , si hay mas estados
    };
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClic(){
    this.setState(({numClics}) => ({numClics: numClics + 1}));
  }

  reiniciarContador() {
    this.setState({ numClics: 0 });
  }

  render(){
    return (
      <div className="App">
        <div className="logo-contenedor">
          <img 
          className='freecodecamp-logo'
          src = {freeCodeCampLogo}
          alt = 'logo de freeCodeCamp'
          />
        </div>
        <div className='contenedor-principal'>
          <Contador numClics={this.state.numClics} />
          <Boton
            texto = 'Click'
            esBotonDeClic = {true}
            manejarClic = {this.manejarClic}
          />
          <Boton
            texto = 'Reiniciar'
            esBotonDeClic = {false}
            manejarClic = {this.reiniciarContador}
          />
        </div>
      </div>
    );
  }
}

//el unico que se va a expoertar de este archivo
export default App;

// la exportacion nombrada exporta muchos
