import React, { useEffect, useState } from "react"
import "./App.scss"
import { BoardComponent } from "../board-component/board-component"
import { Board } from "../../utils/models/Board"

function App() {
  const [board, setBoard] = useState(new Board())

  useEffect(() => {
    restart()
  }, [])

  const restart = () => {
    const newBoard = new Board()
    newBoard.initCells()
    setBoard(newBoard)
  }
  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  )
}

export default App
