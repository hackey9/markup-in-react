import React, {FC, PropsWithChildren} from "react"
import css from "./Legal.module.scss"



export type LegalProps = PropsWithChildren<{}>

const Legal: FC<LegalProps> = ({children}) => {

  return (
    <div className={css.legal}>

      {children}
    </div>
  )
}
export default Legal
