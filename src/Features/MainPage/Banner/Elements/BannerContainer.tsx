import React, {FC} from "react"
import css from "./BannerContainer.module.scss"



const BannerContainer: FC = ({children}) => {

  return (
    <div className={css.container}>
      {children}
    </div>
  )
}
export default BannerContainer
