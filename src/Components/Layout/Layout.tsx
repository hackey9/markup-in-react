import VerticalLayout from "Components/Layout/Elements/VerticalLayout"
import React, {FC, PropsWithChildren} from "react"


export type LayoutProps = PropsWithChildren<{}>

const Layout: FC<LayoutProps> = ({children}) => {

  return (
    <VerticalLayout>
      {children}
    </VerticalLayout>
  )
}
export default Layout
