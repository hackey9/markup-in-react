import clsx from "clsx"
import React, {FC} from "react"
import fonts from "Styles/Fonts"
import css from "./Navigation.module.scss"


const Navigation: FC = () => {

  return (
    <div className={clsx(css.container, fonts.main)}>
      <div className={css.item}>Каталог</div>
      <div className={css.item}>Акции</div>
      <div className={css.item}>Отзывы</div>
      <div className={css.item}>О нас</div>
      <div className={css.item}>Контакты</div>
    </div>
  )
}
export default Navigation
