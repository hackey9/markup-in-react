import HeaderContainer, {HeaderWrapper} from "Components/Header/Elements/HeaderContainer"
import Logo from "Components/Header/Elements/Logo"
import Title from "Components/Header/Elements/Title"
import LayoutLine from "Components/Layout/LayoutLine"
import React, {FC} from "react"
import Buttons from "./Elements/Buttons"
import Navigation from "./Elements/Navigation"
import Search from "./Elements/Search"


const Header: FC = () => {

  return (
    <HeaderWrapper>

      <LayoutLine>
        <HeaderContainer
          logo={<Logo/>}
          title={<Title/>}
          nav={<Navigation/>}
          search={<Search/>}
          buttons={<Buttons/>}
        />
      </LayoutLine>
    </HeaderWrapper>


  )
}
export default Header
