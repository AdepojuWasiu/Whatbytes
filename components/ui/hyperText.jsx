'use client'
import Button from "../common/button";
import Image from "next/image";
import { useDataContext } from "@/context/context";

const HyperText = () => {
  const {updateData} = useDataContext();
  return (
    <div className='flex gap-[8px] items-center rounded-md border-[0.004px] border-gray-300 py-[25px] px-[15px]'>
      <Image src='/assets/html.png' alt='html' width={40} height={40} />
      <div className='pl-[15px]'>
        <h1 className='font-bold'>Hyper Text Markup Language</h1>
        <p className='text-gray-600'>Question: 08 | Duration: 15mins | Submitted on 5 june 2021</p>
      </div>
      <Button name = 'update' style= 'bg-blue-900 text-white' onClick={() => updateData('popup', true)}/>
    </div>
  )
}

export default HyperText
