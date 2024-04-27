
import React from 'react'

function NavLogo({navLogo :{navLink,navText,className}}) {
    
     return (
   <>
    <a href="#"  className='flex gap-4 justify-center items-center'> <img src={navLink} className={className}/><span className='font-medium text-3xl'>{navText}</span></a>
    
    </>
  )
   
}

export default NavLogo