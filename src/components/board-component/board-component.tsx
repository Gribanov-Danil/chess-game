import { Board } from "../../utils/models/Board"
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react"
import uuid from "react-uuid"
import { CellComponent } from "../cell-comonent/cell-component"
import { Cell } from "../../utils/models/Cell"

interface IBoard {
  board: Board
  setBoard: Dispatch<SetStateAction<Board>>
}
export const BoardComponent: FC<IBoard> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  const onClick = (cell: Cell) => {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell)
      setSelectedCell(null)
    } else {
      setSelectedCell(cell)
    }
  }
  useEffect(() => {
    highlightCells()
  }, [selectedCell])

  const highlightCells = () => {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  const updateBoard = () => {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return (
    <div className="board">
      {board.cells.map((row) => (
        <div className="row" key={uuid()}>
          {row.map((cell) => (
            <CellComponent
              onClick={onClick}
              cell={cell}
              key={cell.id}
              isSelected={cell.x === selectedCell?.x && cell.y === selectedCell.y}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
