import { FormFile } from "../FormFile/FormFile";

export const FileUpload = () => {
  return (
    <div className="flex justify-around items-center">
      <div className=" max-w-2xl">
        <h2 className="text-8xl font-extrabold">WELCOME TO YOUR NEXT <span className="text-stroke">LEVEL</span></h2>
        <p className="mb-10 mt-5 text-2xl">Get started by uploading your fitness plan</p>
        <FormFile/>
      </div>
      <div className="z-10">
        <img src="./woman-excercise.png" alt="" className=" h-[900px] object-cover"/>
      </div>
      <div className="h-full w-1/4 absolute right-0 bottom-0 bg-gradient-to-b from-orange-300 to-orange-500"></div>
    </div>
  );
};
