import './App.css';
import Testimonio from './componentes/Testimonios.js';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es mi primera pagina React</h1>
        <Testimonio />
      </div>
    </div>
  );
}


//el unico que se va a expoertar de este archivo
export default App;

// la expoertacion nombrada exporta muchos
