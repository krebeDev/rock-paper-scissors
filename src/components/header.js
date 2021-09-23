import React from 'react'
import logo from './../assets/logo.svg'

const Header = ({ score }) => {
  return (
    <header className='header-bar'>
      <div className='flex-block'>
        <div className='logo-wrapper'>
          <img src={logo} alt='rock-paper-scissors' className='logo' />
        </div>
        <div className='game-score'>
          <h3 className='game-score_title'>Score</h3>
          <p className='game-score_value'>{score}</p>
        </div>
      </div>
    </header>
  )
}

export default Header
