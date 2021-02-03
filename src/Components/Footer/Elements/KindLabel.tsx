import React, {FC} from "react"
import css from "./KindLabel.module.scss"



const KindLabel: FC = () => {

  return (
    <div className={css.label}>
      Добрый
      <br/>
      арт-проект
    </div>
  )
}
export default KindLabel
