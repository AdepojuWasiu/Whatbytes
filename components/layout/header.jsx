'use client'
import Image from "next/image"
import { useDataContext } from "@/context/context"

const Header = () => {
const {inputData} = useDataContext()

  return (
    <div className={`h-[100px] border-b-[0.004px] border-b-gray-300 flex
                 justify-between items-center justify-items-center 
                 px-[20px] ${inputData.popup && 'bg-gray-300'}`}>
      <div className='flex justify-center items-center gap-2'>
        <Image src="/assets/whats.jpeg" alt='WhatBytes' width={40} height={40}/>
        <h1 className='font-bold text-[30px]'>WhatBytes</h1>
      </div>
      <div className="flex justify-center items-center justify-items-center
                       gap-2 font-bold border-gray-300 border-[2px] p-[8px] rounded-md">
        <Image src="/assets/wasiu.JPG" alt="pics" width={40} height={50} className='rounded-full'/>
        <h1>Wasiu Adepoju</h1>
      </div>
    </div>
  )
}

export default Header
