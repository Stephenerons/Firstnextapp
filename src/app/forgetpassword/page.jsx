import Link from 'next/link'
import React from 'react'
import {FcGoogle} from 'react-icons/Fc'
import {SiFacebook} from 'react-icons/Si'
import{SiApple} from 'react-icons/Si'
import{FaRegUser} from 'react-icons/Fa'
import Oxy from '../components/Oxy'


export default function page() {
  return (
    < >
    

    <div className='h-screen'>
    <div className='ml-[767px] bg-gradient-to-br from-[#E6E9F1] to-[#DBD8E2] h-screen w-2/5 '>
    <h1 className=' text-[40px] text-[#1B1B1B] text-center pt-4 mb-8 font-bold'>
        Oxy's Tv 
    </h1>

    <h2 className='text-[32px] text-[#1b1b1b] flex justify-center mb-10'>Forget password</h2>


    <form  className=' flex flex-col items-center mb-4 mx-auto'>     
       
    <FaRegUser/> <input type="text" autoFocus required maxLength={30} minLength={30} className='shadow-lg hover:border-[#CFC3B6] rounded-[4px] text-[16px]  mb-10 p-1 w-72 border-[1px] hover:placeholder-[#737373] border-black outline-none ' placeholder='Enter Email/Phone number' /> 

    </form>

<div className='flex justify-center flex-col items-center mb-4 mx-auto'>
<button className='bg-[#FF6347] shadow-lg border-[1px] border-black text-center rounded-[14px] p-2 w-72 mb-8'>Send</button>
<p className='font-medium text-[18px]'>or</p>

<div className='flex'>
            <span className='bg-[#E9EFF7] px-[20px] py-[10px] my-8 mx-4 rounded-[10px] shadow-lg '> <button><FcGoogle size={30}/></button> </span> <span className='p-8 bg-[#E9EFF7] px-[20px] py-[10px] my-8  mx-4 rounded-[10px] shadow-lg'><button><SiFacebook size={30} /></button>  </span> <span className='p-8 bg-[#E9EFF7] px-[20px] py-[10px] my-8  mx-4 rounded-[10px] shadow-lg'><button> <SiApple size={30}/></button></span>
        </div>


</div>


    <div className='ml-[25%] flex'>
    <p>Don't have an account ?</p> <Link href='./signup'> <span className='text-[#A61515]'>Sign Up</span></Link>
    </div>
</div>
</div>
</>
  )
}

