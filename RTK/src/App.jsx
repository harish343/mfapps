import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useGetUsersQuery } from "./services/users";
import User from "./services/user"
import {BrowserRouter, Routes,Route,Link} from "react-router-dom"
import Rtk from "./services/rtk"
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
      <div><Rtk/>
      <Link to="/user">Simple</Link>
      </div>
  }
    
     />
     <Route path='/user' element={
           <div><User/>
           <Link to="/">RTK</Link>
           </div>
      
    } />
    
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
