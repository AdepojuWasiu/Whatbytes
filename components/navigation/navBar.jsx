'use client'
import navList from "@/constants/navList";
import Link from "next/link";
import { useDataContext } from "@/context/context";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname()
  const {inputData} = useDataContext()
  return (
    <nav className = {`border-r-[0.1px] border-gray-300 pt-[40px] pr-3
                      ${inputData.popup && 'bg-gray-300'} `}>
      { navList.map((item , index) => {
         const IconComponent = item.icon;
         const isActive = pathname === item.link
         console.log(pathname)
         return (
            <div key ={index}>
             <Link href = {item.link} className={`flex gap-4 justify-start items-center
                        p-[10px] font-bold text-[17px] py-[17px] pr-[100px] 
                        rounded-r-4xl ${isActive && "bg-gray-100 text-blue-800"}`}>
                <IconComponent size={23} />
                {item.name}
             </Link>
            </div>
        )
      })}
    </nav>
  )
}

export default NavBar
