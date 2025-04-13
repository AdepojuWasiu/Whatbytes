"use client"

import quickStatistics from "@/constants/quick";
import { useDataContext } from "@/context/context";

const QuickStats = () => {
  const {inputData} = useDataContext();
  quickStatistics[0].number = inputData.rank
  quickStatistics[1].number = inputData.percentile + "%"
  quickStatistics[2].number = inputData.correct

  return (
    <div className='flex flex-col gap-3 rounded-md border-[0.004px] border-gray-300 py-[20px] px-[15px]'>
      <h1 className='font-bold'>Quick Statistics</h1>
      <div className='flex gap-[20px]'>
        {quickStatistics.map((item,index) => {
          const IconComponent = item.icon
          return(
              <div key={index} className='flex gap-2 border-r-[0.004px] border-r-gray-300 p-[5px] justify-center items-center pr-[20px] ml-[10px]'>
                <div className={` flex p-[14px] bg-gray-100 rounded-full border-gray-300 border-[0.004px] ${item.color}`}>
                   <IconComponent size={20}/>
                </div>
                <div>
                  <h1 className='font-bold text-[17px]'>{item.number}</h1>
                  <p className='text-gray-600 text-[12px]'>{item.name}</p>
                </div>
              </div>
          )
        })}
     
      </div>
    </div>
  )
}

export default QuickStats
