import clsx from "clsx"
import React, {FC} from "react"
import fonts from "Styles/Fonts"
import css from "./OpenLabel.module.scss"


const OpenLabel: FC = ({children}) => {

  return (
    <div className={clsx(css.label, fonts.main)}>
      {children}
    </div>
  )
}
export default OpenLabel
