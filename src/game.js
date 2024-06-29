export class Game {
  constructor() {
    this._score = 0
  }

  score() {
    return this._score
  }

  roll(pins) {
    this._score += pins
  }
}
