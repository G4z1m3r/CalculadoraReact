import './App.css';
import Boton from './componentes/Boton';
import BotonClear from './componentes/BotonClear';
import Pantalla from './componentes/Pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import BotonMemoria from './componentes/BotonMemoria';
import BotonRecuperarMemoria from './componentes/BotonRecuperarMemoria';
import Imagen from './componentes/Imagen';

function App() {
  const [input,setInput]=useState(''); // useState se usa para inicializar la variable de el hook
  const [memoria,setMemoria]=useState('');

  const agregarInput=(val)=>{
    setInput(input+val);
  };

  // const limpiarPantalla=()=>{
  //   setInput('');
  // }

  const calcularResultado=()=>{
    if (input) {
      setInput(evaluate(input));
    }else{
      alert('introduce datos');
    }
  }

  // const memorizarPantalla=()=>{
  //   setMemoria(input);
  // }

  // const recuperarMemoria=()=>{
  //   setInput(input+memoria);
  // }


  return (
    <div className="App">

    <Imagen src="https://picsum.photos/500/200" alt="prueba"/>

      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={()=>setInput('')}>Clear</BotonClear>
          <BotonMemoria manejarMemoria={()=>setMemoria(input)}>M+</BotonMemoria>
          <BotonRecuperarMemoria manejarRecuperarMemoria={()=>setInput(input+memoria)}>RM</BotonRecuperarMemoria>
        </div>
      </div>
    </div>
  );
}

export default App;
