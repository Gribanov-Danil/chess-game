import { Colors } from "../Colors"
import Logo from "../../../assets/mdi_chess-king-1.png"
import { Cell } from "../Cell"
import uuid from "react-uuid"

export enum FiguresNames {
  FIGURE = "figure",
  KING = "king",
  QUEEN = "queen",
  ROOK = "rook",
  KNIGHT = "knight",
  BISHOP = "bishop",
  PAWN = "pawn",
}

export abstract class Figure {
  color: Colors
  logo: typeof Logo | null
  cell: Cell
  name: FiguresNames
  id: string

  protected constructor(color: Colors, cell: Cell) {
    this.color = color
    this.cell = cell
    this.cell.figure = this
    this.logo = null
    this.name = FiguresNames.FIGURE
    this.id = uuid()
  }

  public canMove(target: Cell): boolean {
    return !(target.figure?.color === this.color || target.figure?.name === FiguresNames.KING)
  }

  abstract moveFigure(target: Cell): void
}
