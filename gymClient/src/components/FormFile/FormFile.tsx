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
      const response = await fetch("http://192.168.0.86:3001/api/convert", {
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
      className="w-4/5 h-40 max-w-xs mb-8 flex flex-col items-center"
      onSubmit={handleSubmitUpload} 
    >
      <label className="z-20 w-full h-5/6 bg-[#2B374A] flex flex-col-reverse items-center justify-center mb-4 cursor-pointer rounded-lg shadow-inner">
        <input
          type="file"
          name="file"
          ref={fileInput}
          className="w-full hidden"
          accept=".docx"
          onChange={handleFileChange}
        />
        <p className="z-10 text-xs font-medium text-center text-gray-400 pt-2"> {selectedFile ? selectedFile.name : 'Click here to upload the file'} </p>
        <svg
          className="z-10 w-8 h-8 text-[#f8ad64]"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
        </svg>
      </label>
      <button type="submit" className="text-[#f8ad64]">
        Enviar
      </button>
    </form>
  );
};
