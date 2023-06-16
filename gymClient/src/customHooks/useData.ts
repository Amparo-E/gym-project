import { useContext, createContext } from "react";

const DataContext = createContext<any>(null)
export const useData = () => { 
    const data = useContext(DataContext)
}