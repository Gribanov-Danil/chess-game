import { Figure, FiguresNames } from "./Figure"
import { Colors } from "../Colors"
import { Cell } from "../Cell"
import whiteLogo from "../../../assets/mdi_chess-rook.png"
import blackLogo from "../../../assets/mdi_chess-rook-1.png"

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
    this.name = FiguresNames.ROOK
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false
    if (this.cell.isEmptyVertical(target)) return true
    return this.cell.isEmptyHorizontal(target)
  }
  moveFigure(target: Cell) {}
}
