import { Figure, FiguresNames } from "./Figure"
import whiteLogo from "../../../assets/mdi_chess-bishop.png"
import blackLogo from "../../../assets/mdi_chess-bishop-1.png"
import { Colors } from "../Colors"
import { Cell } from "../Cell"

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
    this.name = FiguresNames.BISHOP
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false
    return this.cell.isEmptyDiagonal(target)
  }
  moveFigure(target: Cell) {}
}
