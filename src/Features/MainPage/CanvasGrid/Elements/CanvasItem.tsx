import clsx from "clsx"
import CanvasItemButton from "Features/MainPage/CanvasGrid/Elements/CanvasItemButton"
import React, {CSSProperties, FC, PropsWithChildren} from "react"
import fonts from "Styles/Fonts"
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
        <div className={clsx(css.category, fonts.main)}>{category}</div>
        <div className={clsx(css.name, fonts.header)}>{name}</div>
        <CanvasItemButton>Выбрать</CanvasItemButton>
      </div>
      <div className={css.follow}/>
    </div>
  )
}
export default CanvasItem
