import React, {FC, PropsWithChildren} from "react"
import css from "./Copyright.module.scss"



export type CopyrightProps = PropsWithChildren<{}>

const Copyright: FC<CopyrightProps> = ({children}) => {

  return (
    <div className={css.copyright}>
      {children}
    </div>
  )
}
export default Copyright
