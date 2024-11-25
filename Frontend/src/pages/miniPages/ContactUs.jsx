import React from 'react'
import { Link, Navigate, redirect, useLocation, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
function ContactUs() {
  
  
const location=useLocation();
const navigate=useNavigate();
const from=location.state?.from?.pathname||'/';

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

const onSubmit = async (data) => {
  const userInfo={
    name:data.name,
    email:data.email,
    text:data.text
  }
}

  return (
    <div className='flex h-screen items-center dark:bg-black justify-center'>
     <div className="">
        {/* Start */}
  <div className="">
    <form method="dialog">
   
    <h3 className="font-bold text-3xl">Contact Us</h3>
      {/* Name */}
      <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br/>
     <input type="text" placeholder='Enter your name' className='w-96 px-3 dark:bg-slate-900 py-1 border rounded-md outline-none'
       {...register("name", { required: true })} />
     <br/>
     {errors.name && <span className='text-sm text-red-500' >This field is required</span>}
     </div>
     {/*Email */}
     <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
     <input type="email" placeholder='Enter address' className='w-96 px-3 py-1  dark:bg-slate-900 border rounded-md outline-none'
       {...register("email", { required: true })}/>
       
       {errors.email && <span className='text-sm text-red-500' >This field is required</span>}
     </div>

      {/*Text*/}
     <div className='mt-4 space-y-2'>
     <span>Meassge</span>
     <br/>
     <textarea type="text" placeholder='Type your message'  className='w-96  dark:bg-slate-900 h-28 px-3 py-1 border rounded-md outline-none '
     {...register("text", { required: true })}
     />
     <br/>
     {errors.text && <span className='text-sm text-red-500' >This field is required</span>}
     </div>
       {/*Button */}
      <div className=' mt-6'>
        <button className='bg-blue-500 rounded-md px-4 py-2 text-white hover:bg-blue-700 duration-200'>Submit</button>
      </div>
      </form>
  </div>
  {/* End */}
</div>

     </div>
  )
}

export default ContactUs
