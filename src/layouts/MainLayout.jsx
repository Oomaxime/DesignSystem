import { Outlet } from "react-router-dom"

import Header from '../components/MainLayout/Header'
import Main from '../components/MainLayout/Main'
import Footer from '../components/MainLayout/Footer'


export default function MainLayout() {
  return (
    <>
        <Header />
        <Main>
            <Outlet />
        </Main>
        <Footer />
    </>
  )
}
