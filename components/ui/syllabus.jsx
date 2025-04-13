import syllabusData from "@/constants/syllabus"

const Syllabus = () => {
  return (
    <div className="flex flex-col gap-[30px] rounded-md border-[0.004px] border-gray-300 pt-[20px] px-[20px] pb-[50px]">
      <h1 className="font-bold">Syllabus Wise Analysis</h1>
      <div className="flex flex-col gap-[30px]">
       {syllabusData.map((item, index) => {
         return (
            <div key= {index}>
              <p className="text-gray-700">{item.name} </p>
              <div className="flex justify-between items-center">
                <div className={`w-[80%] h-[8px] ${item.lightColor} rounded-3xl`}>
                  <div className={`h-[8px] ${item.darkColor} ${item.width} rounded-3xl`}></div>
                </div>
                <div className={`${item.color} font-bold`}>{item.percent}</div>
              </div>

            </div>
         )
       })}
      </div>
    </div>
  )
}

export default Syllabus
