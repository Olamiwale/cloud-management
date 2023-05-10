import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/cyber-bg.png'

export default function Hero (){
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        
        <div className='w-[90%] m-auto grid grid-cols-2 max-sm:flex flex-col'>
            
            <div className='flex flex-col justify-center w-full py-8'>
                <p className='text-2xl'>Unique Sequencing & Production</p>
                <h1 className='py-3 text-7xl font-bold max-md:text-6xl'>Cloud Management</h1>
                <p className='text-2xl'>This is our Tech brand.</p>
                <div className='flex justify-center pt-10'>
                <button className='border bg-gray-300 w-[300px] p-4 rounded-lg max-md:w-[200px]'>
                    Get Started</button>
                </div>
                
                
            </div>
           
            <div>
                <img className='w-full' src={bgImg} alt="/" />
            </div>
           
            <div className='absolute bottom-6 flex flex-col items-center
             bg-zinc-200 border-slate-300 rounded-xl text-center 
              w-[700px]
              shadow-xl max-md:w-[550px] max-sm:w-[300px]'>



                {/* flex flex-col  md: bottom-[5%]
            mx-1 md:  bg-zinc-200
            border border-slate-300 rounded-xl text-center */}

                <p className='text-3xl py-6 font-bold max-md:text-xl'>Data Services</p>
                <div className='text-3xl flex justify-between p-4 max-md:text-xl max-sm:grid grid-cols-2'>
                    <p className='flex px-4 py-2 text-slate-500 justify-center items-center'><CloudUploadIcon className='h-6 text-indigo-600' /> App Security</p>
                    <p className='flex px-4 py-2 text-slate-500 justify-center items-center'><DatabaseIcon className='h-6 text-indigo-600' /> Dashboard Design</p>
                    <p className='flex px-4 py-2 text-slate-500 justify-center items-center'><ServerIcon className='h-6 text-indigo-600' /> Cloud Data</p>
                    <p className='flex px-4 py-2 text-slate-500 justify-center items-center'><PaperAirplaneIcon className='h-6 text-indigo-600' /> API</p>
                </div>
            </div>
        </div>
    </div>
  )
}
