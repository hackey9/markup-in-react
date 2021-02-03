import React, {FC} from "react"
import css from "./FooterLayout.module.scss"


const FooterLayout: FC = ({children}) => {

  return (
    <div className={css.container}>
      {children}
    </div>
  )
}
export default FooterLayout


export const FooterLayoutTop: FC = ({children}) => {

  return (
    <div className={css.top}>
      {children}
    </div>
  )
}

export const FooterLayoutBot: FC = ({children}) => {

  return (
    <div className={css.bot}>
      {children}
    </div>
  )
}
