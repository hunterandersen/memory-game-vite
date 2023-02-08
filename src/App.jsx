import reactLogo from './assets/react.svg'
import './App.css'
import MemoryGame from './components/MemoryGame'

import { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div> */}
        <h1>Memory Game</h1>
        <MemoryGame />
      </div>
    )
  }
}
