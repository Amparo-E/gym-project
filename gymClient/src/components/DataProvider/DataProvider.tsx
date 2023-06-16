"use client";

import { DataContext } from "@/customHooks/useData"
import React, { useState } from "react"


export const DataProvider = ({ children }: {children: React.ReactNode}) => {
    const [ data, setData ] = useState(null)
    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}