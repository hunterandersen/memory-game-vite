import './App.css'
import MemoryGame from './components/MemoryGame'

import { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <MemoryGame />
      </div>
    )
  }
}
