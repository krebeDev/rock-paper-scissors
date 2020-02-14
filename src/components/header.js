import React, { Component } from 'react';
import logo from './../assets/logo.svg';

class Header extends Component {
      render() { 
            return ( 
                  <header className="header-bar">
                        <div className="flex-row">
                              <div className="logo-wrapper">
                                    <img src={logo} 
                                          alt="rps logo" 
                                          className="logo" /> 
                              </div>
                              <div className="game-score">
                                    <h3 className="score-title">Score</h3>
                                    <p className="score-value">{this.props.score}</p>
                              </div>
                        </div>                   
                  </header>
             );
      }
}

export default Header;