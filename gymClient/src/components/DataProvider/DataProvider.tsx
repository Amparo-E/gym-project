"use client";

import { DataContext } from "@/customHooks/useData"
import React, { useState } from "react"


export const DataProvider = ({ children }: {children: React.ReactNode}) => {
    const [ data, setData ] = useState({})
    const [ selectedDay, setSelectedDay ] = useState<string>('')
    return (
        <DataContext.Provider value={{ data, setData, selectedDay, setSelectedDay }}>
            {children}
        </DataContext.Provider>
    )
}