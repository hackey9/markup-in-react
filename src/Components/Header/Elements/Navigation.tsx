import React, {FC} from "react"
import css from "./Navigation.module.scss"


const Navigation: FC = () => {

  return (
    <div className={css.container}>
      <div className={css.item}>Каталог</div>
      <div className={css.item}>Акции</div>
      <div className={css.item}>Отзывы</div>
      <div className={css.item}>О нас</div>
      <div className={css.item}>Контакты</div>
    </div>
  )
}
export default Navigation
