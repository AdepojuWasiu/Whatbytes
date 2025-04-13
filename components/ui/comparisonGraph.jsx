'use client'
import LineGraph from "../graph/lineChart";
import {GoGraph} from "react-icons/go";
import { useDataContext } from "@/context/context";

const ComparisonGraph = () => {
  const {inputData} = useDataContext();
  return (
    <div className=" flex flex-col gap-[25px] rounded-md border-[0.004px] border-gray-300 py-[20px] px-[15px]">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold mb-[15px]">Comparison Graph</h1>
          <p className="text-gray-700"><span className="font-bold">You scored {inputData.percentile} percentile</span> which 
            is lower than the <br></br> 
            average percentile 72% of all the engineers who took this assessment.
          </p>
        </div>
          <div className='flex p-[14px] bg-gray-100 rounded-full border-gray-300 border-[0.004px]'>
              <GoGraph size={20} className="text-red-900"/>
          </div>
      </div>
      <LineGraph />
    </div>
  )
}

export default ComparisonGraph
