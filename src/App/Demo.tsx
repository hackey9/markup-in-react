import Header from "Components/Header/Header"
import HeaderComponent from "Components/Main/Header"
import Layout from "Components/Layout/Layout"
import Main from "Components/Main/Main"
import React, {FC} from "react"


const Demo: FC = () => {

  return (
    <Layout>
      <Header/>
      <Main>
        <HeaderComponent>Популярные картины</HeaderComponent>
      </Main>
    </Layout>
  )
}
export default Demo
