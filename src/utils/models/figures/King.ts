import { Figure, FiguresNames } from "./Figure"
import { Colors } from "../Colors"
import { Cell } from "../Cell"
import whiteLogo from "../../../assets/mdi_chess-king.png"
import blackLogo from "../../../assets/mdi_chess-king-1.png"

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
    this.name = FiguresNames.KING
  }

  moveFigure(target: Cell) {}
}
