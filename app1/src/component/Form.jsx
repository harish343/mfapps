
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required().max(20, "Name must not exceed 20 characters").matches(/^[A-Z][a-z]*$/, "First name must start with a capital letter"),
  IFSC: yup.string().required().matches(/^[A-Z]{4}\d{6}$/, "IFSC must have 4 characters and 6 numerical values"),
  Branch: yup.string().required().max(20, "Name must not exceed 20 characters"),
  Accountnum: yup.number().required().positive().min(1e9, "IFSC must be at least 9 digits").max(1e18, "IFSC must be at most 18 digits"),
}).required();

const Payeeform = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
  };

  const onSubmit = () => {
    
   

    setuserform([...userform, state]);
    setState({
        name: "",
        IFSC: "",
        Branch: "",
        Accountnum: "",
    });

  };
  const [userform, setuserform] = useState([]);
  const [state, setState] = useState({
      name: "",
      IFSC: "",
      Branch: "",
      Accountnum: "",
      id: Math.random() * 10,
  });

  const handleDelete = (id) => {
      const payeedelete = userform.filter((note) => note.id !== id);
      setuserform(payeedelete);
  };

  const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value });
  };

  


  return (
    <>
    <div className="bg-white p-4 shadow-md rounded-md">
      {isOpen ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-1 text-sm">
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              name="name"
              id="name"
              className="w-full p-1 border rounded-sm text-sm"
              placeholder="Enter your name"
              onChange={handleChange}
              value={state.name}
              
              required
            />
              <label htmlFor="email" className="block text-red-700 font-bold mb-1 text-sm">
             {errors.name?.message}
            </label>
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-1 text-sm">
            IFSC
            </label>
            <input
              type="text"
              {...register("IFSC")}
              id="IFSC"
              name="IFSC"
              onChange={handleChange}
              value={state.IFSC}
              className="w-full p-1 border rounded-sm text-sm"
              placeholder="Enter your IFSC"
              required
            />
              <label htmlFor="email" className="block text-red-700 font-bold mb-1 text-sm">
             {errors.IFSC?.message}
            </label>
          </div>
          
          <div className="mb-2">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-1 text-sm">
            Branch
            </label>
            <input
              type="text"
              {...register("Branch")}
              id="Branch"
              name="Branch"
              onChange={handleChange}
              value={state.Branch}
              className="w-full p-1 border rounded-sm text-sm"
              placeholder="Enter your Branch"
              required
            />
             <label htmlFor="email" className="block text-red-700 font-bold mb-1 text-sm">
             {errors.Branch?.message}
            </label>
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-1 text-sm">
            Account Number
            </label>
            <input
              type="number"
              {...register("Accountnum")}
              id="Accountnum"
              name="Accountnum"
              onChange={handleChange}
              value={state.Accountnum}
              className="w-full p-1 border rounded-sm text-sm"
              placeholder="Enter your Account Number"
              required
            />
            <label htmlFor="email" className="block text-red-700 font-bold mb-1 text-sm">
            {errors.Accountnum?.message}
            </label>
            <p></p>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
              Submit
            </button>
            <button type="button" onClick={handleCloseForm} className="bg-red-500 text-white px-2 py-1 rounded ml-2 text-sm">
              Close
            </button>
          </div>
        </form>
      ) : (
        <button onClick={handleOpenForm} className="bg-green-500 text-white px-2 py-1 rounded text-sm">
          Open Form
        </button>
      )}
    </div>

<div className=" border-t-2 border-blue-300 m-10 flex flex-wrap">
{
    userform.length > 0 ? userform.map((user, i) => {
        return (
            <div
                className="bg-white mt-5 mr-5 w-[300px] p-4 py-10 relative"
                key={i}
            >
                <button
                    className="absolute right-2 top-0 font-bold text-2xl text-red-500"
                    onClick={() => handleDelete(user.id)}
                >
                    x
                </button>
                <h3 className="font-bold text-1xl pb-2">{user.name}</h3>
                <p>{user.IFSC}</p>
                <p>{user.Branch}</p>
                <p>{user.Accountnum}</p>
            </div>
        );
    }) : <p className="py-5">
        No Payee available.
    </p>
}
</div>
</>
  );
};

export default Payeeform;
