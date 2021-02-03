import clsx from "clsx"
import React, {FC, PropsWithChildren} from "react"
import fonts from "Styles/Fonts"
import css from "./Search.module.scss"


export type SearchProps = PropsWithChildren<{}>

const Search: FC<SearchProps> = () => {

  return (
    <div className={css.container}>
      <input className={clsx(css.input, fonts.main)} type={"text"}/>
      <div className={css.glass}/>
    </div>
  )
}
export default Search
