import { useContext, createContext } from "react";

export const DataContext = createContext<any>({})

export const useData = () => { 
    return useContext(DataContext)
}