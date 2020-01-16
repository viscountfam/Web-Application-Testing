import React, {useState} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

const App = () => {

  const [atBat, setAtBat] = useState({
    player: 1,
    strike: 0,
    ball: 0
  });

  if (atBat.strike === 3 || atBat.ball === 4) {

    setAtBat({
      player: atBat.player += 1,
      strike: 0,
      ball: 0
    })
  }
  
  // balls and strikes reset to 0 when a hit is recorded
  let hit = false;

  if (hit) {
    setAtBat({
      player: atBat.player += 1,
      strike: 0,
      ball: 0
    })
  }
  // a foul increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.
  let foul = false;

  if (foul){
    if(atBat.strike < 2) {
      setAtBat({
        ...atBat,
        strike: atBat.strike += 1 ,
      })
    }
  }


  return (
    <div className="App">
      <Display atBat={atBat} />
      <Dashboard atBat={atBat} setAtBat={setAtBat} />
    </div>
  );
}

export default App;
