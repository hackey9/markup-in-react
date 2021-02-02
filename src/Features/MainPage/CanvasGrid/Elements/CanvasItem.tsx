import React, {CSSProperties, FC, PropsWithChildren} from "react"
import css from "./CanvasItem.module.scss"


export type CanvasItemProps = PropsWithChildren<{
  category: string
  imageUrl: string
  name: string
  onSelectClick?: () => void
  onFollow?: () => void
}>

const CanvasItem: FC<CanvasItemProps> = ({imageUrl, category, name}) => {

  return (
    <div className={css.box}>
      <div className={css.flex}>
        <div className={css.image} style={{backgroundImage: `url("${imageUrl}")`} as CSSProperties}/>
        <div className={css.category}>{category}</div>
        <div className={css.name}>{name}</div>
        {/* button */}
      </div>
      <div className={css.follow}/>
    </div>
  )
}
export default CanvasItem
