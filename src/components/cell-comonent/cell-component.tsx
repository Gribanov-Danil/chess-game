import { Cell } from "../../utils/models/Cell"
import { FC } from "react"
import uuid from "react-uuid"

interface ICell {
  cell: Cell
}

export const CellComponent: FC<ICell> = ({ cell }) => {
  return <div className={`cell ${cell.color}`} key={uuid()}></div>
}
