"use client"
import { useState } from "react";

const page = () => {
  const[user, setUser] = useState({
    name:"",
    email:"",
    phone:"",
    message:""
})
const [status, setStatus] = useState(null);

function handleChange(e) {
  const name = e.target.name;
  const value = e.target.value;

  setUser((prevUser) => ({...prevUser, [name] : value}));
}
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
      const response = await fetch('/api/contact', {
          method:'POST',
          headers:{"Content_Type":"application/json"},
          body: JSON.stringify({
              name:user.name,
              email:user.email,
              phone:user.phone,
              message:user.message
          })
      })
      // Set the status based on the response from the API route
      if (response.status === 200) {
          setUser({
              username: "",
              email: "",
              phone: "",
              message: ""
          })
          setStatus('success');
      } else {
          setStatus('error');
      }

  }catch (e) {
      console.log(e)
  }

}

      

  return (
    <div
    className="block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
    <form onSubmit={handleSubmit} >
    
      <div className="relative mb-6" data-te-input-wrapper-init>
        <input
          type="text"
          onChange={handleChange}
          value={user.name}
          name='name'
          className="peer bg-gray-200  block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleInput7"
          placeholder="Name" />
        <label
          
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >Name
        </label>
      </div>
  
     
      <div className="relative mb-6" data-te-input-wrapper-init>
        <input
          type="email"
          name='email'
          onChange={handleChange}
          value={user.email}
          className="peer bg-gray-200  block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleInput8"
          placeholder="Email address" />
        <label
       
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >Email address
        </label>
      </div>
      <div className="relative mb-6" data-te-input-wrapper-init>
        <input
          type="number"
          name='phone'
          onChange={handleChange}
          value={user.phone}

          className="peer bg-gray-200  block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleInput8"
          placeholder="Email address" />
        <label
        
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >Phone 
        </label>
      </div>
  
  
      <div className="relative mb-6" data-te-input-wrapper-init>
        <textarea
          className="bg-gray-200 peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleFormControlTextarea13"
          name='message'
          onChange={handleChange}
          value={user.message}
          rows="3"
          placeholder="Message"></textarea>
        <label
      
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >Message
        </label>
      </div>
  
    
      
      {status === 'success' && <p >Thank you for your message!</p>}
                {status === 'error' && <p >There was an error submitting your message. Please try again.</p>}
  
      <button
        type="submit"
        className="bg-gray-200  dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-blue-500 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-ripple-init
        data-te-ripple-color="light">
        Send
      </button>
    </form>
    <div>
             

            </div>
  </div>
  )

  }
export default page