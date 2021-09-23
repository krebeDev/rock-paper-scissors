const calculateWinner = (userPick, systemPick) => {
  if (userPick === systemPick) return 'draw'

  return (userPick === 'paper' && systemPick === 'rock') ||
    (userPick === 'rock' && systemPick === 'scissors') ||
    (userPick === 'scissors' && systemPick === 'paper')
    ? 'user'
    : 'system'
}

export default calculateWinner
