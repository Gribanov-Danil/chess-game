import { Colors } from "./Colors"
import { Figure } from "./figures/Figure"
import { Board } from "./Board"
import uuid from "react-uuid"

export class Cell {
  readonly x: number
  readonly y: number
  readonly color: Colors
  figure: Figure | null
  board: Board
  available: boolean
  id: string

  constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
    this.x = x
    this.y = y
    this.color = color
    this.figure = figure
    this.board = board
    this.available = false
    this.id = uuid()
  }

  public isEmpty() {
    return this.figure === null
  }

  public isEmptyVertical(target: Cell) {
    if (this.x !== target.x) {
      return false
    }

    const min = Math.min(this.y, target.y)
    const max = Math.max(this.y, target.y)
    for (let y = min + 1; y < max; y++) {
      if (!this.board.getCells(this.x, y).isEmpty()) {
        return false
      }
    }
    return true
  }
  public isEmptyHorizontal(target: Cell) {
    if (this.y !== target.y) {
      return false
    }

    const min = Math.min(this.x, target.x)
    const max = Math.max(this.x, target.x)
    for (let x = min + 1; x < max; x++) {
      if (!this.board.getCells(x, this.y).isEmpty()) {
        return false
      }
    }
    return true
  }
  public isEmptyDiagonal(target: Cell) {
    const absX = Math.abs(target.x - this.x)
    const absY = Math.abs(target.y - this.y)
    if (absX !== absY) return false

    const dx = this.x < target.x ? 1 : -1
    const dy = this.y < target.y ? 1 : -1
    for (let i = 1; i < absY; i++) {
      if (!this.board.getCells(this.x + dx * i, this.y + dy * i).isEmpty()) {
        return false
      }
    }
    return true
  }

  public isEnemy(target: Cell) {
    return target.figure ? this.figure?.color !== target.figure.color : false
  }

  public setFigure(figure: Figure) {
    this.figure = figure
    this.figure.cell = this
  }

  public moveFigure(target: Cell) {
    if (this.figure && this.figure.canMove(target)) {
      this.figure.moveFigure(target)
      target.setFigure(this.figure)
      this.figure = null
    }
  }
}
