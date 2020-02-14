import React, { Component } from 'react';
import bgTriangle from './../assets/bg-triangle.svg';
import Paper from './paper';
import Scissors from './scissors';
import Rock from './rock';


class Starter extends Component {
      
      render() { 
            return (                  
            <div className="board flex-row">
                        <img src={bgTriangle} 
                              alt="background triangle"
                              className="bg-triangle" />
                        <div className="board-paper board-elem">
                              <Paper onPick={this.props.onPick} />
                        </div>
                        <div className="board-rock board-elem">
                              <Rock onPick={this.props.onPick} />
                        </div>
                        <div className="board-scissors board-elem">
                              <Scissors onPick={this.props.onPick} />
                        </div>   
                  </div>
              );
      }
}

export default Starter;