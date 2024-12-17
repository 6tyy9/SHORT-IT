import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Auth = () => {
  const [searchParams]= useSearchParams()
  return (
    <div className='mt-36 flex flex-col items-center gap-10'>
      <h1 className='text-xl font-extrabold'>
        {searchParams.get("createNew")?"Hold up! Lets login first...":"Login / Signup"}
      </h1>
    </div>
  )
}

export default Auth