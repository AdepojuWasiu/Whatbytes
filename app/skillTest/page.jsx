'use client'
import { useDataContext } from '@/context/context'
import {ComparisonGraph, HyperText, QuestionAnalysis, QuickStats, Syllabus, UpdateScores} from '@/components/ui'


const SkillTest = () => {
  const {inputData} = useDataContext()
  return (
    <div className={`pl-[35px] pt-[30px] pr-[10px] flex flex-col w-full pb-[100px] relative ${inputData.popup && 'bg-gray-300'}`}>
      <h1 className='font-semibold mb-[20px] text-gray-500'>Skill Test</h1>
      <div className='grid grid-cols-[1.5fr_1fr] gap-[25px]'>
          <div className='flex flex-col gap-[20px]'>
              <HyperText />
              <QuickStats />
              <ComparisonGraph />                    
          </div>
          <div className='flex flex-col gap-[20px] '>
            <Syllabus />
            <QuestionAnalysis />
          </div> 
      </div>
      <UpdateScores />  
    </div>
  )
}

export default SkillTest
