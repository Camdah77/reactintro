import logo from './artspot.png' ;
import './App.css';
import FunctionalGreeting from "./components/FunctionalGreeting";
import FunctionalGreeting2 from "./components/FunctionalGreeting";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo"  alt="logo" /> 
       </header>;
       <div class="bodycontent">
       <FunctionalGreeting>
        My name is Camilla 
        </FunctionalGreeting>
        </div>

        <FunctionalGreeting2>
        </FunctionalGreeting2>


        </div>
    );
  }

  export default App;
