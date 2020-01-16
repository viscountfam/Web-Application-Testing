import React from 'react';

const Display = props => {

    return(
        <div className="display">
            <div>Balls:<span id="ball">{props.atBat.ball}</span></div>
            <div>Strikes:<span id="strike">{props.atBat.strike}</span></div>
            <div>Batter #<span id="player">{props.atBat.player}</span></div>
            <div>Inning:<span id="inning">{props.atBat.inning}</span></div>
            <div>Out:<span id="out">{props.atBat.out}</span></div>
        </div>
    );

}

export default Display;