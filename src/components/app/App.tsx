import React, { useEffect, useState } from "react"
import "./App.scss"
import { BoardComponent } from "../board-component/board-component"
import { Board } from "../../utils/models/Board"
import { Player } from "../../utils/models/Player"
import { Colors } from "../../utils/models/Colors"

function App() {
  const [board, setBoard] = useState(new Board())
  const [whitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer)
  }, [])

  const togglePlayer = () =>
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)

  const restart = () => {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }
  return (
    <div className="app">
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        togglePlayer={togglePlayer}
      />
    </div>
  )
}

export default App
