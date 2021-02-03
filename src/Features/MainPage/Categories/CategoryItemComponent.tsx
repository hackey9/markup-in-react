import Box from "Features/MainPage/Categories/Elements/Box"
import Image from "Features/MainPage/Categories/Elements/Image"
import Name from "Features/MainPage/Categories/Elements/Name"
import OpenLabel from "Features/MainPage/Categories/Elements/OpenLabel"
import React, {FC, PropsWithChildren} from "react"


export type CategoryItemProps = PropsWithChildren<{
  name: string
  imageUrl: string
}>

const CategoryItemComponent: FC<CategoryItemProps> = ({name,imageUrl}) => {

  return (
    <Box>
      <Image imageUrl={imageUrl}/>
      <Name>{name}</Name>
      <OpenLabel>Открыть категорию</OpenLabel>
    </Box>
  )
}
export default CategoryItemComponent
