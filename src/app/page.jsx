




import Link from 'next/link'
import React from 'react'
import {FcGoogle} from 'react-icons/Fc'
import {SiFacebook} from 'react-icons/Si'
import{SiApple} from 'react-icons/Si'



export default function page() {
  return (
    

    <div className=' bg-gradient-to-br from-[#E6E9F1] to-[#DBD8E2] h-screen w-2/5 '>
    <h1 className=' text-[40px] text-[#1B1B1B] text-center pt-4 mb-4 font-bold'>
        Oxy's Tv 
    </h1>

    <h2 className='text-[24px] text-[#1b1b1b] flex justify-center mb-8 font-medium'>Login</h2>

    <form  className=' flex flex-col items-center mb-4'>     
       
     <input type="text" autoFocus required maxLength={30} minLength={30} className='shadow-lg hover:border-[#1f1911] rounded-[4px] text-[16px]  mb-10 p-1 w-72 border-[1px] hover:placeholder-[#737373] border-black outline-none ' placeholder='Enter Username/Email/Number' /> 
     <input type="password" required maxLength={8} minLength={8} className='hover:border-[#CFC3B6] shadow-lg rounded-[4px] w-72 p-1 text-[16px] hover:placeholder-[#737373]  border-[1px] border-black outline-none' name="Password" id="" placeholder='Password' />

    </form>

        <Link href='./forgetpassword'> <p className='ml-[278px] mb-8 text-[14px] text-[#1b1b1b]  hover:text-[#FF6347] focus:text-[#FF6347] font-light' >Forget Password ?</p></Link>


        <div className='flex justify-center flex-col items-center '>

            <button className='bg-[#FF6347] focus:text-[#FF6347]  shadow-lg border-[1px] border-black text-center rounded-[14px] p-2 w-72 mb-8'>Sign Up</button>
      
       


        <div className='flex'>
            <span className='bg-[#E9EFF7] px-[20px] py-[10px] my-8 mx-4 rounded-[10px] shadow-lg'><FcGoogle size={30}/></span> <span className='p-8 bg-[#E9EFF7] px-[20px] py-[10px] my-8  mx-4 rounded-[10px] shadow-lg'><SiFacebook size={30} /></span> <span className='p-8 bg-[#E9EFF7] px-[20px] py-[10px] my-8  mx-4 rounded-[10px] shadow-lg'><SiApple size={30}/></span>
        </div>




    </div>
    

 

    <div className='ml-[25%] flex'>
              <p className='pr-1'>Don't have an account ?  </p> <Link href='./signup'> <span className=' text-[#FF6347] focus:text-[#FF6347]'>Sign Up</span> </Link> 
    </div>
</div>
  )
}
