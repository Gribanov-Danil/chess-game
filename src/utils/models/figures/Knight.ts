import { Figure, FiguresNames } from "./Figure"
import { Colors } from "../Colors"
import { Cell } from "../Cell"
import whiteLogo from "../../../assets/mdi_chess-knight.png"
import blackLogo from "../../../assets/mdi_chess-knight-1.png"

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
    this.name = FiguresNames.KNIGHT
  }

  moveFigure(target: Cell) {}
}
