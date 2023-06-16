"use client";
import { DataProvider } from "@/components/DataProvider/DataProvider";
import { DisplayData } from "@/components/DisplayData/DisplayData";
import { FileUpload } from "@/components/FileUpload/FileUpload";


export default function Home() {
  return (
    <DataProvider>
      <FileUpload/>
      <DisplayData/>
    </DataProvider>
  )
}
