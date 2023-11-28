import { FormFile } from "../FormFile/FormFile";

export const FileUpload = () => {
  return (
    // <div className="flex flex-col items-center justify-center w-5/6 h-auto my-32 mx-auto rounded-lg sm:shadow-xl bg-[#4b556b]">
    <div className="flex justify-around items-center">
        {/* <div className="my-8 text-center">
            <h2 className="text-xl font-semibold mb-2">Upload your files</h2>
            <p className="text-xs text-gray-400">File should be of format .DOCX</p> 
        </div>
        <FormFile/> */}
        <div className=" max-w-2xl">
          <h2 className="text-black text-8xl font-extrabold">WELCOME TO YOUR NEXT <span className="text-stroke">LEVEL</span></h2>
          <p className="mb-10 mt-5 text-black text-2xl">Get started by uploading your fitness plan</p>
          <FormFile/>
        </div>
        <div className="z-10">
          <img src="./woman-excercise.png" alt="" className=" h-[900px] object-cover"/>
        </div>
        <div className="h-full w-[400px] absolute right-0 bottom-0 bg-gradient-to-b from-orange-300 to-orange-500"></div>
    </div>
  );
};
