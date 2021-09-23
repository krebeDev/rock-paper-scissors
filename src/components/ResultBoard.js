import React, { useEffect, useState } from 'react'
import Button from './Button'
import Shape from './Shape'

const ResultBoard = ({ userPick, systemPick, winner, reset }) => {
  const [display, setDisplay] = useState(false)
  const verdict =
    winner === 'user' ? 'You Won' : winner === 'system' ? 'You Lost' : 'Draw'

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='result-board'>
      <div
        className={`result-board_summary ${
          winner === 'user' && 'winner-badge'
        }`}
      >
        <p className='pick'>You Picked</p>
        <Shape name={userPick} />
      </div>
      {display && (
        <>
          <div className='result-board_verdict-box'>
            <p className='verdict'>{verdict}</p>
            <Button
              title='Play Again'
              variantClass='btn--replay'
              onClick={reset}
            />
          </div>
          <div
            className={`result-board_summary ${
              winner === 'system' && 'winner-badge'
            }`}
          >
            <p className='pick'>The House Picked</p>
            <Shape name={systemPick} />
          </div>{' '}
        </>
      )}
    </div>
  )
}

export default ResultBoard
