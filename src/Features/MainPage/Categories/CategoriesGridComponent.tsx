import React, {FC} from "react"
import CategoriesGrid from "./Elements/CategoriesGrid"


const CategoriesGridComponent: FC = ({children}) => {

  return (
    <CategoriesGrid>
      {children}
    </CategoriesGrid>
  )
}
export default CategoriesGridComponent
