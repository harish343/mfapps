import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useGetUsersQuery } from "./services/users";
import User from "./services/user"
import {BrowserRouter, Routes,Route,Link} from "react-router-dom"
import Rtk from "./services/rtk"
const RenderContent = ({ content }) => {
  return <div>{content}</div>;
};

function App() {
 
  const [content, setContent] = useState("Initial Content");
  const handleButtonClick = () => {
    
    setContent(<User/>);
  };
  const handleButtonClick2 = () => {
    
    
    setContent(<Rtk/>);
  };
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
      <div>
      <RenderContent content={content} />
      <button onClick={handleButtonClick}>simple api Content</button>
      <button onClick={handleButtonClick2}>RTK Content</button>
      <Link to="/user">Simple</Link>
     
      </div>
  }
    
     />
     <Route path='/user' element={
           <div>
                  <div style={{ display: 'flex' }}>
    <div style={{ flex: 1, padding: '20px', backgroundColor: '' }}>
      {/* <RemoteWrapper> */}
      <Rtk />
      {/* </RemoteWrapper> */}
    </div>
    <div style={{ flex: 1, padding: '20px', backgroundColor: '' }}>
      <User />
    </div>
  </div>
           <Link to="/">RTK</Link>
           </div>
      
    } />
    
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
