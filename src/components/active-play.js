import React, { Component, Fragment } from 'react';
import InitGame from './start';
import Paper from './paper';
import Rock from './rock';
import Scissors from './scissors';
import Button from './button';
import GameRules from './game-rules';
import Header from './header';

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

     getHousePick = elemArr => elemArr[Math.floor(Math.random()*elemArr.length)];
     
     handlePick = (e) => {
      const elements = [...this.state.elements];
      const userChoice = {...this.state.userChoice};
      const houseChoice = {...this.state.houseChoice};

      userChoice.name = e.currentTarget.id;
      houseChoice.name = this.getHousePick(elements);
      this.setWinner(userChoice, houseChoice);
      this.setState({ userChoice, houseChoice });
     }

     setWinner = (a, b) => {
           if (a.name === b.name) {
                 a.verdict = "Draw"
           } else if ((a.name === "paper" && b.name === "rock") || 
                  (a.name === "rock" && b.name === "scissors") || 
                  (a.name === "scissors" && b.name === "paper")) {
                        a.winner = true;
                        a.verdict = "You win";
                        a.score++;
           } else {
                 b.winner = true;
                 a.verdict = "You Loose";
                 a.score--;
           }

           localStorage.setItem("score", a.score);
     }

     renderChoice = (choice) => {
      let cType;
      if(choice === "rock") {
             cType = <Rock />
      } else if (choice === "paper") {
             cType = <Paper />
      } else cType = <Scissors />

      return cType;
      }

    isWinner = (obj) => obj.winner ? "winner-badge p-relative" : "p-relative";

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

      renderButton (label, classes, onClick) {
          return (
            <Button 
                  label={label}
                  classes={classes}
                  onClick={onClick}
            />
          )
      }
  
      render() { 
            const { userChoice, houseChoice, gameRules } = this.state;
            const { name: uChoice, score, verdict } = userChoice;  
            const { name: hChoice } = houseChoice;

            return ( 
                  <Fragment>
                        <Header score={score}/>
                        {gameRules && <GameRules onClose={ this.handleClose } />}
                        {uChoice === "" &&  <InitGame onPick={this.handlePick}/>}

                        {uChoice !== ""  &&
                          <div className="container"> 
                              <div className="board active-play flex-row">
                                    <div className="user-choice flex-child">
                                          <div className={this.isWinner(userChoice)}>
                                                {this.renderChoice(uChoice)}
                                                <h2 className="picks user-pick">You Picked</h2>
                                          </div>
                                    </div>
                                    
                                    <div className="house-choice flex-child">
                                          <div className={this.isWinner(houseChoice)}>
                                                {this.renderChoice(hChoice)}
                                                <h2 className="picks house-pick">The House Picked</h2>
                                          </div>
                                    </div>

                                    <div className="verdict-col flex-child">
                                          <h2 className="verdict">{verdict}</h2>
                                          {this.renderButton("Play Again", "btn-replay", this.resetGame)}
                                    </div>
                              </div> 
                          </div>
                        }

                        {this.renderButton("Rules", "btn-rules", this.displayRules)}
                       
                  </Fragment>
             );
      }
}

export default App;