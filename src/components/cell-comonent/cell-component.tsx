import { Cell } from "../../utils/models/Cell"
import { FC } from "react"
import uuid from "react-uuid"

interface ICell {
  cell: Cell
  isSelected: boolean
  onClick: (cell: Cell) => void
}

export const CellComponent: FC<ICell> = ({ cell, isSelected, onClick }) => {
  return (
    <div
      className={`cell ${cell.color} ${isSelected ? "selected" : ""}`}
      key={uuid()}
      onClick={() => onClick(cell)}
      style={{ background: cell.available && cell.figure ? "green" : "" }}
    >
      {cell.available && !cell.figure && <div className="available" />}
      {cell.figure?.logo && <img src={cell.figure.logo} alt="фигура" />}
    </div>
  )
}
