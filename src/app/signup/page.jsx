import React from 'react'
import Oxy from '../components/Oxy'
import Link from 'next/link'


export default function page() {
  return (
    
    <div className=' bg-gradient-to-br from-[#E6E9F1] to-[#DBD8E2] h-screen w-2/5 '>
        <h1 className=' text-[40px] text-[#1B1B1B] text-center font-bold pt-4 mb-4'>
            Sign Up Form 
        </h1>

        <form  className='mb-14 flex flex-col items-center'>
            
            <div className='mt-10 mb-4'>
            <input type="text" autoFocus required className='shadow-lg hover:border-[#CFC3B6] rounded-[4px] text-[16px]  mb-10 p-1 w-48 border-[1px] hover:placeholder-[#7E6C64] border-black outline-none mr-2' placeholder='First Name' /> 
             <input type="text" required className='hover:border-[#CFC3B6] shadow-lg rounded-[4px] text-[16px]  border-[1px] w-48 p-1 hover:placeholder-[#7E6C64] border-black outline-none' name="" id="" placeholder='Last Name' /> 
             </div>

            <input type="email" required maxLength={30} minLength={30} className='hover:border-[#CFC3B6] shadow-lg rounded-[4px] text-[16px] hover:placeholder-[#7E6C64] w-96 p-1 mb-12 border-[1px] border-black outline-none' name="" id="" placeholder='Email Address' />
              <input type="password" required maxLength={8} minLength={8} className='hover:border-[#CFC3B6] shadow-lg rounded-[4px] w-96 p-1 text-[16px] hover:placeholder-[#7E6C64] mb-16 border-[1px] border-black outline-none' name="password" id="" placeholder='Password' />

            <button className='bg-[#FF6347]  hover:text-[#1b1b1b] shadow-lg border-[1px] border-black text-center rounded-[10px] p-2 w-96 '>Create Account</button>
        </form>

      

        <hr className=' mx-auto border-black mb-4 w-96' />

        <div className='ml-[25%] flex'>
        <p>Already have an account ? </p>  <Link href='./login'><span className='text-[#FF6347]'>Sign in</span></Link>  
        </div>
    </div>
    
  )
}
