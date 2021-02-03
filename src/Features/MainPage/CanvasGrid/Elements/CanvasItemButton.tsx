import clsx from "clsx"
import React, {FC, PropsWithChildren} from "react"
import fonts from "Styles/Fonts"
import css from "./CanvasItemButton.module.scss"


export type CanvasItemButtonProps = PropsWithChildren<{
  onClick?: () => void
}>

const CanvasItemButton: FC<CanvasItemButtonProps> = ({children, onClick}) => {

  return (
    <div className={clsx(fonts.main, css.button)} onClick={onClick}>
      {children}
    </div>
  )
}
export default CanvasItemButton
