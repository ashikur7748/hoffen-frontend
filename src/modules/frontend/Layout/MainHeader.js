import React from 'react'
import Footer from './Footer'
import TopNavBar from './TopNavBar'

export default function MainHeader({children}) {

  return (
    <>
        <TopNavBar />
        {children}
        <Footer />
    </>
  )
}
