
import './App.css'
import Button from './components/Button'
import ButtonClass from './components/ButtonClass';
import {Greet} from './components/Greet'
import GreetClass from './components/GreetClass';
import State from './components/State';
import StateClass from './components/StateClass';
function App() {
  
  const clientHandler=()=>{
    alert("Button 1 called");
  }
  const clientHandler1=()=>{
    alert("button 2 called");

  }
  return (
    <>
      Hello to Vite
      {/* <Greet name="Code" age={10}/>
        <Greet name="Chitkara"/> */}

        {/* <Button value="Send" click={clientHandler}/>
         <Button value="Login" click={clientHandler1}/> */}

          {/* <GreetClass name="Code"/>
<ButtonClass value="Send" click={clientHandler}/> */}

{/* <State/> */}
<StateClass/>



    </>
  )
}

export default App
