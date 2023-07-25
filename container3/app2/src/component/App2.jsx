import React, { useState, useEffect , useCallback  } from "react";
import axios from "axios";


const userName = "user2";

const App2 = () => {
 
  

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:3000/subscribe");
    eventSource.addEventListener("message", handleReceiveMessage);
    return () => {
      eventSource.removeEventListener("message", handleReceiveMessage);
      eventSource.close();
    };
  }, []);

  const handleReceiveMessage = (event) => {  // recienve message for get status
    const eventData = JSON.parse(event.data);
    
  };

  const handleSendMessage = (userinfo) => {

    axios.post("http://localhost:3000/message",userinfo);  // sending post request containg json
    console.log("userinfo",userinfo)

  };



  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // handleSendMessage(); // Call the function to send the message
    const {value} = event.target.dataset;
   
    if(value=="user1"){
       let userinfo={
                user:"rahul diwakar",
                occupation:"softwaredeveloper"

        }
        handleSendMessage(userinfo)
    }
    if(value=="user2"){
        let userinfo={
                 user:"mayank diwakar",
                 occupation:"databaseenginner"
 
         }
         handleSendMessage(userinfo)
     }
     if(value=="user3"){
        let userinfo={
                 user:"akshay diwakar",
                 occupation:"frontendenginner"
 
         }
         handleSendMessage(userinfo)
     }
  };

  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prevState) => !prevState);
  }, []);

  return (
    <>
        
        <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">
              My Logo
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <div className="ml-3 relative">
                <button onClick={toggleDropdown} className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium focus:outline-none">
                  Users
                </button>
                {isDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <button data-value="user1" onClick={handleSubmit} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">User1</button>
                      <button data-value="user2"  onClick={handleSubmit} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">User2</button>
                      <button data-value="user3"  onClick={handleSubmit} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">User3</button>
                    </div>
                  </div>
                )}
              </div>
              <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          {/* Responsive menu button for small screens */}
          <div className="md:hidden">
            <button onClick={toggleDropdown} className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium focus:outline-none">
              <svg
                className={`w-6 h-6 ${isDropdownOpen ? 'hidden' : 'block'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${isDropdownOpen ? 'block' : 'hidden'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Responsive dropdown menu for small screens */}
        {isDropdownOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Home</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 1</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 2</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 3</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>    



    </>
  );
};

export default App2;