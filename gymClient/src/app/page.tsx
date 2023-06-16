"use client";
import { useRef } from "react";

export default function Home() {
  const fileInput = useRef<HTMLInputElement>(null);

  const handleSubmitUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const file = fileInput.current?.files?.[0];
    if (!file) return;
    
    const formData = new FormData();
    formData.append("docxFile", file);

    try {
      const response = await fetch("http://localhost:3001/api/convert", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
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
}
