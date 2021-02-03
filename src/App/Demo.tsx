import FooterComponent from "Components/Footer/FooterComponent"
import Header from "Components/Header/Header"
import Layout from "Components/Layout/Layout"
import Main from "Components/Main/Main"
import MainPage from "Features/MainPage/MainPage"
import React, {FC} from "react"


const Demo: FC = () => {

  return (
    <Layout>
      <Header/>
      <Main>
        <MainPage/>
      </Main>
      <FooterComponent/>
    </Layout>
  )
}
export default Demo
