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
import Step4_2 from './components/Div/step4/ComponentDiv2';
import Step4_3 from './components/Div/step4/ComponentDiv3';
import Step5_1 from './components/Div/step5/ComponentDiv';
import Step5_2 from './components/Div/step5/ComponentDiv2';
import Step5_3 from './components/Div/step5/ComponentDiv3';
import ComponentBtn from './components/Btn/Step1/ComponentBtn';
import ComponentBtn2 from './components/Btn/Step1/ComponentBtn2';
import ComponentBtn3 from './components/Btn/Step1/ComponentBtn3';
import ComponentBtn4 from './components/Btn/Step1/ComponentBtn4';
import ComponentBtn5 from './components/Btn/Step1/ComponentBtn5';
import ComponentBtn6 from './components/Btn/Step1/ComponentBtn6';
import Btn2_1 from './components/Btn/Step2/ComponentBtn';
import Btn2_2 from './components/Btn/Step2/ComponentBtn2';
import Btn2_3 from './components/Btn/Step2/ComponentBtn3';
import Btn2_4 from './components/Btn/Step2/ComponentBtn4';
import Btn3_1 from './components/Btn/Step3/ComponentBtn';
import Btn3_2 from './components/Btn/Step3/ComponentBtn2';
import Btn3_3 from './components/Btn/Step3/ComponentBtn3';

import ComponentInput from './components/Input/Step1/ComponentInput';
import ComponentInput2 from './components/Input/Step1/ComponentInput2';
import ComponentInput3 from './components/Input/Step1/ComponentInput3';
import ComponentInput4 from './components/Input/Step1/ComponentInput4';
import ComponentInput5 from './components/Input/Step1/ComponentInput5';
import ComponentInput6 from './components/Input/Step1/ComponentInput6';
import Input2_1 from './components/Input/Step2/ComponentInput';
import Input2_2 from './components/Input/Step2/ComponentInput2';
import Input2_3 from './components/Input/Step2/ComponentInput3';
import Input3_1 from './components/Input/Step3/ComponentInput';
import Input3_2 from './components/Input/Step3/ComponentInput2';
import Input3_3 from './components/Input/Step3/ComponentInput3';
import Input4_1 from './components/Input/Step4/ComponentInput';
import Input4_2 from './components/Input/Step4/ComponentInput2';
import Input4_3 from './components/Input/Step4/ComponentInput3';
import Input5_1 from './components/Input/Step5/ComponentInput';
import Input5_2 from './components/Input/Step5/ComponentInput2';
import Input5_3 from './components/Input/Step5/ComponentInput3';
function App() {
  function dynamicFunction(){
    console.log('Soy una funcion dinamica');
  }
  function dynamicFunction2(){
    console.log("Soy una funcion dinamica 2")
  }
  function dynamicFunction3(){
    console.log("Soy una funcion dinamica 3")
  }
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
        <Step4_1/>
        <Step4_2/>
        <Step4_3/>
        5.- div con funcion dinamica
        <Step5_1 myFunction={dynamicFunction}/>
        <Step5_2 myFunction={dynamicFunction2}/>
        <Step5_3 myFunction={dynamicFunction3}/>

      </> 
      <>
        <p/>
      ****** Button
        1.- boton que no hace nada
        <ComponentBtn />
        <ComponentBtn2 />
        <ComponentBtn3/>
        <ComponentBtn4/>
        <ComponentBtn5/>
        <ComponentBtn6 text="I'm a button"/>
        <p/>
        2.- boton con texto dinamico
        <Btn2_1 text="I'm a button"/>
        <Btn2_2 text="I'm a button"/>
        <Btn2_3 text="I'm a button"/>
        <Btn2_4 text="I'm a button"/>
        <p/>
      
        3.- boton con texto y estilos dinamicos
        <Btn3_1 text='Soy dinamico' myStyles={{background :'red'}}/>
        <Btn3_2 text='Soy dinamico' myStyles={{background :'green'}}/>
        <Btn3_3 text='Soy dinamico' myStyles={{background :'blue'}}/>
        <p/>
        
        4.- boton que desaparece
        5.- boton con funcion dinamica
      </>
      <>
      ****** Input
        1.- input que no hace nada
        <ComponentInput/>
        <ComponentInput2/>
        <ComponentInput3/>
        <ComponentInput4/>
        <ComponentInput5/>
        <ComponentInput6 text="Soy un input"/>
        <p/>
        2.- input con texto dinamico
        <Input2_1/>
        <Input2_2/>
        <Input2_3/>
        <p/>
        3.- input con texto y estilos dinamicos
        <Input3_1 data="Soy un input dinamico" myStyles={{background: 'black',color: 'white'}} />
        <Input3_2 data="Soy un input dinamico" myStyles={{background: 'gray',color: 'black'}} />
        <Input3_3 data="Soy un input dinamico" myStyles={{background: 'red',color: 'white'}} />
        <p/>
        4.- input que desaparece
        <Input4_1 />
        <Input4_2 />
        <Input4_3 />
        <p/>
        5.- input con funcion dinamica
        <Input5_1 myFunction={dynamicFunction}/>
        <Input5_2 myFunction={dynamicFunction2}/>
        <Input5_3 myFunction={dynamicFunction3}/>
        <p/>
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
