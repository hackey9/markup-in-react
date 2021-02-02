import React, {FC, PropsWithChildren} from "react"
import css from "./Search.module.scss"


export type SearchProps = PropsWithChildren<{}>

const Search: FC<SearchProps> = () => {

  return (
    <div className={css.container}>
      <input className={css.input} type={"text"}/>
      <div className={css.glass}/>
    </div>
  )
}
export default Search
