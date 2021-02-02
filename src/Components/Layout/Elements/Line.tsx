import clsx from "clsx"
import React, {FC, PropsWithChildren} from "react"
import css from "./Line.module.scss"


export type ContainerProps = PropsWithChildren<{}>

const Line: FC<ContainerProps> = ({children}) => {

  return (
    <div className={clsx(css.container)}>
      {children}
    </div>
  )
}
export default Line
