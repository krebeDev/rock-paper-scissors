import React from 'react'
import RockShape from './../assets/icon-rock.svg'
import PaperShape from './../assets/icon-paper.svg'
import ScissorsShape from './../assets/icon-scissors.svg'

const SHAPES_MAP = {
  rock: { icon: RockShape, shapeClass: 'shape_rock' },
  paper: { icon: PaperShape, shapeClass: 'shape_paper' },
  scissors: { icon: ScissorsShape, shapeClass: 'shape_scissors' },
}

const Shape = ({ handlePlay, name }) => {
  return (
    <div className={`shape-box ${name}-box`}>
      <button
        onClick={() => (handlePlay ? handlePlay(name) : null)}
        className={`shape-button ${SHAPES_MAP[name].shapeClass}`}
        id={name}
        title={name}
      >
        <img src={SHAPES_MAP[name].icon} alt={name} />
      </button>
    </div>
  )
}

export default Shape
