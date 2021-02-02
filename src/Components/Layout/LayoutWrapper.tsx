import MobilePadding from "Components/Layout/Elements/MobilePadding"
import React, {FC} from "react"


/**
 * Adds wrapper on mobile
 */
const LayoutWrapper: FC = ({children}) => {

  return (
    <MobilePadding>
      {children}
    </MobilePadding>
  )
}
export default LayoutWrapper
