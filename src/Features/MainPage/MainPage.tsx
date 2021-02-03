import HeaderComponent from "Components/Main/HeaderComponent"
import BannerComponent from "Features/MainPage/Banner/BannerComponent"
import CanvasGridComponent from "Features/MainPage/CanvasGrid/CanvasGridComponent"
import CanvasItemComponent from "Features/MainPage/CanvasGrid/CanvasItemComponent"
import CategoriesGridComponent from "Features/MainPage/Categories/CategoriesGridComponent"
import CategoryItemComponent from "Features/MainPage/Categories/CategoryItemComponent"
import React, {FC, PropsWithChildren} from "react"

import img1 from "./CanvasGrid/Elements/Assets/Canvas (1).png"
import img2 from "./CanvasGrid/Elements/Assets/Canvas (2).png"
import img3 from "./CanvasGrid/Elements/Assets/Canvas (3).png"
import img4 from "./CanvasGrid/Elements/Assets/Canvas (4).png"
import img5 from "./CanvasGrid/Elements/Assets/Canvas (5).png"
import img6 from "./CanvasGrid/Elements/Assets/Canvas (6).png"
import img7 from "./CanvasGrid/Elements/Assets/Canvas (7).png"
import img8 from "./CanvasGrid/Elements/Assets/Canvas (8).png"


export type MainPageProps = PropsWithChildren<{}>

const MainPage: FC<MainPageProps> = ({}) => {

  const mockItems = [
    {name: "Лев Шаман", category: "Фауна", imageUrl: String(img1)},
    {name: "Юрген Клопп", category: "Спорт", imageUrl: String(img2)},
    {name: "Ночной океан", category: "Природа", imageUrl: String(img3)},
    {name: "Ночной океан", category: "Природа", imageUrl: String(img4)},
    {name: "Ночной океан", category: "Природа", imageUrl: String(img5)},
    {name: "Ночной океан", category: "Природа", imageUrl: String(img6)},
    {name: "Lorem ipsum dolor sit amet, 123.", category: "Природа", imageUrl: String(img7)},
    {name: "Ночной океан", category: "Природа", imageUrl: String(img8)},
  ]

  return (
    <>

      <BannerComponent/>
      <HeaderComponent>Популярные картины</HeaderComponent>
      <CanvasGridComponent>
        {mockItems.map(({name, category, imageUrl}, i) => (
          <CanvasItemComponent
            name={name}
            category={category}
            imageUrl={imageUrl}
            key={i}
          />
        ))}
      </CanvasGridComponent>
      <HeaderComponent>Популярные категории</HeaderComponent>
      <CategoriesGridComponent>
        {mockItems.map(({name, imageUrl}) => (
          <CategoryItemComponent
            name={name}
            imageUrl={imageUrl}
          />
        ))}
      </CategoriesGridComponent>
      <BannerComponent/>

    </>
  )
}
export default MainPage
