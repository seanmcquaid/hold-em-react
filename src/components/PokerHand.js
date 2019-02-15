import React from 'react';
import Card from "./Card";

// my job is to show cards, I don't care about state

function PokerHand(props){
    let hand = props.cards.map((card)=>{
        return (
            <Card card={card}/>
        )
    })
    return(
        <div className="col-sm-12">
        {hand}
        </div>
    )
}

export default PokerHand;