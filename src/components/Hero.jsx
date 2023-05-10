import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import bgImg from "../assets/cyber-bg.png";

export default function Hero() {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="w-[90%] m-auto grid grid-cols-2 max-sm:flex flex-col">
        <div className="flex flex-col justify-center w-full py-8">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-7xl font-bold max-md:text-6xl">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our Tech brand.</p>
          <div className="flex justify-center pt-10">
            <button className="border bg-gray-300 w-[200px] p-4 rounded-lg max-md:w-[100px]">
              Get Started
            </button>
          </div>
        </div>

        <div>
          <img className="w-full" src={bgImg} alt="/" />
        </div>

        <div className="absolute bottom-[6%] max-sm:bottom-0 right-[10%] flex justify-between items-center bg-zinc-300/70 border-slate-300 rounded-xl text-center w-[600px] shadow-xl px-16 py-8 max-md:w-[500px] max-sm:w-[350px] max-sm:px-2">
          <div className="flex gap-2 max-md:flex flex-col">
            <CloudUploadIcon className="h-6 text-indigo-600" />
            <p>Cloud Data</p>
          </div>
          <div className="flex gap-2 max-md:flex flex-col">
            <PaperAirplaneIcon className="h-6 text-indigo-600" />
            <p>API</p>
          </div>

          <div className="flex gap-2 max-md:flex flex-col">
            <DatabaseIcon className="h-6 text-indigo-600" />
            <p>App security</p>
          </div>
          <div className="flex gap-2  max-md:flex flex-col">
            <ServerIcon className="h-6 text-indigo-600" />
            <p>Dashboard Design</p>
          </div>
        </div>
      </div>
    </div>
  );
}
