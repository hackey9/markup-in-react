import CanvasGrid from "Features/MainPage/CanvasGrid/Elements/CanvasGrid"
import React, {FC, PropsWithChildren} from "react"


export type CanvasGridProps = PropsWithChildren<{}>

const CanvasGridComponent: FC<CanvasGridProps> = ({children}) => {

  return (
    <CanvasGrid>
      {children}
    </CanvasGrid>
  )
}
export default CanvasGridComponent
