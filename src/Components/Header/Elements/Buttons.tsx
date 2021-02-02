import clsx from "clsx"
import React, {FC, PropsWithChildren} from "react"
import css from "./Buttons.module.scss"


export type ButtonsProps = PropsWithChildren<{}>

const Buttons: FC<ButtonsProps> = ({}) => {

  return (
    <div className={css.container}>

      <div className={clsx(css.item, css.iconStar)}>
        <div className={css.itemCount}>10</div>
      </div>

      <div className={clsx(css.item, css.iconCart)}>
        <div className={css.itemCount}>5</div>
      </div>

      <div className={clsx(css.item, css.iconUser)}/>

      <div className={clsx(css.item, css.iconNav)}/>

    </div>
  )
}
export default Buttons
