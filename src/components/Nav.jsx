import React, { useState } from 'react'
import Button from './Button';
import {
  Link
} from "react-router-dom";

const Nav = () => {
  // let Links = [
  //   { name: "HOME", link: "/" },
  //   { name: "ABOUT", link: "/about" },
  //   { name: "PROFILE", link: "/profile" },
  // ];
  let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full sticky top-0 left-0 ' >
      <div className='md:flex items-center justify-between bg-gray-900 py-4 md:px-10 px-7'>
        <div className=' text-white font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white-800'>
          <span className='text-3xl text-teal-400 mr-1 pt-2'>
            <ion-icon name="glasses"></ion-icon>
          </span>
          Ash Fashion
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white '>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={` md:flex md:items-center md:pb-0 pb-16 absolute md:static bg-gray-900  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {/* {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 '>
                <Link to={link} className='text-white  hover:text-gray-400 duration-500' >{link.name}</Link>
                <a href={link.link} className='text-white  hover:text-gray-400 duration-500' >{link.name}</a>
              </li>
            ))
          } */}

          <Link to="/">
            <li className='md:ml-8 text-xl md:my-0 my-7 '>HOME</li>
          </Link>
          <Link to="/about" className='md:ml-8 text-xl md:my-0 my-7 '>
            ABOUT
          </Link>
          <Link to="/profile">
            <li className='md:ml-8 text-xl md:my-0 my-7 '>PROFILE</li>
          </Link>
          <Link to="/product">
            <Button>SHOW NOW</Button>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Nav