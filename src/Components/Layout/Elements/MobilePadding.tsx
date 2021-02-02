import React, {FC} from "react"
import css from "./MobilePadding.module.scss"


const MobilePadding: FC = ({children}) => {

  return (
    <div className={css.container}>
      {children}
    </div>
  )
}
export default MobilePadding
