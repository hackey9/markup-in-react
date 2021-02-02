import Line from "Components/Layout/Elements/Line"
import React, {FC} from "react"


/**
 * Add adaptive aside spacers
 */
const LayoutLine: FC = ({children}) => {

  return (
    <Line>
      {children}
    </Line>
  )
}
export default LayoutLine


