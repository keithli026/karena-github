import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { DataProvider } from '../components/DataContext'

const Layout = () => {

  return (
    <DataProvider>
      <Header />
      <Outlet />
      <Footer />
    </DataProvider>
  )
}

export default Layout