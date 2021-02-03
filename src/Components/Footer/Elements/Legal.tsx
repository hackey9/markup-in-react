import clsx from "clsx"
import React, {FC, PropsWithChildren} from "react"
import fonts from "Styles/Fonts"
import css from "./Legal.module.scss"



export type LegalProps = PropsWithChildren<{}>

const Legal: FC<LegalProps> = ({children}) => {

  return (
    <div className={clsx(css.legal, fonts.main)}>

      {children}
    </div>
  )
}
export default Legal
