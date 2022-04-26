
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp_logo.svg.png'
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla'
import Clear from './componentes/Clear.js';
import { useState } from 'react'
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState ('');

  const agregarInput = valor =>{
    setInput(input + valor);
  };

  const calcularResultado = () =>{
    setInput(evaluate(input));
  };
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
       <img
       src={freeCodeCampLogo}
       className='freecodecamp-logo'
       alt='Logo-de-freecodecamp'
       />

      </div>
       <div className='contenedor-calculadora'>
         <Pantalla input={input} />
         <div className='fila'>
           <Boton manejarClic={agregarInput}>1</Boton>
           <Boton manejarClic={agregarInput}>2</Boton>
           <Boton manejarClic={agregarInput}>3</Boton>
           <Boton manejarClic={agregarInput}>+</Boton> 
           
         </div>
         <div className='fila'>
         <Boton manejarClic={agregarInput}>4</Boton>
         <Boton manejarClic={agregarInput}>5</Boton>
         <Boton manejarClic={agregarInput}>6</Boton>
         <Boton manejarClic={agregarInput}>-</Boton>
         </div>
         <div className='fila'>
         <Boton manejarClic={agregarInput}>7</Boton>
         <Boton manejarClic={agregarInput}>8</Boton>
         <Boton manejarClic={agregarInput}>9</Boton>
         <Boton manejarClic={agregarInput}>*</Boton>
         </div>
         <div className='fila'>
         <Boton manejarClic={calcularResultado}>=</Boton>
         <Boton manejarClic={agregarInput}>0</Boton>
         <Boton manejarClic={agregarInput}>.</Boton>
         <Boton manejarClic={agregarInput}>/</Boton>
         </div>
         <div className='fila'>
           <Clear manejarClear={() => setInput('')}>Clear</Clear>
         </div>
         
       
      </div>
    </div>
  );
}

export default App;
