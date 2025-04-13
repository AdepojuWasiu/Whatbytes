"use client"
import Piechart from "../graph/pieChart";
import { useDataContext } from "@/context/context";

const QuestionAnalysis = () => {
   const {inputData} = useDataContext();
  return (
    <div className=" flex flex-col gap-[20px] rounded-md border-[0.004px]
              border-gray-300 py-[20px] px-[15px]">
      <div className="flex justify-between font-bold">
        <h1>Question Analysis</h1>
        <p className="text-blue-800">{inputData.correct}/15</p>
      </div>
      <p className="text-gray-700"><span className="font-bold">
                   You scored {inputData.correct} question correct out of 15.</span>However 
                   you still need some improvement</p>
      <Piechart />
    </div>
  )
}

export default QuestionAnalysis
