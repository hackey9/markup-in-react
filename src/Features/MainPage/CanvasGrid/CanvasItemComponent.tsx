import CanvasItem from "Features/MainPage/CanvasGrid/Elements/CanvasItem"
import React, {FC, PropsWithChildren} from "react"


export type CanvasItemComponentProps = PropsWithChildren<{
  category: string
  imageUrl: string
  name: string
}>

const CanvasItemComponent: FC<CanvasItemComponentProps> = ({name, category, imageUrl}) => {

  return (
    <CanvasItem
      name={name}
      category={category}
      imageUrl={imageUrl}
    />
  )
}
export default CanvasItemComponent
