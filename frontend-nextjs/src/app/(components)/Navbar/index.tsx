<<<<<<< HEAD
"use client";

import { Bell, Menu, Settings, Sun } from 'lucide-react'
import Link from 'next/link';
=======
>>>>>>> 722e8c471b4eb88494b0fbcc86920efcf3b18126
import React from 'react'



const Navbar = () => {
  return (
<<<<<<< HEAD
    <div 
     className="flex justify-between items-center w-full mb-7"
    >

        {/* left side */}
        <div className="flex justify-between items-center gap-5">
            <button className='px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100 ' onClick={()=>{}}>
            <Menu className='w-4 h-4'/>
            </button>
                
            {/* input search side */}
        <div className='relative'>
            <input type="search" placeholder='Start type to search groups and products ' className='pl-10 pr-4 py-2 w-50 md:w-u0 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500'/>

            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-non">
                <Bell className='text-gray-500' size={20}/>
            </div>
        </div>
        </div> 
            {/* right side */}
        <div className="flex justify-between items-center gap-5">
            <div className='hidden md:flex justify-between items-center gap-5'>
                <div>
                    <button onClick={()=>{}}>
                        <Sun className='cursor-pointer text-gray-500' size={24}/>
                    </button>
                </div>

                <div className='relative'>
                    <Bell className='cursor-pointer
                     text-gray-500' size={24}/>
                     <span className='absolute -top-2 -right-2 bg-red-500 text-red-100 text-xs rounded-full inline-flex justify-center items-center px-[0.4rem]py-1 font-semibold leading-none '>
                        3
                     </span>
                </div>

                <hr className='w-0 h-7 border border-solid border-l border-gray-300 mx-3'/>

                <div className='flex items-center gap-3 cursor-pointer'>
                    <div className='w-9 h-9'>image</div>
                    <span className='font-semibold'>V.Arya</span>
                </div>
            </div>

            {/* setting icons */}
            <Link href="/settings">
                <Settings className='cursor-pointer text-gray-500' size={24}/>
            </Link>
        </div>
    </div>
=======
    <div>Navbar</div>
>>>>>>> 722e8c471b4eb88494b0fbcc86920efcf3b18126
  )
}

export default Navbar