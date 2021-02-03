import React, {FC, PropsWithChildren} from "react"
import css from "./NavItem.module.scss"


export type NavItemProps = PropsWithChildren<{}>

const NavItem: FC<NavItemProps> = ({children}) => {

  return (
    <span className={css.item}>
      {children}
    </span>
  )
}
export default NavItem
