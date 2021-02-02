import React, {FC, PropsWithChildren, ReactNode} from "react"
import css from "./HeaderContainer.module.scss"


export type HeaderContainerProps = PropsWithChildren<{
  logo?: ReactNode
  title?: ReactNode
  nav?: ReactNode
  search?: ReactNode
  buttons?: ReactNode
}>

const HeaderContainer: FC<HeaderContainerProps> = ({logo, title, nav, search, buttons}) => {

  return (
    <div className={css.container}>
      <div className={css.logo}>{logo}</div>
      <div className={css.title}>{title}</div>
      <div className={css.nav}>{nav}</div>
      <div className={css.search}>{search}</div>
      <div className={css.buttons}>{buttons}</div>
    </div>
  )
}
export default HeaderContainer


export const HeaderWrapper: FC = ({children}) => {

  return (
    <div className={css.wrapper}>
      {children}
    </div>
  )
}
