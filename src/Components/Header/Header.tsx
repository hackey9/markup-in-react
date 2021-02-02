import HeaderContainer from "Components/Header/Elements/HeaderContainer"
import HeaderWrapper from "Components/Header/Elements/HeaderWrapper"
import Logo from "Components/Header/Elements/Logo"
import Title from "Components/Header/Elements/Title"
import LayoutLine from "Components/Layout/LayoutLine"
import LayoutWrapper from "Components/Layout/LayoutWrapper"
import React, {FC} from "react"
import Buttons from "./Elements/Buttons"
import Navigation from "./Elements/Navigation"
import Search from "./Elements/Search"


/**
 * A complete responsive header
 */
const Header: FC = () => {

  return (
    <HeaderWrapper>
      <LayoutWrapper>
        <LayoutLine>

          <HeaderContainer
            logo={<Logo/>}
            title={<Title/>}
            nav={<Navigation/>}
            search={<Search/>}
            buttons={<Buttons/>}
          />

        </LayoutLine>
      </LayoutWrapper>
    </HeaderWrapper>


  )
}
export default Header
