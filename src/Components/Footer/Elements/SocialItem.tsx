import clsx from "clsx"
import React, {FC, PropsWithChildren} from "react"
import fonts from "Styles/Fonts"
import css from "./SocialItem.module.scss"



export type SocialItemProps = PropsWithChildren<{}>

const SocialItem: FC<SocialItemProps> = ({children}) => {

  return (
    <div className={clsx(css.link, fonts.main)}>
      {children}
    </div>
  )
}
export default SocialItem
