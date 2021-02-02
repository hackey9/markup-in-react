import LayoutWrapper from "Components/Layout/LayoutWrapper"
import HeaderStyled from "Components/Main/Elements/HeaderStyled"
import React, {FC} from "react"


/**
 * Universal main header.
 *
 * Includes margin-bottom.
 */
const Header: FC = ({children}) => {

  return (
    <LayoutWrapper>
      <HeaderStyled>
        {children}
      </HeaderStyled>
    </LayoutWrapper>

  )
}
export default Header
