import React from "react";
import { useRef } from "react";

const Manager = () => {
    const ref = useRef()
    const showPassword = () => {
        console.log(ref.current.src)
        if(ref.current.src.includes("icons/eyesclose.png")){
            ref.current.src = "icons/eye.png"
        }
        else{
            ref.current.src = "icons/eyesclose.png"
        }
    }
  return (
    <>
      <div class="absolute top-0 -z-10 h-full w-full bg-white">
        <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <div className="mx-auto bg-slate-100 mycontainer">
        <h1 className=" text-4xl text font-bold text-center">
          <span className="text-green-700"> &lt;</span>
          Pass<span className="text-green-500">OP</span>
          <span className="text-green-700">/ &gt;</span>
        </h1>
        <p className="text-green-900  text-md text-center ">
          UR OWN PASSWORD MANAGER
        </p>
        <div className="text-white flex flex-col p-4 gap-8 items-center">
          <input
            className="rounded-full border border-green-900 w-full text-black p-4 py-1" placeholder="enter website URL"
            type="text"
          />
          <div className="flex gap-8 justify-between w-full">
            <input
              className="rounded-full border border-green-900 w-full text-black p-4 py-1" placeholder="username"
              type="text"
            />
            <div className="relative">
            <input
              className="rounded-full border border-green-900 w-full text-black p-4 py-1" placeholder="password"
              type="text"
            /><span className="absolute right-[3px] top-[3px] cursor-pointer text-black" onClick={showPassword}>
                <img ref={ref} src="/icons/eye.png" width={30} className="p-1" />
            </span>
            </div>
          </div>
          <button className="text-black flex justify-center items-center bg-green-400 rounded-full px-4 py-2 w-fit hover:bg-green-500 border-green-900 border">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
