import { Board } from "../../utils/models/Board"
import { Dispatch, FC, SetStateAction } from "react"
import uuid from "react-uuid"
import { CellComponent } from "../cell-comonent/cell-component"

interface IBoard {
  board: Board
  setBoard: Dispatch<SetStateAction<Board>>
}
export const BoardComponent: FC<IBoard> = ({ board, setBoard }) => {
  return (
    <div className="board">
      {board.cells.map((row) => (
        <div className="row" key={uuid()}>
          {row.map((cell) => (
            <CellComponent cell={cell} />
          ))}
        </div>
      ))}
    </div>
  )
}
