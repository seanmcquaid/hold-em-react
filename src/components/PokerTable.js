import React, {Component} from 'react';
import Deck from "../utilityClasses/Deck";
import GameButtons from "./GameButtons";
import PokerHand from "./PokerHand";

class PokerTable extends Component{
    constructor(){
        super();
        this.cards = new Deck();
        this.cards.createDeck();
        this.cards.shuffleDeck();
        console.log(this.cards.deck)
        this.state = {
            playersHand: ["purple_back","purple_back"],
            dealersHand: ["purple_back","purple_back"]
        }
        this.prepDeck = this.prepDeck.bind(this)
    }
    // this is a custom method that isn't coming from react
    prepDeck(){
        const card1 = this.cards.deck.shift();
        const card2 = this.cards.deck.shift();
        const card3 = this.cards.deck.shift();
        const card4 = this.cards.deck.shift();
        this.setState({
            playersHand: [card1,card3],
            dealersHand: [card2,card4]
        })
    }

    render(){
        return(
            <div className="col-sm-12 the-table">
                <PokerHand cards={this.state.dealersHand}/>
                <PokerHand cards={this.state.playersHand}/>
                {/* can pass FUNCTIONS AS A PROP IF YOU DONT CALL IT  */}
                <GameButtons dealFunction={this.prepDeck} />
            </div>
        )
    }
}

export default PokerTable;