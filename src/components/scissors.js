import React from 'react';
import scissorsIcon from './../assets/icon-scissors.svg';

const Scissors = ({ onPick }) => {
      return ( 
            <div onClick={onPick} 
                  className="scissors-elem game-elem"
                  id="scissors">
                  <img src={scissorsIcon} 
                        alt="scissors icon" 
                        className="scissors-icon game-icon"/>
            </div>
       );
}

export default Scissors;