import React from 'react'
import Image from 'next/image'


export const Navbar = () => {
  return (
   <>
   <div className='bg-cloud p-2 py-4'>
    <Image src="/logo.png" alt="Logo" width={150} height={60}/>

   </div>
   </>
  )
}
