import React from 'react';
import rockIcon from './../assets/icon-rock.svg';

const Rock = ({ onPick }) => {
      return ( 
            <div onClick={onPick} 
                  className="rock-elem game-elem"
                  id="rock">
                  <img src={rockIcon} 
                        alt="rock icon" 
                        className="rock-icon game-icon"/>
            </div>
       );
}

export default Rock;