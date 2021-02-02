import React, {FC, PropsWithChildren} from "react"
import css from "./VerticalLayout.module.scss"



export type VerticalLayoutProps = PropsWithChildren<{}>

const VerticalLayout: FC<VerticalLayoutProps> = ({children}) => {

  return (
    <div className={css.layout}>
      {children}
    </div>
  )
}
export default VerticalLayout
