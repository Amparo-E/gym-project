"use client";
import { DataProvider } from "@/components/DataProvider/DataProvider";
import { DisplayData } from "@/components/DisplayData/DisplayData";
import { FileUpload } from "@/components/FileUpload/FileUpload";
import { useData } from "@/customHooks/useData";


export default function Home() {
  const { data } = useData()
  const thereIsData = Object.keys(data || {}).length
  console.log(data);
  
  return !thereIsData ? <FileUpload/> : <DisplayData/>
  
}

