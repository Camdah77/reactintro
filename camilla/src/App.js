import logo from './artspot.png';
import './App.css';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
            <img src={logo} alt="Artspot Logo" />
      <StatefulGreeting greeting="Welcome to Artspot" name="Hugo" />
    </div>
  );
}

export default App;
