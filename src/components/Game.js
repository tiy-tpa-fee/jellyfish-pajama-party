import React, { Component } from 'react'

class Game extends Component {
  state = {
    id: 240,
    board: [
      ['_', '_', '_', '_', '_', 1, ' ', '*'],
      ['_', '_', '_', '_', 1, 2, '*', ' '],
      ['_', '_', '_', '_', 1, '*', ' ', ' '],
      ['_', '_', '_', '_', 1, 1, ' ', ' '],
      [1, 1, 1, '_', '_', 1, ' ', ' '],
      [' ', '*', 1, '_', '_', 2, '*', '*'],
      [' ', ' ', 1, 1, 1, 3, '*', '*'],
      ['*', ' ', ' ', ' ', '*', ' ', ' ', ' ']
    ],
    state: 'lost',
    mines: 10,
    difficulty: 0
  }
  render() {
    return (
      <div className="Game">
        <table>
          <tbody>
            <tr>
              <td className="unrevealed"> </td>
              <td className="unrevealed"> </td>
              <td className="revealed number-8">8</td>
              <td className="flaggedBomb">@</td>
            </tr>
            <tr>
              <td className="revealed">_</td>
              <td className="revealed">_</td>
              <td className="revealed number-1">1</td>
              <td className="revealed number-2">2</td>
            </tr>
            <tr>
              <td className="unrevealed"> </td>
              <td className="revealed number-3">3</td>
              <td className="bomb">*</td>
              <td className="revealed number-4">4</td>
            </tr>
            <tr>
              <td className="flagged">F</td>
              <td className="revealed number-5">5</td>
              <td className="revealed number-6">6</td>
              <td className="revealed number-7">7</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Game
