import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

render()
registerServiceWorker()

if (module.hot) {
  module.hot.accept('./components/App', render)
}
