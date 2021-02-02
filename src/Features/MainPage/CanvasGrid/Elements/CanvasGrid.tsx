import React, {FC, PropsWithChildren} from "react"
import css from "./CanvasGrid.module.scss"


export type CanvasGridProps = PropsWithChildren<{}>

const CanvasGrid: FC<CanvasGridProps> = ({children}) => {

  return (
    <div className={css.wrapper}>
      <div className={css.grid}>
        {children}
      </div>
    </div>
  )
}
export default CanvasGrid
