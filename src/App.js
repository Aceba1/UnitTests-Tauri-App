import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [state, setState] = useState({})
  return (
    <div className="App" onClick={()=>{setState({backgroundColor:'#243964'})}}>
      <header className="App-header" style={state}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Running on <code>{window.navigator.userAgent}</code>
        </p>
        <label className="App-link">
          Consume Legume
        </label>
      </header>
    </div>
  );
}

export default App;
