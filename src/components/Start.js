import React from "react"

const Start = props =>
  <div className="Start">
    <button onClick={() => _change(props.history, 0)}>Easy</button>
    <button onClick={() => _change(props.history, 1)}>Medium</button>
    <button onClick={() => _change(props.history, 2)}>Hard</button>
  </div>

const _change = (history, diff) => {
  fetch("http://minesweeper-api.herokuapp.com/games?difficulty=" + diff, {
    method: "POST"
  })
    .then(res => res.json())
    .then(data => history.push("/games/" + data.id))
}

export default Start
