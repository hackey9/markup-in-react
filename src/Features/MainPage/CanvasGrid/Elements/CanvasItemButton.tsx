import React, {FC, PropsWithChildren} from "react"
import css from "./CanvasItemButton.module.scss"



export type CanvasItemButtonProps = PropsWithChildren<{
  onClick?: () => void
}>

const CanvasItemButton: FC<CanvasItemButtonProps> = ({children, onClick}) => {

  return (
    <div className={css.button} onClick={onClick}>
      {children}
    </div>
  )
}
export default CanvasItemButton
