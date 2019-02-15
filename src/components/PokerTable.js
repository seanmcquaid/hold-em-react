import React, {Component} from 'react';
import Deck from "../utilityClasses/Deck";

class PokerTable extends Component{
    constructor(){
        super();
        this.cards = new Deck();
        this.cards.createDeck();
        this.cards.shuffleDeck();
        console.log(this.cards.deck)
        this.state = {

        }
    }
    render(){
        return(
            <div className="col-sm-12 the-table">
            
            </div>
        )
    }
}

export default PokerTable;