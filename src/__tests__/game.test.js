import { Game } from '../game'

test('gutter game', () => {
  const game = new Game()
  expect(game.score()).toBe(0)
})
