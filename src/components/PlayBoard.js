import React from 'react'
import Shape from './Shape'
import { SHAPES } from '../utilities/constants'

const PlayBoard = ({ handlePlay }) => {
  const renderPlayBoard = SHAPES.map((shape) => (
    <Shape name={shape} handlePlay={handlePlay} key={shape} />
  ))

  return (
    <div className='play-board'>
      <div className='play-board_inner'>{renderPlayBoard}</div>
    </div>
  )
}

export default PlayBoard
