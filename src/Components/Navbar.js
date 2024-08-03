import React from 'react'

function Navbar() {
  return (
    <div className='fixed left-[40%]'>
      <div className='flex space-x-8 p-2 font-medium text-white'>
        <div className='hover:text-red-500'>Home</div>
        <div className='hover:text-red-500'>All Characters</div>
        <div className='hover:text-red-500'>Contact</div>
    </div>
    </div>
  )
}

export default Navbar