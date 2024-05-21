import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Grid container  className='bg-black text-white text-center mt-10' sx={{bgcolor:'black',color:"white",py:3}}>
    <Grid xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant='h6'>Company</Typography>
        <div>
        <Button className='pb-5' variant='h6' gutterButton>About</Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterButton>Blog</Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterButton>Press</Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterButton>Jobs</Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterButton>PartnersS</Button>
        </div>
    </Grid>
    <Grid xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant='h6'>Solutions</Typography>
        <div>
        <Button className='pb-5' variant='h6' gutterButton>Marketing</Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterButton>Analytics</Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterButton>Commerce</Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterButton>Insights</Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterButton>Support</Button>
        </div>
    </Grid>
    <Grid xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant='h6'>Documantation</Typography>
        <div>
        <Button className='pb-5' variant='h6' gutterButton>Guidence</Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterButton>Api Status</Button>
        </div>
      
    </Grid>
    <Grid xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant='h6'>Legal</Typography>
        <div>
        <Button className='pb-5' variant='h6' gutterButton>Clime</Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterButton>Privacy</Button>
        </div>
        <div>
        <Button className='pb-5' variant='h6' gutterButton>Terms</Button>
        </div>
        
    </Grid>


    <Grid xs={12} className='pt-15'>
        <Typography variant='body2' component='p' align='center'>&copy; 2024 My Company. All Rights reserved</Typography>
       

        <Typography variant='body2' component='p' align='center'>Made With Love By Me.</Typography>
    
        
    </Grid>


      </Grid>
    </div>
  )
}

export default Footer
