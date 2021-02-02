import LayoutLine from "Components/Layout/LayoutLine"
import ChildrenContainer from "Components/Main/Elements/ChildrenContainer"
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
        <ChildrenContainer>
          {children}
        </ChildrenContainer>
      </LayoutLine>
    </GrowFlexContainer>
  )
}
export default Main
