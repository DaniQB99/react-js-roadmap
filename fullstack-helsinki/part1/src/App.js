import "./App.css";
import Mensaje from "./Mensaje.js";

const Sumar = (a, b) => {
  return a + b;
};

const Descripcion = () => {
  return <p>Esta es una app de prueba</p>;
};

// Componente principal
// Este componente se encarga de renderizar la app
function App() {
  const a = 5;
  const b = 6;
  const resultado = Sumar(a, b);

  return (
    <div className="App">
      <Mensaje color="red" mesagge="Hola mundo" />
      <Mensaje color="green" mesagge="Esto es un mensaje de prueba" />
      <Mensaje color="blue" mesagge="Para el curso de React JS" />
      La suma de a + b es: {resultado}
      <Descripcion />
    </div>
  );
}

export default App;
