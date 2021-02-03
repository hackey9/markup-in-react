import clsx from "clsx"
import React, {FC} from "react"
import fonts from "Styles/Fonts"
import css from "./Name.module.scss"


const Name: FC = ({children}) => {

  return (
    <div className={clsx(css.label, fonts.title)}>
      {children}
    </div>
  )
}
export default Name
