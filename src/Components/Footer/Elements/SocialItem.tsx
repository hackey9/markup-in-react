import React, {FC, PropsWithChildren} from "react"
import css from "./SocialItem.module.scss"



export type SocialItemProps = PropsWithChildren<{}>

const SocialItem: FC<SocialItemProps> = ({children}) => {

  return (
    <div className={css.link}>
      {children}
    </div>
  )
}
export default SocialItem
