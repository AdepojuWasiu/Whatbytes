'use client'
import { createContext, useContext, useState } from "react";

const dataContext = createContext();

export const DataProvider = ({children}) => {
    const [inputData, setInputData] = useState({
                                                 rank: "7",
                                                 percentile:"50",
                                                 correct: "9",
                                                 popup: false
                                               })
    const updateData = (key, value) => {
        setInputData((prev) => ({
            ...prev, [key]: value }));
    };


    return (
        <dataContext.Provider value={{ inputData, updateData}}>
            {children}
        </dataContext.Provider>

    )
};

export const useDataContext = () => useContext(dataContext)