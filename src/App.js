import React, { Component, Fragment } from 'react';
import GameRules from './components/game-rules';
import Header from './components/header';
import Starter from './components/starter';
import { getHousePick, setWinner, isWinner, renderButton, renderChoice } from './utilities/utils';
import './App.css';

class App extends Component {  
  state = {
    elements: [ "rock", "scissors", "paper" ], 
    userChoice: { name: "", winner: false, score: 0 },
    houseChoice: { name: "", winner: false }, 
    gameRules: false,
  };

  componentDidMount () {
    const { userChoice } = this.state;
    !localStorage.getItem("score") ? 
      userChoice.score = 0 : userChoice.score = localStorage.getItem("score")
    this.setState(userChoice);
  }
    
  handlePick = (e) => {
    const elements = [...this.state.elements];
    const userChoice = {...this.state.userChoice};
    const houseChoice = {...this.state.houseChoice};

    userChoice.name = e.currentTarget.id;
    houseChoice.name = getHousePick(elements);
    setWinner(userChoice, houseChoice);
    this.setState({ userChoice, houseChoice });
  }

  resetGame = () => {
    const { userChoice, houseChoice } = this.state;
    userChoice.name = "";
    userChoice.winner = false;
    houseChoice.name = "";
    houseChoice.winner = false;
    this.setState({ userChoice, houseChoice });
  }

  displayRules = () => {
    let { gameRules } = this.state;
    gameRules = true;
    this.setState({ gameRules });    
  }

  handleClose = () => {
    let { gameRules } = this.state;
    gameRules = false;
    this.setState({ gameRules });    
  }
  
  render() { 
    const { userChoice, houseChoice, gameRules } = this.state;
    const { name: uChoice, score, verdict } = userChoice;  
    const { name: hChoice } = houseChoice;

  return ( 
    <Fragment>
      <Header score={ score }/>
      { gameRules && <GameRules onClose={ this.handleClose } /> }
      { uChoice === "" &&  <Starter onPick={this.handlePick}/> }

      { uChoice !== ""  &&
        <div className="container"> 
          <div className="board active-play flex-row">
              <div className="user-choice flex-child">
                <div className={isWinner(userChoice)}>
                    {renderChoice(uChoice)}
                    <h2 className="picks user-pick">You Picked</h2>
                </div>
              </div>

            <div className="house-choice flex-child">
                <div className={isWinner(houseChoice)}>
                    {renderChoice(hChoice)}
                    <h2 className="picks house-pick">The House Picked</h2>
                </div>
            </div>

            <div className="verdict-col flex-child">
                <h2 className="verdict">{verdict}</h2>
                {renderButton("Play Again", "btn-replay", this.resetGame)}
            </div>
        </div> 
      </div>
      }
      { renderButton("Rules", "btn-rules", this.displayRules) }                
    </Fragment>
    );
  }
}

export default App;