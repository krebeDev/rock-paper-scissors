import React from 'react';
import paperIcon from './../assets/icon-paper.svg';

const Paper = ({ onPick }) => {
      return ( 
            <div onClick={onPick}
                  className="paper-elem game-elem"
                  id="paper">
                  <img  src={paperIcon} 
                        alt="paper icon" 
                        className="paper-icon game-icon"/>
            </div>
       );
}
 
export default Paper;
