import { Game } from '../game'

test('gutter game', () => {
  const rolls = rollMany(20, 0)
  const game = rolls.reduce(applyRoll, new Game())
  expect(game.score).toBe(0)
})

test('all ones', () => {
  const rolls = rollMany(20, 1)
  const game = rolls.reduce(applyRoll, new Game())
  expect(game.score).toBe(20)
})

test('one spare', () => {
  const rolls = [...rollSpare(), 3, ...rollMany(17, 0)]
  const game = rolls.reduce(applyRoll, new Game())

  expect(game.score).toBe(16)
})

function applyRoll(game, pins) {
  return game.roll(pins)
}

function rollMany(n, pins) {
  return Array(n).fill(pins)
}

function rollSpare() {
  return [5, 5]
}
