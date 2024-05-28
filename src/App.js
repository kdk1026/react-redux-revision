import { useState } from 'react';
import Left1 from './components/Left1';
import './style.css';
import Right1 from './components/Right1';

function App() {
  const [number, setNumber] = useState(1);

  return (
    <div id="container">
      <h1>Root : {number}</h1>
      <div id="grid">
        <Left1 number={number} />
        <Right1 onIncrease={() => {setNumber(number + 1)}} />
      </div>
    </div>
  );
}

export default App;
