import clsx from "clsx"
import React, {FC} from "react"
import fonts from "Styles/Fonts"
import css from "./KindLabel.module.scss"



const KindLabel: FC = () => {

  return (
    <div className={clsx(css.label, fonts.main)}>
      Добрый
      <br/>
      арт-проект
    </div>
  )
}
export default KindLabel
