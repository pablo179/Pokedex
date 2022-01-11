import './App.css';
import ComponentDiv from './components/Div/step1/ComponentDiv';
import ComponentDiv2 from './components/Div/step1/ComponentDiv2';
import ComponentDiv3 from './components/Div/step1/ComponentDiv3';
import ComponentDiv4 from './components/Div/step1/ComponentDiv4';
import ComponentDiv5 from './components/Div/step1/ComponentDiv5';
import ComponentDiv6 from './components/Div/step1/ComponentDiv6';
import Step2_1 from './components/Div/step2/ComponentDiv';
import Step2_2 from './components/Div/step2/ComponentDiv2';
import Step2_3 from './components/Div/step2/ComponentDiv3';
import Step2_4 from './components/Div/step2/ComponentDiv4';
import Step3_1 from './components/Div/step3/ComponentDiv';
import Step3_2 from './components/Div/step3/ComponentDiv2';
import Step3_3 from './components/Div/step3/ComponentDiv3';
import Step3_4 from './components/Div/step3/ComponentDiv4';
import Step4_1 from './components/Div/step4/ComponentDiv';
import ComponentBtn from './components/Btn/Step1/ComponentBtn';
import ComponentBtn2 from './components/Btn/Step1/ComponentBtn2';
import ComponentBtn3 from './components/Btn/Step1/ComponentBtn3';
import ComponentBtn4 from './components/Btn/Step1/ComponentBtn4';
import ComponentBtn5 from './components/Btn/Step1/ComponentBtn5';
import ComponentBtn6 from './components/Btn/Step1/ComponentBtn6';
import Btn2_1 from './components/Btn/Step2/ComponentBtn'
import Btn2_2 from './components/Btn/Step2/ComponentBtn2'
import Btn2_3 from './components/Btn/Step2/ComponentBtn3'
import Btn2_4 from './components/Btn/Step2/ComponentBtn4'
import Btn3_1 from './components/Btn/Step3/ComponentBtn'
import Btn3_2 from './components/Btn/Step3/ComponentBtn2'
import Btn3_3 from './components/Btn/Step3/ComponentBtn3'
function App() {
  return (
    <div className="App">
      <>
      ****** Div
        1.- div con texto que no hace nada
        <ComponentDiv/>
        <ComponentDiv2/>
        <ComponentDiv3/>
        <ComponentDiv4/>
        <ComponentDiv5/>
        <ComponentDiv6 text='Soy un div'/>
        2.- div con texto dinamico
        <Step2_1 text='Soy dinamico'/>
        <Step2_2 text='Soy dinamico'/>
        <Step2_3 text='Soy dinamico'/>
        <Step2_4 text='Soy dinamico'/>
        3.- div con texto y estilos dinamicos
        <Step3_1 text='Soy dinamico' myStyles={{background :'red'}}/>
        <Step3_2 text='Soy dinamico' myStyles={{background :'green'}}/>
        <Step3_3 text='Soy dinamico' myStyles={{background :'blue'}}/>
        <Step3_4 text='Soy dinamico' myStyles={{background :'yellow'}}/>
        4.- div que desaparece
        <Step4_1 />
        5.- div con funcion dinamica
      </> 
      <>
      ****** Button
        1.- boton que no hace nada
        <ComponentBtn />
        <ComponentBtn2 />
        <ComponentBtn3/>
        <ComponentBtn4/>
        <ComponentBtn5/>
        <ComponentBtn6 text="I'm a button"/>
        2.- boton con texto dinamico
        <Btn2_1 text="I'm a button"/>
        <Btn2_2 text="I'm a button"/>
        <Btn2_3 text="I'm a button"/>
        <Btn2_4 text="I'm a button"/>
        3.- boton con texto y estilos dinamicos
        <Btn3_1 text="dinamic button" myStyles={{background:'red'}} />
        <Btn3_2 text="dinamic button" myStyles={{background:'red'}} />
        <Btn3_3 text="dinamic button" myStyles={{background:'red'}} />
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
