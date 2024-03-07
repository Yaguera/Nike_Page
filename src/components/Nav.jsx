import React from 'react'
import { headerLogo } from '../assets/images'
import { headerLogoWhite } from  '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () =>{
    setNav(!nav)
    console.log(nav)
  }

  return (
    <header className='padding-x py-8 bg-white fixed z-50 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/#">
            <img src={headerLogo} alt="logo"
            width={130}
            height={29}/>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map((item) =>(
                <li key={item.label}>
                    <a href={item.href} className='info-text'>
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
        <div onClick={handleNav} className='hidden max-lg:block cursor-pointer'>
            <img src={hamburger} alt="Hamburger"
            width={25}height={25}/>
        </div>
      </nav>
      <div className={nav ? 'fixed bg-coral-red z-30 h-screen w-[60vw] top-0 -left-0 shadow-[rgba(0,0,15,0.1)_10px_0px_4px_0px] ease-in-out duration-700 transform translate-x-[0%]' : 'fixed md:hidden h-screen top-0 w-[60vw] bg-[#000300] ease-in-out duration-500 transform -translate-x-[120%]'}>
          <ul className=''>
              <a href="/#">
                  <img className='py-6 px-4 size-40' src={headerLogoWhite} alt="logo"
                  width={130}
                  height={29}
                  />
              </a>
              {navLinks.map((item) =>(
                  <li key={item.label} className='flex justify-start p-4 border-b border-red text-3xl'>
                      <a onClick={handleNav} href={item.href} className='  text-white font-palanquin font-semibold'>
                          {item.label}
                      </a>
                  </li>
              ))}
          </ul>
        </div>
    </header>
  )
}

export default Nav