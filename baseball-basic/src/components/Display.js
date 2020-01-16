import React from 'react';

const Display = props => {

    return(
        <div className="display">
            <div>Balls:<span id="ball">{props.atBat.ball}</span></div>
            <div>Strikes:<span id="strike">{props.atBat.strike}</span></div>
        </div>
    );

}

export default Display;