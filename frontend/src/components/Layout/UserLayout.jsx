import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Section/Header'
import Footer from '../Section/Footer'

function UserLayout() {
  return (
    <>
    {/* {Header} */}
    <Header/>
    {/* {Main content} */}
    <main>
      <Outlet/>
    </main>
    
    {/* {Footer} */}
    <Footer />
    
    
    </>
  )
}

export default UserLayout