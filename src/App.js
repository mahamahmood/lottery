import './App.css';
import Ball from './Ball';

function App(props) {
  return (
    <div className="App">
      <h1>Lottery App</h1>
      <Ball num={17}/>
      <Ball num={13}/>
      <Ball num={11}/>
      <Ball num={9}/>
    </div>
  );
}

export default App;
