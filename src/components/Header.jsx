import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Button } from './ui/button'

const Header = () => {

  const navigate =useNavigate()
  return (
   <nav className='py-4 flex justify-between items-center'>
    <Link to='/'>
    <img src='/logo.jpeg' className='h-16' alt='Short-It logo'></img>
    </Link>
     <div>
      <Button onClick={()=>navigate('/auth')}>Login</Button>
      </div>  
   </nav>
  )
}

export default Header