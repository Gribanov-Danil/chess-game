import { Figure } from "../../utils/models/figures/Figure"
import { FC } from "react"
import "./lost-figures.scss"

interface ILostFigures {
  title: string
  figures: Figure[]
}

export const LostFigures: FC<ILostFigures> = ({ figures, title }) => {
  return (
    <div className="lost">
      <h3>{title}</h3>
      {figures.map((figure) => (
        <div key={figure.id}>
          {figure.name}{" "}
          {figure.logo && <img src={figure.logo} width={20} height={20} alt={figure.name} />}
        </div>
      ))}
    </div>
  )
}
