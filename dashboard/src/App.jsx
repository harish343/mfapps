import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from "./login"
import Otpcard from "./Otpcard"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dashboard from './Dashboard'
import Captcha from "./Recaptch"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Login></Login>}>

          </Route>
          <Route path='/dashboard' element ={<Dashboard></Dashboard>}>

          </Route>
          <Route path='/otp' element ={<Otpcard></Otpcard>}>

</Route>
<Route path='/captcha' element ={<Captcha></Captcha>}>

</Route>
        </Routes>
      </BrowserRouter>  


    </>
  )
}

export default App
