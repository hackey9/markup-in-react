import Line from "Components/Layout/Elements/Line"
import React, {FC, PropsWithChildren} from "react"


export type LayoutContainerProps = PropsWithChildren<{}>

const LayoutLine: FC<LayoutContainerProps> = ({children}) => {

  return (
    <Line>
      {children}
    </Line>
  )
}
export default LayoutLine


