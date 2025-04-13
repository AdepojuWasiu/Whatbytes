'use client'
import { PieChart, Pie, Cell } from "recharts";
import Image from "next/image";
import { useDataContext } from "@/context/context";



const Piechart = () => {
  const {inputData} = useDataContext();

  const correctAnswer = Number(inputData.correct)
  const incorrectAnswer = 15 - correctAnswer
  const data = [
    { name: "Completed", value: correctAnswer }, 
    { name: "Remaining", value: incorrectAnswer } 
  ];
  const colors = ["#0277BD", "#e0e0e0"];
  
  return (

    <div className="relative flex justify-center items-center">
    <PieChart width={200} height={200}>
    <Pie
      data={data}
      dataKey="value"
      startAngle={290}
      endAngle={-270}
      innerRadius={55}
      outerRadius={78}
      paddingAngle={0}
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index]} />
      ))}
    </Pie>
  </PieChart>

  <div className="absolute inset-0 flex flex-col justify-center items-center rounded-full">
        <div className="rounded-full inner-pie p-[10px]">
          <Image src='/assets/inner.png' width={40} height={40} alt="inner"/>
        </div>
  </div>
  </div>
  )
}

export default Piechart