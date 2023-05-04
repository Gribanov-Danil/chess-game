import { Figure, FiguresNames } from "./Figure"
import { Colors } from "../Colors"
import { Cell } from "../Cell"
import whiteLogo from "../../../assets/mdi_chess-pawn.png"
import blackLogo from "../../../assets/mdi_chess-pawn-1.png"

export class Pawn extends Figure {
  isFirstStep: boolean = true
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
    this.name = FiguresNames.PAWN
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false
    const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1
    const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2

    if (
      (target.y === this.cell.y + direction ||
        (this.isFirstStep && target.y === this.cell.y + firstStepDirection)) &&
      target.x === this.cell.x &&
      this.cell.board.getCells(target.x, target.y).isEmpty()
    ) {
      return true
    }
    return (
      target.y === this.cell.y + direction &&
      (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
      this.cell.isEnemy(target)
    )
  }

  moveFigure(target: Cell) {
    this.isFirstStep = false
  }
}
