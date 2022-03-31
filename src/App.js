import React from 'react'
import Board from './Components/Board'
import Card from './Components/Card'
import './App.css';
const App = () => {
  return (
    <>
      <main className="flexbox">
        <Board id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true">
            <p>Card One</p>
          </Card>
        </Board>
        <Board id="board-2" className="board">
          <Card id="card-2" className="card" draggable="true">
            <p>Card Two</p>
          </Card>
        </Board>
      </main>
    </>
  )
}

export default App