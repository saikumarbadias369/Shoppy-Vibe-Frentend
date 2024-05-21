import { Grid, TextField } from '@mui/material'
import Button from '@mui/material/Button';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../State/Auth/Action';
import CircularProgress from '@mui/material/CircularProgress';


const LoginForm = () => {
    const {auth}=useSelector(store=>store)
const navigation=useNavigate()
const dispatch=useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault()
        const data=new FormData(event.currentTarget)
        const userData={
            email:data.get('email'),
            password:data.get('password')
        }
        dispatch(login(userData))
        console.log(userData)
            }


            const renderLoadingView = () => (
                <div className=" flex flex-col items-center justify-center">
                  <CircularProgress size="7rem"  />
                </div>
              )


            return (<>
            {
                auth.isLoading?renderLoadingView():(
                    <div  className='z-60 w-auto'>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                           
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="Email"
                                    fullWidth
                                    autoComplete='email'
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    id="password"
                                    name="password"
                                    label="Password"
                                    fullWidth
                                    autoComplete='password'
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <Button type='submit'
                                    className='bg-[#9155FD] w-full'
                                    variant='contained'
                                    size='large'
                                    sx={{ padding: '.8rem 0', bgcolor: '#9155FD' }}
                                >
                                    Signin
                                </Button>
                            </Grid>
        
                        </Grid>
                    </form>
                    <div className='flex justify-center flex-col items-center'>
                        <div className='py-3 flex items-center'>
                            <p>if you have already account ?</p>
                            <Button  className='ml-5' size='small' onClick={()=>navigation('/register')}>Register</Button>
                        </div>
                    </div>
                    
                </div>
                )
            }
            </>
                
            )
}

export default LoginForm
