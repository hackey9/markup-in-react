import clsx from "clsx"
import React, {FC, PropsWithChildren} from "react"
import fonts from "Styles/Fonts"
import css from "./Buttons.module.scss"



export type ButtonsProps = PropsWithChildren<{}>

const Buttons: FC<ButtonsProps> = ({}) => {

  return (
    <div className={css.container}>

      <div className={clsx(css.item, css.iconStar)}>
        <div className={clsx(css.itemCount, fonts.main)}>10</div>
      </div>

      <div className={clsx(css.item, css.iconCart)}>
        <div className={clsx(css.itemCount, fonts.main)}>5</div>
      </div>

      <div className={clsx(css.item, css.iconUser)}/>

      <div className={clsx(css.item, css.iconNav)}/>

    </div>
  )
}
export default Buttons
