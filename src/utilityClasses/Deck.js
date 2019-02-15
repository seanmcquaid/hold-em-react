class Deck {
    constructor(){
        // we do not need to call super because it's a component/we dont extend
        this.deck = []
    }
    createDeck(){
        // reset the deck
		this.deck = [];
        // Two loops. One for suit, one for card value
		const suits = ['h','s','d','c'];
		for(let s = 0; s < suits.length; s++){
			// inner loop for value
			for(let c = 1; c <= 13; c++){
				// push the combination of c and s onto this.deck
				this.deck.push(c+suits[s]);
			}
		}
    }
    shuffleDeck(){
        // Swap 2 random indicies in teh array many, many times
		for (let i = 0; i < 100000; i++){
			var rand1 = Math.floor(Math.random() * 52);
			var rand2 = Math.floor(Math.random() * 52);
			// Store in temp the value of random[1]
			var temp = this.deck[rand1];
			// overwrite what's in rand1, with whats in rand2
			this.deck[rand1] = this.deck[rand2];
			// now, overwrite whats in rand2 with whats in temp (whatever was in rand1)
			this.deck[rand2] = temp;
		}	
    }
}

export default Deck;