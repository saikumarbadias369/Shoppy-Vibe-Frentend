import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'


const ProductCard = ({product}) => {
  const navigate=useNavigate()




  return (
    <div onClick={()=>navigate(`/product/${product._id}` )} className='productCard w-[23rem] m-3 transition-all cursor-pointer'>
    <div className='h-[28rem]'>
        <img className='h-full w-full object-cover  object-left-top' src={product.imageUrl} alt="product" />
    </div>
    <div className='bg-white p-3 textPart'>
<div>
    <p className='font-bold opacity-60'>{product.brand}</p>
    <p>{product.title}</p>
</div>
<div className='flex items-center space-x-2'>
    <p className='font-semibold'>{product.discountedPrice}</p>
    <p className='line-through opacity-60'>{product.price}</p>
    <p className='text-green-600 font-semibold'>{product.discountPersent}% of</p>
</div>
    </div>
    </div>
  )
}

export default ProductCard
