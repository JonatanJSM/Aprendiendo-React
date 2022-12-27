import React from 'react';
import './App.css';
import Testimonio from './componentes/Testimonios.js';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <div className="contenedor-principal">
          <h1>Esto es mi primera pagina React</h1>
          <Testimonio 
            nombre = 'Maria Sanchez'
            cargo = 'Ingenieria de Software'
            testimonio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra quis metus nec dictum. Suspendisse feugiat justo sapien, ut efficitur quam tempor eget. Maecenas fermentum erat vel felis blandit mollis. Morbi malesuada purus eu tellus consectetur mattis. Etiam augue sem, imperdiet eu mollis id, condimentum nec lacus. In eleifend commodo diam, vel condimentum libero rhoncus eget. Vivamus semper justo eget elit feugiat varius. Cras tincidunt volutpat enim, et commodo sem rhoncus at. Suspendisse rhoncus blandit tortor vel accumsan. Aenean ut nibh vulputate, molestie est a, aliquet enim. Maecenas non nibh vel nibh dictum hendrerit eu sit amet augue. Donec varius orci quis tellus lacinia, accumsan mattis augue pharetra. Nulla mollis vitae orci et laoreet.'
            imagen = 'emma'
          />
          <Testimonio 
            nombre = 'Sarah Sanchez'
            cargo = 'Ingenieria de Software'
            testimonio = 'tur adipiscing elit. Suspendisse viverra quis metus nec dictum. Suspendisse feugiat justo sapien, ut efficitur quam tempor eget. Maecenas fermentum erat vel felis blandit mollis. Morbi malesuada purus eu tellus consectetur mattis. Etiam augue sem, imperdiet eu mollis id, condimentum nec lacus. In eleifend commodo diam, vel condimentum libero rhoncus eget. Vivamus semper justo eget elit feugiat varius. Cras tincidunt volutpat enim, et commodo sem rhoncus at. Suspendisse rhoncus blandit tortor vel accumsan. Aenean ut nibh vulputate, molestie est a, aliquet enim. Maecenas non nibh vel nibh dictum hendrerit eu sit amet augue. Donec varius orci quis tellus lacinia, accumsan mattis augue pharetra. Nulla mollis vitae orci et laoreet.'
            imagen = 'sarah'
          />
        </div>
      </div>
    );
  }
}


//el unico que se va a expoertar de este archivo
export default App;

// la exportacion nombrada exporta muchos
