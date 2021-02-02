import React, { FC } from "react"
import logo from "./Assets/Logo.svg"
import css from "./Logo.module.scss"


const Logo: FC = () => {

  return (
    <div className={css.logo} style={{backgroundImage: `url(${logo})`}}/>
  )
}
export default Logo

