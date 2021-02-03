import React, {FC} from "react"
import css from "./Box.module.scss"


const Box: FC = ({children}) => {

  return (
    <div className={css.box}>
      {children}
    </div>
  )
}
export default Box
