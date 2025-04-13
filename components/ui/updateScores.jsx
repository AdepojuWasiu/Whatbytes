'use client'
   
import updateSectionData from "@/constants/update";
import Image from "next/image";
import UseForm from "../form/useForm";
import { useDataContext } from "@/context/context";

const UpdateScores = () => {
  const {inputData} = useDataContext();
  
  return (
    <div className={`${inputData.popup ? "flex-col" : "hidden"} flex gap-[30px] w-[600px] rounded-md border-[0.004px] border-gray-300 py-[20px] px-[20px] absolute top-0 left-40 bg-white`}>
      <div className="flex justify-between font-black text-[20px] px-[10px]">
        <h1>Update Scores</h1>
        <Image src="/assets/html.png" alt="html" width={20} height={20} />
      </div>
    <div className="flex justify-between ">
     <div className=" flex flex-col gap-[50px]">
     {
        updateSectionData.map((item, index) => {
          return (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center justify-center text-[15px] gap-[20px]">
                  <div className="py-[0.2px] px-[6px] rounded-full bg-blue-900 text-white">{item.number}</div>
                  <p className="font-semibold">Update your <span className="font-black">{item.update}</span></p>
                </div>
              </div>
          )
        })
      }
      </div>
      <UseForm />
     </div>
    </div>
  )
}

export default UpdateScores
