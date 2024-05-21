import React from 'react'


const HomeSectionCard = ({ product }) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden  w-[16rem] border mx-3'>
      <div className='h-[15rem] w-[10rem]'>
        <img className='w-full h-full object-top object-cover' src={product.imageUrl} />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
        <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
      </div>
    </div>
  )
}

export default HomeSectionCard
