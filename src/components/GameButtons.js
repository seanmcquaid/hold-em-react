import React, {Component} from 'react';

class GameButtons extends Component{
    constructor(){
        super();
    }
    render(){
		return(
			<div className="col-sm-12 buttons">
				<div className="col-sm-4">
					<button onClick={this.props.dealFunction} className="btn btn-danger">Deal</button>
				</div>
				<div className="col-sm-4">
					<button onClick={()=>{this.props.betFunction(10)}}
						className="btn btn-warning">Bet 10</button>
				</div>				
				<div className="col-sm-4">
					<button onClick={()=>{this.props.betFunction(100)}}
						className="btn btn-warning">Bet 100</button>
				</div>				

			</div>
		)		
	}
}

export default GameButtons;