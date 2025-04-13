'use client'
import { useDataContext } from "@/context/context";
import { useState } from "react";

const UseForm = () => {

    const {updateData, inputData} = useDataContext();
    const [formData, setFormData] = useState({
     rank: "",
     percentile: "",
     correct: ''
    })
 
    const handleChange = (e) => {
         const { name, value } = e.target;
         setFormData((prevData) => ({
           ...prevData,
           [name]: value,
         }));
   };
   
   const handleSubmit = (e) => {
          e.preventDefault();
          updateData("rank",formData.rank);
          updateData('percentile', formData.percentile);
          updateData('correct', formData.correct)
          updateData('popup', false)
   };
 
  return (
    <div>
       <form className="flex flex-col gap-[30px]" onSubmit={handleSubmit}>
          <input 
            name="rank"
             type="text" 
             className="border-blue-500 border-[0.5] h-[35px] w-[150px] px-2 rounded-md"
             value={formData.rank}
             placeholder="Rank"
             onChange={handleChange}
             required 
           />
                   <input 
              name="percentile"
             type="text" 
             className="border-blue-500 border-[0.5] h-[35px] w-[150px] px-2 rounded-md"
             value={formData.percentile}
             placeholder="Percentile"
             onChange={handleChange}
             required
           />
                   <input 
             name="correct"      
             type="text" 
             className="border-blue-500 border-[0.5] h-[35px] w-[150px] px-2 rounded-md"
             value={formData.correct}
             placeholder="Correct Answer"
             onChange={handleChange}
             required
           />
           <div className="flex gap-[10px] ">
              <button className=" px-[10px] rounded-[7px] bg-white text-blue-900 border-blue-900 border-1" onClick={() => updateData('popup', false)}>cancel</button>
              <button type="submit" className="py-[10px] px-[20px] rounded-[7px] bg-blue-900 text-white border-black border-1">save</button>
           </div>
      </form>
    </div>
  )
}

export default UseForm
