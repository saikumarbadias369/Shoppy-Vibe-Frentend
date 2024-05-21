import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { GetCart } from '../../State/Cart/Action'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';


const Cart = () => {
    const { auth } = useSelector(store => store)
    const dispatch=useDispatch()
   
    const {cart} =useSelector(store=>store)
    const navigate=useNavigate()

    useEffect(()=>{
        dispatch(GetCart())
    },[])
    useEffect(()=>{
        dispatch(GetCart())
    },[cart.updateCartItem,cart.delete])
    
 const   renderLoadingView = () => (
        <div className=" flex flex-col items-center h-[100vh] justify-center">
          <CircularProgress size="7rem"  />
        </div>
      )
    

  return (<>{
    cart.isLoading ?renderLoadingView() :<>{
        cart.cart?.cartItems.length ?   (<div>
        <div className='lg:grid grid-cols-3 lg:px-16 relative'> 
              <div className='col-span-2'>
                  {cart.cart?.cartItems.map(item=><CartItem item={item}/>)}
              
              </div>
              <div className='px-5 sticky top-0  h-[100vh] mt-5 lg:mt-0'>
                  <div className='border mt-10'>
                      <p className='uppercase opacity-60 pb-4 font-bold'>Price Details</p>
                      <hr />
                      <div className='space-y-3 font-semibold mb-10'>
                          <div className='flex justify-between p-3 text-black' >
                              <span>Price</span>
                              <span>{cart.cart?.totalPrice}</span>
                          </div>
                          <div className='flex justify-between p-3 text-black' >
                              <span>Descount</span>
                              <span className='text-green-600'>{cart.cart?.discount}</span>
                          </div>
                          <div className='flex justify-between p-3 text-black' >
                              <span>Delevery Charge</span>
                              <span className='text-green-600'>Free</span>
                          </div>
                          <div className='flex justify-between p-3 text-black' >
                              <span>Total Amount</span>
                              <span className='text-green-600'>{cart.cart?.totalDiscountedPrice}</span>
                          </div>
                          
                      </div>
                      <Button  variant='contained' className='w-full mt-5'  sx={{px:'2.5rem',py:'1rem',bgcolor:'#9155fd'}} >
                     Checkout
                    </Button>
                  </div>
              </div>
      
         
          </div>
          </div>):(
            auth.user?.firstName ? 
            (<div className='flex flex-col items-center  '>
                <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"/>
                <h1 className='text-black font-semibold text-lg'>Your cart is empty!</h1>
                <p>Explore our wide selection and find something you like</p>
                <button onClick={()=>navigate('/')} className='  bg-blue-700 rounded-lg text-white p-2.5 pt-1 mt-1'  >Explore More</button>
            </div>):(<div className='flex flex-col items-center  '>
                <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"/>
                <h1 className='text-black font-semibold text-lg'>Missing Cart items?</h1>
                <p>ELogin to see the items you added previously</p>
                <button onClick={()=>navigate('/login')} className='  bg-orange-700 rounded-lg text-white p-1.5 pt-1 mt-1 w-1/6 text-center'  >Login</button>
            </div>

            )
          )
      }
      </>
      
  }
    </>
  
  )
}

export default Cart
