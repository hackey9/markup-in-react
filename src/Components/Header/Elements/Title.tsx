import React, {FC, PropsWithChildren} from "react"
import css from "./Title.module.scss"


export type TitleProps = PropsWithChildren<{}>

const Title: FC<TitleProps> = () => {

  return (
    <div className={css.title}>
      Добрый
      <br/>
      арт-проект
    </div>
  )
}
export default Title
