import clsx from "clsx"
import React, {FC, PropsWithChildren} from "react"
import fonts from "Styles/Fonts"
import css from "./Copyright.module.scss"



export type CopyrightProps = PropsWithChildren<{}>

const Copyright: FC<CopyrightProps> = ({children}) => {

  return (
    <div className={clsx(css.copyright, fonts.main)}>
      {children}
    </div>
  )
}
export default Copyright
