import './App.css';
import Lottery from './Lottery';

function App(props) {
  return (
    <div className="App">
      <h1>Lottery App</h1>
      <Lottery />
      <Lottery title='Mini Daily' maxNum={10} numBalls={4} />
    </div>
  );
}

export default App;
