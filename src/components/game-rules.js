import React from 'react';
import rulesImg from './../assets/image-rules.svg';
import closeIcon from './../assets/icon-close.svg';

const GameRules = ({ onClose }) => {
      return (
            <div className="modal">
                  <div className="rules-wrapper">
                        <div className="rules-content flex-row">
                              <div className="rules-header flex-row">
                                    <h3 className="rules-tittle">Rules</h3>
                                    <img onClick={onClose}
                                          src={closeIcon} 
                                          alt="close icon"
                                          className="close-icon"/>
                              </div>
                              <div className="rules-diagram">
                                    <img src={rulesImg} 
                                          alt="rules"
                                          className="rules-image"/>
                              </div>
                        </div>
                  </div>
            </div>    
        );
}
 
export default GameRules;