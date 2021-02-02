import LayoutLine from "Components/Layout/LayoutLine"
import GrowFlexContainer from "Components/Main/Elements/GrowFlexContainer"
import React, {FC} from "react"


/**
 * Container for main content
 *
 * Include top&bottom padding
 */
const Main: FC = ({children}) => {

  return (
    <GrowFlexContainer>
      <LayoutLine>
        {children}
      </LayoutLine>
    </GrowFlexContainer>
  )
}
export default Main
