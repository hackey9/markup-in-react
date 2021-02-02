import React, {FC} from "react"
import css from "./GrowFlexContainer.module.scss"



const GrowFlexContainer: FC = ({children}) => {

  return (
    <div className={css.container}>
      {children}
    </div>
  )
}
export default GrowFlexContainer
