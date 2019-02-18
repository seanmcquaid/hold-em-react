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
            dealersHand: ["purple_back","purple_back"],
            communityCards : ["purple_back","purple_back","purple_back","purple_back","purple_back"],
            wager: 0,
            bankRoll: 10000
        }
        this.prepDeck = this.prepDeck.bind(this)
        this.playerBet = this.playerBet.bind(this)
    }
    // this is a custom method that isn't coming from react
    prepDeck(){
        const card1 = this.cards.deck.shift();
        const card2 = this.cards.deck.shift();
        const card3 = this.cards.deck.shift();
        const card4 = this.cards.deck.shift();
        this.setState({
            playersHand: [card1,card3],
            dealersHand: [card2,card4],
        })
    }

    // this method will be sent to gamebuttons and is used to update the player bet
    // after they bet, we will call draw
    playerBet(amount){
        // this.state.wager += amount = NEVER DO THIS!!!!
        // LET REACT CHANGE STATE
        this.setState({
            wager: this.state.wager + amount,
            bankRoll: this.state.bankRoll - amount
        })
        this.draw();
    }

    // draw is called whenever a new community card needs to be drawn

    draw(){
        // we have to use Object.assign (or ...) to make a seperate copy of state
        let communityNewhand = Object.assign([],this.state.communityCards)
        console.log(communityNewhand)
        if(communityNewhand[0] === "purple_back"){
            // this is the first draw, so draw 3 cards
            communityNewhand = [this.cards.deck.shift(),this.cards.deck.shift(),this.cards.deck.shift()]
        }else{
            // this isnt the first draw, so I will only draw one
            communityNewhand.push([this.cards.deck.shift()]);
        }
        this.setState({
            communityCards: communityNewhand
        })
    }

    render(){
        return(
            <div className="col-sm-12 the-table">
                <div className="col-sm-12 text-center">
                Current Wager : ${this.state.wager}
                Current Bankroll : ${this.state.bankRoll}
                </div>
                <PokerHand cards={this.state.dealersHand}/>
                <PokerHand cards={this.state.communityCards}/>
                <PokerHand cards={this.state.playersHand}/>
                {/* can pass FUNCTIONS AS A PROP IF YOU DONT CALL IT  */}
                <GameButtons dealFunction={this.prepDeck} betFunction={this.playerBet}/>
            </div>
        )
    }
}

export default PokerTable;