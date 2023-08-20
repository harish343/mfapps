import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from 'react-router-dom';
const ReCaptach = () => {
  const [verified, setVerified] = useState(false);   // State to manage reCAPTCHA verification
  const navigate = useNavigate(); //   // Access the navigate function from react-router-dom

    // Function called when reCAPTCHA value changes
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }

  // Function called when the form is submitted

  const handleSubmit = (e) => {
    e.preventDefault();   // Prevent default form submission behavior
   
    navigate("/dashboard")  // navigate to dashboard 
 

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-4">
      <h1 className="mb-3 text-3xl">Re Captcha Tutorial</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            className="mt-1 px-4 py-2 w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:outline-none sm:text-sm"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onChange}
        />

        <button
          type="submit"
          className={`mt-3 px-4 py-2 w-full ${
            verified ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
          } text-white rounded-md`}
          disabled={!verified}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReCaptach;
