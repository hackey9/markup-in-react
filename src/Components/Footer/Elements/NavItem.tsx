import clsx from "clsx"
import React, {FC, PropsWithChildren} from "react"
import fonts from "Styles/Fonts"
import css from "./NavItem.module.scss"


export type NavItemProps = PropsWithChildren<{}>

const NavItem: FC<NavItemProps> = ({children}) => {

  return (
    <span className={clsx(css.item, fonts.main)}>
      {children}
    </span>
  )
}
export default NavItem
