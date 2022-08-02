import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  function handleClick(e) {
    e.preventDefault();
    axios.get(process.env.REACT_APP_API_URL+'/test')
      .then(res => {
        alert(res.data)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          className="App-link test-btn"
          onClick={handleClick}
        >
          Say hello
        </button>
      </header>
    </div>
  );
}

export default App;
