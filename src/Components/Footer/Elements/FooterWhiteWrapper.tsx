import React, {FC} from "react"
import css from "./FooterWhiteWrapper.module.scss"


const FooterWhiteWrapper: FC = ({children}) => {

  return (
    <div className={css.wrapper}>
      {children}
    </div>
  )
}
export default FooterWhiteWrapper
