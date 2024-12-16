import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { LinkIcon, LogOut } from 'lucide-react';

const Header = () => {

  const navigate =useNavigate();
  const user=false;
  return (
   <nav className='py-4 flex justify-between items-center'>
    <Link to='/'>
    <img src='/logoDark.png' className='h-16' alt='Short-It logo'></img>
    </Link>
     <div>
      {!user ?
      <Button onClick={()=>navigate('/auth')} className='rounded-xl' >Login</Button>
       : (
        <DropdownMenu>
  <DropdownMenuTrigger className='w-10 rounded-full overflow-hidden'>
    <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Shivanshu Rawat</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <LinkIcon className='mr-1 h-4 w-4'/>
      <span>My Links</span>
      </DropdownMenuItem>
    <DropdownMenuItem className="text-red-500">
      <LogOut className='mr-1 h-4 w-4'/>
      <span>Log out</span>
      </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

       )}
      </div>  
   </nav>
  )
}

export default Header