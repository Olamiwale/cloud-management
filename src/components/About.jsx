import React from 'react'

export default function About (){
  return (
    <div name='about' className='w-full my-32'>
        <div className='w-[90%] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold max-sm:text-3xl'>Trusted by developers across the world</h2>
                <p className='text-2xl py-6 text-gray-500 max-sm:text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque asperiores earum placeat veritatis dignissimos itaque.</p>
            </div>

            <div className='grid grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600 max-sm:text-4xl'>100%</p>
                    <p className='text-gray-400 mt-2'>Completion</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600 max-sm:text-4xl'>24/7</p>
                    <p className='text-gray-400 mt-2'>Delivery</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600 max-sm:text-4xl'>100K</p>
                    <p className='text-gray-400 mt-2'>Transactions</p>
                </div>
            </div>
        </div>
    </div>
  )
}

