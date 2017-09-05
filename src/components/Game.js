import React, { Component } from "react"

class Game extends Component {
  state = {
    id: '',
    board: [],
    state: '',
    mines: '',
    difficulty: ''
  }

componentDidMount() {
  let url = 'http://minesweeper-api.herokuapp.com/games/'
  let id = this.props.match.params.id
  fetch(url + id).then(res => res.json()).then(data => this.setState(data))
}

  render() {
    const rows = this.state.board.map((row, i) => {
      return (
        <tr key={i}>
          {row.map((col, k) => {
            switch (col) {
              case " ":
                return (
                  <td key={k} className="unrevealed">
                    {col}
                  </td>
                )
              case "_":
                return (
                  <td key={k} className="revealed">
                    {col}
                  </td>
                )
              case "*":
                return (
                  <td key={k} className="bomb">
                    {col}
                  </td>
                )
              case "F":
                return (
                  <td key={k} className="flagged">
                    {col}
                  </td>
                )
              case "@":
                return (
                  <td key={k} className="flaggedBomb">
                    {col}
                  </td>
                )
              default:
                return (
                  <td key={k} className={`number-${col}`}>
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
