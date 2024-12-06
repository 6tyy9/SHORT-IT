import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './Layouts/AppLayout'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import Link from './pages/Link'
import Auth from './pages/Auth'
import RedirectLink from './pages/RedirectLink'


 const router= createBrowserRouter(
  createRoutesFromElements(
   <Route path ='/' element={<AppLayout/>}>
    <Route path ='' element={<LandingPage/>}/>
    <Route path ='dashboard' element={<Dashboard/>}/>
    <Route path ='link/:id' element={<Link/>}/>
    <Route path ='auth' element={<Auth/>}/>
    <Route path =':id' element={<RedirectLink/>}/>
    </Route>

  )
 )

 
 function App() {
  return <RouterProvider router={router}/>
 }

export default App
