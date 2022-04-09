import { HiMenu, HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import logo from '../../../images/logo.png'
import { useState } from 'react'

const NavbarItem = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  )
}

const navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
      <nav className='w-full flex md:justify-center justify-between items-center p-3'>
        <div className='text-2xl font-bold text-white inline-flex'>
          <Link to='/'>
            <img src={logo} alt='logo' className='h-8 w-8 mr-4' />
            <span className='text-white'>
              blockwill
            </span>
            {/* <span className='text-gray-500'>
              .io
            </span> */}
          </Link>
        </div>

        <ul className='text-white md:flex hidden list-none flex-row justify-between item-center flex-initial mx-4'>
          {[
            'Contracts',
            'Transactions',
            'Wallets',
            'Settings'
          ].map((item, index) => (
            <Link to={`/${item.toLowerCase()}`} key={index} onClick={() => setToggleMenu(false)}>
              <NavbarItem key={item + index} title={item} classProps='text-white' />
            </Link>
          ))}

          {/* <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
            Login
          </li> */}
        </ul>

        <div className='flex relative'>
          {!toggleMenu && (
            <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
          )}

          {toggleMenu && (
            <ul
              className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
              flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
              '
            >
              <li className='text-xl w-full my-2'>
                <AiOutlineClose onClick={() => setToggleMenu(false)} className='absolute top-0 right-0 m-4 cursor-pointer' />
              </li>

              {[
                'Contracts',
                'Transactions',
                'Wallets',
                'Settings'
              ].map((item, index) => (
                <Link to={`/${item.toLowerCase()}`} key={index} onClick={() => setToggleMenu(false)}>
                  <NavbarItem key={item + index} title={item} classProps='my-2 text-lg' />
                </Link>
              ))}
            </ul>
          )}

        </div>
      </nav>
    </>
  )
}

export default navbar
