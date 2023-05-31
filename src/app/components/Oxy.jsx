import React from 'react'
import Image from 'next/image'
import pic from '../images/Vector.png'



export default function Oxy() {
  return (
    
    <div className='w-3/5 bg-[#21343B] h-screen ' >
       <h1 className=' text-[#F6EFEF] text-[40px] text-center pt-4 mb-4' >
         Oxy's Tv
     </h1>

     <h2 className='text-[24px] text-[#d9d9d9] text-center '>
       Personal information   
   </h2>

   <Image className='w-[197px] h-[152px] mx-auto mt-8 mb-8' src={pic} alt='A password key' />

   <p className='text-[#d9d9d9] ml-28 mb-10 text-[20px]'>Login ID and Password</p>

   <p className='text-[12px] text-[#d9d9d9] w-[400px] p-2  ml-[100px]   opacity-70' >Email@gmail.com </p> 
   {/* <span><IoCheckmarkCircleSharp/></span> */}
   <hr className='w-[70%] mb-4  ml-[106px]' />

   <p className=' text-[12px] text-[#d9d9d9] w-[400px] p-2  ml-[100px] opacity-70 '>. . . . . . . . . . . . . . . . .</p>
   <hr className='w-[70%] mb-4  ml-[106px]' />




    </div>
    
  )
}





