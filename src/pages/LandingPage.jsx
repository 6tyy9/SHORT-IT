import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Form } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold'>
        The Only URL Shortener <br/>You'll Ever Need!🤌 
      </h2>
      <form className='sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2'>
        <Input/>
      <Button>Shorten!</Button>
      </form>
      <img src='/banner.jpeg' alt='Banner' className='w-full my-11 md:px-11' />
    </div>
  )
}

export default LandingPage