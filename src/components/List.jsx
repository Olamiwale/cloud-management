import React from 'react'
import { CheckIcon } from "@heroicons/react/solid";

export default function List({price}) {
  return (
    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Standard
            </span>
            <div>
              <p className="text-6xl font-bold py-4 flex">
                {price}
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </p>
            <div className="text-2xl">
              <div className="flex">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                <p className="py-4"> Lorem, ipsum dolor</p>
              </div>
              <div className="flex">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                <p  className="py-4" > Lorem, ipsum dolor</p>
              </div>
              <div className="flex">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                <p className="py-4"> Lorem, ipsum dolor</p>
              </div>

              <button className=" border w-full py-4 my-4">Get Started</button>
            </div>
          </div>
  )
}
