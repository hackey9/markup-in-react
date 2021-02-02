import LayoutLine from "Components/Layout/LayoutLine"
import React, {FC, PropsWithChildren} from "react"


export type MainProps = PropsWithChildren<{}>

const Main: FC<MainProps> = ({children}) => {

  return (
    <LayoutLine>
      {children}
    </LayoutLine>
  )
}
export default Main
