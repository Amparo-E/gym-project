"use client";
import { useData } from "@/customHooks/useData";
import { useRef } from "react";

export const FileUpload = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const { data, setData } = useData()

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
        setData(result)
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="flex min-h-screen flex-col items-center justify-center p-24"
      onSubmit={handleSubmitUpload}
    >
      <input type="file" name="file" ref={fileInput} />
      <button type="submit">enviar</button>
    </form>
  );
};
