import './App.css';
import ComponentDiv from './components/Div/step1/ComponentDiv';
import ComponentDiv2 from './components/Div/step1/ComponentDiv2';
import ComponentDiv3 from './components/Div/step1/ComponentDiv3';
import ComponentDiv4 from './components/Div/step1/ComponentDiv4';
import ComponentDiv5 from './components/Div/step1/ComponentDiv5';
import ComponentDiv6 from './components/Div/step1/ComponentDiv6';
import Step21 from './components/Div/step2/ComponentDiv';
import Step31 from './components/Div/step3/ComponentDiv';

function App() {
  return (
    <div className="App">
      <>
      ****** Div
        1.- div con texto que no hace nada
        <ComponentDiv />
        <ComponentDiv2 />
        <ComponentDiv3 />
        <ComponentDiv4 />
        <ComponentDiv5 />
        <ComponentDiv6 text='Soy un div' />
        2.- div con texto dinamico
        <Step21 text= 'texto dinamico' />

        3.- div con texto y estilos dinamicos
        <Step31 text= 'texto dinamico' myStyles={{background:'red'}} />

        4.- div que desaparece
        5.- div con funcion dinamica
      </>
      <>
      ****** Button
        1.- boton que no hace nada
        2.- boton con texto dinamico
        3.- boton con texto y estilos 
        4.- boton que desaparece
        5.- boton con funcion dinamica
      </>
      <>
      ****** Input
        1.- input que no hace nada
        2.- input con texto dinamico
        3.- input con texto y estilos dinamicos
        4.- input que desaparece
        5.- input con funcion dinamica
      </>
      <>
      ****** Pokemon
        1.- pokemon component (all examples)
      </>
      <>
      ****** Message
        1.- message component (all examples)
      </>
      <>
      ****** Cards
        1.- cards component (all examples)
      </>
    </div>
  );
}

export default App;
