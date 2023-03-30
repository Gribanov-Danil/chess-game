import { Figure, FiguresNames } from "./Figure"
import { Colors } from "../Colors"
import { Cell } from "../Cell"
import whiteLogo from "../../../assets/mdi_chess-queen.png"
import blackLogo from "../../../assets/mdi_chess-queen-1.png"

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
    this.name = FiguresNames.QUEEN
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false
    if (this.cell.isEmptyVertical(target)) return true
    if (this.cell.isEmptyHorizontal(target)) return true
    return this.cell.isEmptyDiagonal(target)
  }
  moveFigure(target: Cell) {}
}
