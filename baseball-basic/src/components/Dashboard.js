import React from 'react';

const Dashboard = props => {

    function handleBall() {
        
        console.log('ball clicked')
        props.setAtBat({
            ...props.atBat,
            ball: props.atBat.ball += 1
        })
    }

    const handleStrike = e => {
        props.setAtBat({
            ...props.atBat,
            strike: props.atBat.strike += 1
        })
    }

    const handleFoul = e => {

        if(props.atBat.strike < 2) {
            props.setAtBat({
                ...props.atBat,
                strike: props.atBat.strike += 1 ,
            })
        }
    }

    const handleHit = e => {

        props.setAtBat({
        ...props.atBat,
        player: props.atBat.player += 1,
        strike: 0,
        ball: 0
        })
    }

    const handleOut = e => {

        props.setAtBat({
        ...props.atBat,
        out: props.atBat.out +=1,
        totalOut: props.atBat.totalOut +=1
        })
    }


    return(
        <div className="dashboard">
            <button onClick={() => handleBall()}>Ball</button>
            <button onClick={() => handleStrike()}>Strike</button>
            <button onClick={() => handleFoul()}>Foul</button>
            <button onClick={() => handleHit()}>Hit</button>
            <button onClick={() => handleOut()}>Out</button>
        </div>
    );

}

export default Dashboard;