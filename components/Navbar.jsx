"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Bars4Icon } from '@heroicons/react/24/solid'
import {XMarkIcon} from '@heroicons/react/24/solid'
const Navbar = () => {
 const [hidemenu,sethidemenu] = useState(false);
const handletoggle = ()=>{
  hidemenu ? sethidemenu(false):sethidemenu(true)
  
}  
const NavbarMenu = ()=>{
  return (
    <div className={ `  ${hidemenu ? ' flex flex-col items-center justify-evenly gap-10 z-9999 fixed ':'hidden'}  lg:flex` }>
    <li>
            <Link className='  lg:flex px-4 mx-4    ' href="/">Home</Link>
          </li>
          <li>
            <Link className='  lg:flex px-4 mx-4    ' href="/explore">Explore</Link>
          </li>
          <li>  
            <Link className='  lg:flex px-4 mx-4    ' href="/#">Log  In</Link>
          </li>
          <li>
            <Link className='  md:flex px-4 mx-4    ' href="/#">Sign Up</Link>
          </li>
          <li>
            <Link className='   md:flex px-4 mx-4    ' href="/#">Logout</Link>
          </li>
          <li>
           
          
          </li>

    </div>

  )
} 
  
  return (
    <div className='sticky  gradientcolor py-4 '>
      <div className={`flex  md:text-black md:mx-4 md:p-4 md:flex md:text-xl  justify-between  lg:text-3xl ${hidemenu ? 'min-h-screen z-1  justify-evenly ':'flex'} `}>
        <h1 className=' lg:bg-gradient-to-r from-inherit to to-blue-400 lg:hover:from-pink-500 lg:hover:to-blue-500'>
          <Link href={'/'}>Travel Log</Link> 
        </h1>

        <ul className={ ` ${hidemenu ? 'flex place-items-center gap-10':'hidden origin-top'}  lg:flex `} >
          <NavbarMenu />
        
        
        </ul>
        {/* Hamburger  */}
        
        

     
        <Bars4Icon  onClick={handletoggle} className={`h-10 ${hidemenu ? 'hidden':'flex'} lg:hidden`} /> 
        <XMarkIcon onClick={handletoggle} className={`h-10 ${hidemenu ? 'flex' :"hidden" }  lg:hidden`} />
                      
      </div>
       

    </div>                                                                                                                                                            
  )
}

export default Navbar