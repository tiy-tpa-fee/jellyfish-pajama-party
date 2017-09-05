import React, { Component } from "react"

class Game extends Component {
  state = {
    id: 240,
    board: [
      ["_", "_", "_", "_", "_", 1, " ", "*"],
      ["_", "_", "_", "_", 1, 2, "*", " "],
      ["_", "_", "_", "_", 1, "*", " ", " "],
      ["_", "_", "_", "_", 1, 1, " ", " "],
      [1, 1, 1, "_", "_", 1, " ", " "],
      [" ", "*", 1, "_", "_", 2, "*", "*"],
      [" ", " ", 1, 1, 1, 3, "*", "*"],
      ["*", " ", " ", " ", "*", " ", " ", " "]
    ],
    state: "lost",
    mines: 10,
    difficulty: 0
  }
  render() {
    const rows = this.state.board.map(row => {
      return (
        <tr>
          {row.map(col => {
            switch (col) {
              case " ":
                return (
                  <td className="unrevealed">
                    {col}
                  </td>
                )
              case "_":
                return (
                  <td className="revealed">
                    {col}
                  </td>
                )
              case "*":
                return (
                  <td className="bomb">
                    {col}
                  </td>
                )
              case "F":
                return (
                  <td className="flagged">
                    {col}
                  </td>
                )
              case "@":
                return (
                  <td className="flaggedBomb">
                    {col}
                  </td>
                )
              default:
                return (
                  <td className={`number-${col}`}>
                    {col}
                  </td>
                )
            }
          })}
        </tr>
      )
    })
    return (
      <div className="Game">
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Game
