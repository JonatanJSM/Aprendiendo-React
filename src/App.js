import './App.css';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'

function App() {

  const manejarClic = () =>{
    console.log("Clic");
  }

  const reiniciarcontador = () =>{
    console.log("Reinicio");
  }

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
        <Boton
          texto = 'Click'
          esBotonDeClic = {true}
          manejarClic = {manejarClic}
        />
        <Boton
          texto = 'Reiniciar'
          esBotonDeClic = {false}
          manejarClic = {reiniciarcontador}
        />
      </div>
    </div>
  );
}


//el unico que se va a expoertar de este archivo
export default App;

// la exportacion nombrada exporta muchos
