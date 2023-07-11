import { FormFile } from "../FormFile/FormFile";

export const FileUpload = () => {
  return (
    <div className="flex flex-col items-center justify-center w-5/6 h-auto my-32 mx-auto rounded-lg sm:shadow-xl bg-[#263141]">
        <div className="my-8 text-center">
            <h2 className="text-xl font-semibold mb-2">Upload your files</h2>
            <p className="text-xs text-gray-400">File should be of format .DOCX</p> 
        </div>
        <FormFile/>
    </div>
  );
};
