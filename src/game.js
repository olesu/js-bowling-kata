export class Game {
  constructor(rolls = Array(21).fill(0), currentRoll = 0) {
    this._rolls = rolls
    this._currentRoll = currentRoll
  }

  get score() {
    function scoreAccumulator(rolls) {
      return ({ score, frameIndex }) => {
        function spareBonus() {
          return 10 + rolls[frameIndex + 2]
        }

        function scoreFrorFrame() {
          return rolls[frameIndex] + rolls[frameIndex + 1]
        }

        function isSpare() {
          return rolls[frameIndex] + rolls[frameIndex + 1] === 10
        }

        var score

        if (isSpare()) {
          score = score + spareBonus()
        } else {
          score = score + scoreFrorFrame()
        }

        return {
          score: score,
          frameIndex: frameIndex + 2,
        }
      }
    }

    const { score } = Array(10)
      .fill(0)
      .reduce(scoreAccumulator(this._rolls), { score: 0, frameIndex: 0 })

    return score
  }

  roll(pins) {
    const rollsCopy = [...this._rolls]
    rollsCopy[this._currentRoll] = pins
    return new Game(rollsCopy, this._currentRoll + 1)
  }
}
