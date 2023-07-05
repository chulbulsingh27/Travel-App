import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import video from '../images/video1.mov'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
       <video 
       className='w-full h-full object-cover'
       src={video}
       autoPlay
       loop
       muted
       />
       <div className='absolute top-0 left-0 w-full h-full bg-gray-900/30'></div>
       <div className=' flex flex-col text-center absolute top-4 p-4 w-full h-full items-center justify-center text-white'>
        <h1 className='py-1.5'>First Class Travel</h1>
        <h2 >Let the waves hit your feet, and the sand be your seat.</h2>
        <form className='flex justify-between items-center mx-w-[700px] mx-auto w-[80%] border p-2 rounded-md text-black bg-gray-100 m-3'>
            <div className=''>
                <input type="text" placeholder='Search Destinations' className='bg-transparent focus:outline-none  w-[300px] sm:w-[400px] p-2'/>
            </div>
            <div>
                <button>
                    <AiOutlineSearch size={20} className='icon' style={{color:'#ffffff'}}/>
                </button>
            </div>
        </form>
       </div>
    </div>
  )
}

export default Hero