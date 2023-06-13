"use client"
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
    <div className={ `  ${hidemenu ? ' flex flex-col items-center justify-evenly gap-10 ':'hidden'}  lg:flex` }>
    <li>
            <a className='  lg:flex px-4 mx-4    ' href="#">Home</a>
          </li>
          <li>
            <a className='  lg:flex px-4 mx-4    ' href="#">Explore</a>
          </li>
          <li>  
            <a className='  lg:flex px-4 mx-4    ' href="#">Log  In</a>
          </li>
          <li>
            <a className='  md:flex px-4 mx-4    ' href="#">Sign Up</a>
          </li>
          <li>
            <a className='   md:flex px-4 mx-4    ' href="#">Logout</a>
          </li>
          <li>
           
          
          </li>

    </div>

  )
} 
  
  return (
    <div className='sticky bg-gradient-to-r   from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  py-4 '>
      <div className={`flex  md:text-black md:mx-4 md:p-4 md:flex md:text-xl  justify-between  lg:text-3xl ${hidemenu ? 'min-h-screen z-1  justify-evenly ':'flex'} `}>
        <h1 className=' lg:bg-gradient-to-r from-inherit to to-blue-400 lg:hover:from-pink-500 lg:hover:to-blue-500'>Travel Log</h1>

        <ul className={ ` ${hidemenu ? 'flex place-items-center gap-10':'hidden'}  lg:flex `} >
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