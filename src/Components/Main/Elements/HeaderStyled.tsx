import React, {FC} from "react"
import css from "./HeaderStyled.module.scss"


const HeaderStyled: FC = ({children}) => {

  return (
    <div className={css.header}>
      {children}
    </div>
  )
}
export default HeaderStyled
