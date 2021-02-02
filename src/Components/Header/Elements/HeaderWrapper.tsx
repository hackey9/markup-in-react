import css from "./HeaderWrapper.module.scss"
import React, {FC} from "react"


const HeaderWrapper: FC = ({children}) => {

  return (
    <div className={css.wrapper}>
      {children}
    </div>
  )
}
export default HeaderWrapper

