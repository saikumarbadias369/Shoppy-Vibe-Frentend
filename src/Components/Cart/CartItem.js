import { IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@mui/base';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../State/Cart/Action';

const CartItem = ({item}) => {

    const dispatch=useDispatch()
    const handleQuantity=(num)=>{
        console.log(item.quantity,">>",item._id)
        const data={data:{quantity:item.quantity+num},CartItemId:item?._id}
        dispatch(updateCartItem(data))
    }

const handleRemoveCartItem=()=>{
    console.log("item._id>"+item._id)
    dispatch(removeCartItem(item._id))
}

    return (
        <div className='p-5 shadow-lg border rounded-md mt-10' >
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] '>
                    <img className='w-full h-full object-top  object-cover' src={item.product?.imageUrl} />
                </div>
                <div className='ml-5 space-t-1'>
                    <p className='font-semibold'>{item.product?.title}</p>

                    <p className='opacity-70'>size:{item.size},White</p>
                    <p className='opacity-70 mt-2'>sellar: {item.product?.brand}</p>
                    <div className='flex space-x-5 items-center  text-grey-900 mt-6' >
                        <p className='font-semibold'>₹{item.discountedPrice}</p>
                        <p className='opacity-50 line-through'>₹{item.price}</p>
                        <p className='text-green-600 font-semibold '>{item.product?.discountPersent}% off</p>
                    </div>
                </div>
            </div>
            <div  className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='lg:flex items-center space-x-2'>
                    <IconButton onClick={()=>handleQuantity(-1)} disabled={item.quantity<=1}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>{item.quantity}</span>
                    <IconButton sx={{color:'RGB(145 85 253)'}}  onClick={()=>handleQuantity(1)} >
                        <AddCircleOutlineIcon />
                    </IconButton>

                </div>
                <div>
                    <Button onClick={handleRemoveCartItem} sx={{color:'#9155FD'}}>Remove</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
