import React from 'react'

const SelectCard = ({bg,text}) => {
  return (
    <div className='relative'>
      <img className='w-full h-full object-cover' src={bg} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-[40%] bottom-[50%] top-[5%] text-2xl font-bold text-[#d9e4e2] absolute'>
          {text}
        </p>
      </div>
    </div>
  )
}

export default SelectCard