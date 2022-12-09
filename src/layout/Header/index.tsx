import React from 'react'
import Logo from '../../components/Logo'
import NavBar from '../../components/NavBar'

const Header = () => {
  return (
    <div className='bg-dark-500 h-16 flex items-center justify-between px-40 max-md:px-5 custom-shadow'>
      <Logo />
      <NavBar />
    </div>
  )
}

export default Header