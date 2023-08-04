import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";


const userName = "user2";

const App2 = () => {

  const [data, setData] = useState([]);  // default value is null 

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:3000/subscribe");
    eventSource.addEventListener("message", handleReceiveMessage);
    return () => {
      eventSource.removeEventListener("message", handleReceiveMessage);
      eventSource.close();
    };
  }, []);

  const handleReceiveMessage = (event) => {
    const eventData = JSON.parse(event.data);
   
    setData(eventData);

  };

  const handleSendMessage = (userinfo) => {

    axios.post("http://localhost:3000/message", userinfo);  // sending post request containg json
    console.log("userinfo", userinfo)

  };



  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // handleSendMessage(); // Call the function to send the message
    const { value } = event.target.dataset;

    if (value == "user1") {
      let userinfo = {
        user: "rahul diwakar",
        occupation: "softwaredeveloper"

      }
      handleSendMessage(userinfo)
    }
    if (value == "user2") {
      let userinfo = {
        user: "mayank diwakar",
        occupation: "databaseenginner"

      }
      handleSendMessage(userinfo)
    }
    if (value == "user3") {
      let userinfo = {
        user: "akshay diwakar",
        occupation: "frontendenginner"

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

<body>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-green-500 text-white rounded-lg p-8 shadow-md">
      <h1 class="text-2xl font-bold mb-4">Money Transferred Successfully!</h1>
      <p class="text-lg mb-6">Your transaction of {data.price} has been successfully transferred to the recipient.</p>
      <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Close</button>
    </div>
  </div>
</body>



    </>
  );
};

export default App2;