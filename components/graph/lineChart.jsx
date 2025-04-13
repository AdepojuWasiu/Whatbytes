'use client'

import { 
    LineChart, Line, XAxis, YAxis, Tooltip, ReferenceLine, ResponsiveContainer
} from "recharts";
import lineData from "@/constants/lineChartData";
import { useDataContext } from "@/context/context";

const LineGraph = () => {
  const {inputData} = useDataContext();
   const yourPercentile = Number(inputData.percentile);
   const tick = [0, 25, 50, 75, 100]
   
  return (
    <div style = {{width:"100%", height:300}}>
      <ResponsiveContainer>
        <LineChart data= {lineData}>
          <XAxis dataKey="x" ticks={tick} interval={0}/>
          <YAxis hide />
          <Tooltip />
          <Line type="monotone" dataKey="y" stroke = "#8884d8" dot />
          <ReferenceLine x= {yourPercentile} stroke='gray' label="your percentile"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineGraph

