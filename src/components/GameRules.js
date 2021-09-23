import React from 'react'
import rulesImg from './../assets/image-rules.svg'
import closeIcon from './../assets/icon-close.svg'

const GameRules = ({ onClose }) => {
  return (
    <div className='modal'>
      <div className='game-rules'>
        <div className='game-rules_inner flex-block'>
          <div className='game-rules_header flex-block'>
            <h3 className='game-rules_title'>Rules</h3>
            <img
              onClick={onClose}
              src={closeIcon}
              alt='close icon'
              className='close-icon'
            />
          </div>
          <div>
            <img src={rulesImg} alt='rules' className='game-rules_image' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameRules
