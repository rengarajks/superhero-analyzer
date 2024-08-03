import React from 'react'
import Marques from './Marques'
import HeroTexts from './HeroTexts'


function HeroSection() {
  return (
    <>
    
    
    <div className='grid grid-cols-2 text-white' >
        
        <div className='mt-4'>
            <HeroTexts/>
        </div>

        
        <div className=''>
        <Marques/>
        </div>

        
    </div>
    </>
  )
}

export default HeroSection