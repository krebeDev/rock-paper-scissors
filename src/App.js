import React from 'react'
import Header from './components/Header'
import PlayBoard from './components/PlayBoard'
import ResultBoard from './components/ResultBoard'
import GameRules from './components/GameRules'
import Button from './components/Button'
import calculateWinner from './utilities/calculateWinner'
import { SHAPES } from './utilities/constants.js'

class App extends React.Component {
  state = {
    userPick: '',
    systemPick: '',
    score: 0,
    showRules: false,
    isPlaying: false,
    winner: '',
  }

  componentDidMount() {
    const score = localStorage.getItem('score') || this.state.score
    this.setState({ score: score })
  }

  handlePlay = (userShape) => {
    let newScore = this.state.score
    const systemPick = SHAPES[Math.floor(Math.random() * SHAPES.length)]
    const winner = calculateWinner(userShape, systemPick)
    if (winner === 'user') {
      newScore++
    }
    if (winner === 'system') {
      newScore--
    }
    localStorage.setItem('score', newScore)

    this.setState({
      systemPick: systemPick,
      userPick: userShape,
      score: newScore,
      isPlaying: true,
      winner: winner,
    })
  }

  handleReset = () => {
    this.setState({ isPlaying: false })
  }

  render() {
    const { userPick, systemPick, score, showRules, isPlaying, winner } =
      this.state

    return (
      <>
        <Header score={score} />
        {isPlaying ? (
          <ResultBoard
            userPick={userPick}
            systemPick={systemPick}
            winner={winner}
            reset={this.handleReset}
          />
        ) : (
          <PlayBoard handlePlay={this.handlePlay} />
        )}

        <div className='rules-btn-box'>
          <Button
            title='Rules'
            variantClass='btn--rules'
            onClick={() => this.setState({ showRules: true })}
          />
        </div>
        {showRules && (
          <GameRules onClose={() => this.setState({ showRules: false })} />
        )}
      </>
    )
  }
}

export default App
