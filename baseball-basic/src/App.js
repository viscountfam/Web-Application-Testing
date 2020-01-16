import React, {useState, useEffect} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

const App = () => {

  const [atBat, setAtBat] = useState({
    player: 1,
    strike: 0,
    ball: 0,
    out: 0,
    totalOut: 0,
    inning: `1A`
  });


  let num = Math.floor(atBat.totalOut/3);
  console.log('num',num);
  console.log('Total Out',atBat.totalOut);

  useEffect(() => {

    if(num < 2){
      if (num == 0) {
        setAtBat({
          ...atBat,
          inning: `1A`
        })
      } else if (num == 1) {
        setAtBat({
          ...atBat,
          inning: `1B`
        })
      }
    } else if (num >= 2) {
      if (num%2 == 0){
      
        setAtBat({
          ...atBat,
          inning: `${num}A`
        })
      } else {
        setAtBat({
          ...atBat,
          inning: `${num}B`
        })
      }
    }
  }, [atBat.totalOut])

  if (atBat.strike === 3) {

    setAtBat({
      ...atBat,
      player: atBat.player += 1,
      strike: 0,
      ball: 0,
      out: atBat.out += 1
    })
  }

  if (atBat.ball === 4) {
    setAtBat({
      player: atBat.player += 1,
      strike: 0,
      ball: 0,
    })
  }


  return (
    <div className="App">
      <Display atBat={atBat} />
      <Dashboard atBat={atBat} setAtBat={setAtBat} />
    </div>
  );
}

export default App;
