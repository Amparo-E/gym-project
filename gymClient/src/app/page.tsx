"use client";
import { DataProvider } from "@/components/DataProvider/DataProvider";
import { DisplayData } from "@/components/DisplayData/DisplayData";
import { FileUpload } from "@/components/FileUpload/FileUpload";
import { useData } from "@/customHooks/useData";


export default function Home() {
  const { data } = useData()
  const thereIsData = Object.keys(data || {}).length
  
  return (
    <div className="min-h-screen max-w-screen overflow-hidden bg-[#f9f9f9] pb-16 text-white"> 
      { !thereIsData ? <FileUpload/> : <DisplayData/> }
    </div>
  ) 
}

