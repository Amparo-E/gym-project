"use client";
import { useData } from "@/customHooks/useData";
import { useRef, useState } from "react";

// modularizando el componente fileUpload y cargando el formulario de archivos en el componente formFile
export const FormFile = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { data, setData } = useData();

  const handleSubmitUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const file = fileInput.current?.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("docxFile", file);

    try {
      const response = await fetch("http://10.0.0.205:3001/api/convert", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setData(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  return (
    <form
      className="max-w-full h-48 flex flex-col"
      onSubmit={handleSubmitUpload} 
    >
      <label className="h-full w-full flex items-center justify-center mb-4 cursor-pointer rounded-lg shadow-lg border-2 border-orange-300 hover:bg-orange-400 text-black transition-colors">
        <svg className="w-9 h-9 text-[#f8ad64]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
        </svg>
        <input
          type="file"
          name="file"
          ref={fileInput}
          className="w-full hidden"
          accept=".docx"
          onChange={handleFileChange}
        />
        <p className="z-10 text-lg font-medium text-center text-black pl-3"> {selectedFile ? selectedFile.name : 'Click here to upload the file'} </p>
      </label>
      <button type="submit" className="font-semibold text-[#f8ad64] bg-transparent text-left text-xl hover:text-orange-600 transition-colors">
        Submit
      </button>
    </form>
  );
};
