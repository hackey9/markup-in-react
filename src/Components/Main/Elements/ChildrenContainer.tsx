import React, {FC} from "react"
import css from "./ChildrenContainer.module.scss"



const ChildrenContainer: FC = ({children}) => {

  return (
    <div className={css.container}>
      {children}
    </div>
  )
}
export default ChildrenContainer
