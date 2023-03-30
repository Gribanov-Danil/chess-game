import { Cell } from "./Cell"
import { Colors } from "./Colors"
import { Pawn } from "./figures/Pawn"
import { King } from "./figures/King"
import { Queen } from "./figures/Queen"
import { Rook } from "./figures/Rook"
import { Knight } from "./figures/Knight"
import { Bishop } from "./figures/Bishop"

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

  public getCells(x: number, y: number) {
    return this.cells[x][y]
  }

  private addKings() {
    new King(Colors.WHITE, this.getCells(4, 7))
    new King(Colors.BLACK, this.getCells(4, 0))
  }
  private addQueens() {
    new Queen(Colors.WHITE, this.getCells(3, 7))
    new Queen(Colors.BLACK, this.getCells(3, 0))
  }
  private addRooks() {
    new Rook(Colors.WHITE, this.getCells(0, 7))
    new Rook(Colors.WHITE, this.getCells(7, 7))
    new Rook(Colors.BLACK, this.getCells(0, 0))
    new Rook(Colors.BLACK, this.getCells(7, 0))
  }
  private addKnights() {
    new Knight(Colors.WHITE, this.getCells(1, 7))
    new Knight(Colors.WHITE, this.getCells(6, 7))
    new Knight(Colors.BLACK, this.getCells(1, 0))
    new Knight(Colors.BLACK, this.getCells(6, 0))
  }
  private addBishops() {
    new Bishop(Colors.WHITE, this.getCells(2, 7))
    new Bishop(Colors.WHITE, this.getCells(5, 7))
    new Bishop(Colors.BLACK, this.getCells(2, 0))
    new Bishop(Colors.BLACK, this.getCells(5, 0))
  }
  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.WHITE, this.getCells(i, 6))
      new Pawn(Colors.BLACK, this.getCells(i, 1))
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
