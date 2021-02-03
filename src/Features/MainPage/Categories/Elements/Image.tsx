import React, {FC, PropsWithChildren} from "react"
import css from "./Image.module.scss"



export type ImageProps = PropsWithChildren<{
  imageUrl: string
}>

const Image: FC<ImageProps> = ({imageUrl}) => {

  return (
    <div className={css.image} style={{backgroundImage: `url("${imageUrl}")`}}/>
  )
}
export default Image
