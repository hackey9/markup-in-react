import VerticalLayout from "Components/Layout/Elements/VerticalLayout"
import React, {FC} from "react"


/**
 * Uses flexbox vertical layout.
 *
 * With flexbox it is available to grow any content block (like <Main/>)
 */
const Layout: FC = ({children}) => {

  return (
    <VerticalLayout>
      {children}
    </VerticalLayout>
  )
}
export default Layout
