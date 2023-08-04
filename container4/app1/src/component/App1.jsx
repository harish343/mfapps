import React, { useState, useEffect } from "react";
import axios from "axios";

const userName = "user1";

const App = () => {
  const [data, setData] = useState([]);
  const [messageInput, setMessageInput] = useState("");

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
    setData((data) => data.concat(eventData));
  };

  const handleSendMessage = (productinfo) => {
    axios.post("http://localhost:3000/message",productinfo);  // sending post request containg json
    console.log("userinfo",productinfo)
    setMessageInput(""); // Clear the input field after sending the message
  };

  const handleChange = (event) => {
    setMessageInput(event.target.value);
  };

 
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // handleSendMessage(); // Call the function to send the message
    const {value} = event.target.dataset;
   
    if(value=="product1"){
       let productinfo={
        price:"₹200",

        }
        handleSendMessage(productinfo)
    }
    if(value=="product2"){
        let productinfo={
            price:"₹300",
 
         }
         handleSendMessage(productinfo)
     }
     if(value=="product3"){
        let productinfo={
                 price:"₹400",
               
 
         }
         handleSendMessage(productinfo)
     }
  };
  return (
    <>
      <div className="App">

        <div class="bg-gray-900 py-16">
          <div class="container mx-auto px-4">

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-white rounded-lg shadow-lg p-8">
                <div class="relative overflow-hidden">
                  <img class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Product" />
                  <div class="absolute inset-0 bg-black opacity-40"></div>
                  <div class="absolute inset-0 flex items-center justify-center">

                  </div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">Shoes</h3>
                <p class="text-gray-500 text-sm mt-2"></p>
                <div class="flex items-center justify-between mt-4">
                  <span class="text-gray-900 font-bold text-lg">₹200</span>
                  <button data-value="product1" onClick={handleSubmit} class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Buy</button>
                </div>
              </div>
              <div class="bg-white rounded-lg shadow-lg p-8">
                <div class="relative overflow-hidden">
                  <img class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Product" />
                  <div class="absolute inset-0 bg-black opacity-40"></div>
                  <div class="absolute inset-0 flex items-center justify-center">

                  </div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">Shirt</h3>
                <p class="text-gray-500 text-sm mt-2"></p>
                <div class="flex items-center justify-between mt-4">
                  <span class="text-gray-900 font-bold text-lg">₹300</span>
                  <button data-value="product2" onClick={handleSubmit} class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Buy</button>
                </div>
              </div>
              <div class="bg-white rounded-lg shadow-lg p-8">
                <div class="relative overflow-hidden">
                  <img class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Product" />
                  <div class="absolute inset-0 bg-black opacity-40"></div>
                  <div class="absolute inset-0 flex items-center justify-center">

                  </div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">Jeans</h3>
                <p class="text-gray-500 text-sm mt-2"></p>
                <div class="flex items-center justify-between mt-4">
                  <span class="text-gray-900 font-bold text-lg">₹400</span>
                  <button data-value="product3" onClick={handleSubmit} class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Buy</button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default App;
