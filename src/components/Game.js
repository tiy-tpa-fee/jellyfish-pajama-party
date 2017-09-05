import React from 'react'

const Game = () =>
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

export default Game
