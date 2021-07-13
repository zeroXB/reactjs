//Importacion 
import React from 'react';
import './App.css'; 
import Result from './components/Result.jsx'


//Generacion de la funcion flecha emacscript 6
const App = () => {
    console.log("Renderizacion de la App")

    //Cuerpo de la funcion lo que ejecuta la funcion 
    return (
            <main className="react-calculator">
               <Result value={"95"}/>
                <div className="numbers">
                   <button value={1}>1</button>
                   <button value={2}>2</button>
                   <button value={3}>3</button>
                   <button value={4}>4</button>
                   <button>5</button>
                   <button>6</button>
                   <button>7</button>
                   <button>8</button>
                   <button>9</button>
                   <button>0</button>
                </div>
                <div className="functions">
                    <button>clear</button>
                    <button>remove</button>
                </div>
                <div className="math-operations">
                    <button>+</button>
                    <button>-</button>
                    <button>*</button>
                    <button>/</button>
                    <button>=</button>
                </div>
            </main>)
};

//Exportacion 
export default App;