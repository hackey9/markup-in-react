import Copyright from "Components/Footer/Elements/Copyright"
import FooterWhiteWrapper from "Components/Footer/Elements/FooterWhiteWrapper"
import KindLabel from "Components/Footer/Elements/KindLabel"
import Legal from "Components/Footer/Elements/Legal"
import NavContainer from "Components/Footer/Elements/NavContainer"
import NavItem from "Components/Footer/Elements/NavItem"
import FooterLayout, {FooterLayoutBot, FooterLayoutTop} from "Components/Footer/Elements/FooterLayout"
import SocialContainer from "Components/Footer/Elements/SocialContainer"
import SocialItem from "Components/Footer/Elements/SocialItem"
import SoulLogo from "Components/Footer/Elements/SoulLogo"
import LayoutLine from "Components/Layout/LayoutLine"
import LayoutWrapper from "Components/Layout/LayoutWrapper"
import React, {FC, PropsWithChildren} from "react"


export type FooterComponentProps = PropsWithChildren<{}>

const FooterComponent: FC<FooterComponentProps> = ({}) => {

  return (
    <FooterWhiteWrapper>
      <LayoutLine>
        <LayoutWrapper>

          <FooterLayout>

            <FooterLayoutTop>
              <SoulLogo/>
              <KindLabel/>
              <NavContainer>
                <NavItem>Каталог</NavItem>
                <NavItem>Акции</NavItem>
                <NavItem>Отзывы</NavItem>
                <NavItem>О нас</NavItem>
                <NavItem>Контакты</NavItem>
              </NavContainer>
              <SocialContainer>
                <SocialItem>Instagram</SocialItem>
                <SocialItem>WhatsApp</SocialItem>
              </SocialContainer>
            </FooterLayoutTop>

            <FooterLayoutBot>
              <Copyright>&copy; Интернет-магазин Душа, 2021</Copyright>
              <Legal>Правовая информация</Legal>
            </FooterLayoutBot>

          </FooterLayout>

        </LayoutWrapper>
      </LayoutLine>
    </FooterWhiteWrapper>
  )
}
export default FooterComponent
