import BannerContainer from "Features/MainPage/Banner/Elements/BannerContainer"
import React, {FC, PropsWithChildren} from "react"


export type BannerComponentProps = PropsWithChildren<{}>

const BannerComponent: FC<BannerComponentProps> = ({}) => {

  return (
    <BannerContainer>
    </BannerContainer>
  )
}
export default BannerComponent
