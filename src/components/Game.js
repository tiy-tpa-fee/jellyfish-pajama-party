import React, {Component} from 'react'

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

  checkState = gameState => {
    if(gameState === "won") {
      return(
        <h1>You Won!</h1>
      )
    }
    if(gameState === "lost") {
      return(
        <h1>You Lost! Sucka!</h1>
      )
    }
  }

  clicked = (i, k) => {
    fetch(`http://minesweeper-api.herokuapp.com/games/${this.state.id}/check?row=${i}&col=${k}`, {
      method: 'POST'
    })
      .then(res => res.json())
      .then(data => this.setState(data))
  }

  leFlagged = (i, k, e) => {
    e.preventDefault()
    fetch(`http://minesweeper-api.herokuapp.com/games/${this.state.id}/flag?row=${i}&col=${k}`, {
      method: 'POST'
    })
      .then(res => res.json())
      .then(data => this.setState(data))
  }

  render() {
    const rows = this.state.board.map((row, i) => {
      return (
        <tr key={i}>
          {row.map((col, k) => {
            switch (col) {
              case ' ':
                return (
                  <td
                    onContextMenu={e => this.leFlagged(i, k, e)}
                    onClick={() => this.clicked(i, k)}
                    key={k}
                    className="unrevealed"
                  >
                    {col}
                  </td>
                )
              case '_':
                return (
                  <td key={k} className="revealed">
                    {col}
                  </td>
                )
              case '*':
                return (
                  <td key={k} className="bomb">
                    {col}
                  </td>
                )
              case 'F':
                return (
                  <td key={k} className="flagged">
                    {col}
                  </td>
                )
              case '@':
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
        {this.checkState(this.state.state)}
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
