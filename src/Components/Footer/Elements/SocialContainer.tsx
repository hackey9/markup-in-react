import React, {FC, PropsWithChildren} from "react"
import css from "./SocialContainer.module.scss"



export type SocialLinksProps = PropsWithChildren<{}>

const SocialContainer: FC<SocialLinksProps> = ({children}) => {

  return (
    <div className={css.list}>
      {children}
    </div>
  )
}
export default SocialContainer
