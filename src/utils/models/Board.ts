import { Cell } from "./Cell"
import { Colors } from "./Colors"
import { Pawn } from "./figures/Pawn"

export class Board {
  cells: Cell[][] = []

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = []
      for (let j = 0; j < 8; j++) {
        row.push(
          (i + j) % 2 !== 0
            ? new Cell(this, i, j, Colors.BLACK, null)
            : new Cell(this, i, j, Colors.WHITE, null),
        )
      }
      this.cells.push(row)
    }
  }

  public gerCells(x: number, y: number) {
    return this.cells[x][y]
  }

  private addKings() {}
  private addQueens() {}
  private addRooks() {}
  private addKnights() {}
  private addBishops() {}
  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.WHITE, this.gerCells(i, 6))
      new Pawn(Colors.BLACK, this.gerCells(i, 1))
    }
  }

  public addFigures() {
    this.addKings()
    this.addQueens()
    this.addRooks()
    this.addKnights()
    this.addBishops()
    this.addPawns()
  }
}
