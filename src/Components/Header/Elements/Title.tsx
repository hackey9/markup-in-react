import clsx from "clsx"
import React, {FC, PropsWithChildren} from "react"
import fonts from "Styles/Fonts"
import css from "./Title.module.scss"


export type TitleProps = PropsWithChildren<{}>

const Title: FC<TitleProps> = () => {

  return (
    <div className={clsx(css.title, fonts.main)}>
      Добрый
      <br/>
      арт-проект
    </div>
  )
}
export default Title
