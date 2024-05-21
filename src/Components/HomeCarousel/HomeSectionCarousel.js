
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { products } from './productdata';
import { Divider } from '@mui/material';
import { NavLink } from "react-router-dom";
// import './index.css'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 760 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 760, min: 0 },
        items: 1
    }
};
const HomeSectionCarousel = ({products,sectionName}) => {


    return (
        <div className='border m-1 z-30 bg-white'>
             <h2 className='text-2xl font-extrabold text-gray-800 py-5 px-5'>{sectionName}</h2>
         <div className='relative p-5  m-1'>
            </div>
            {/* <Divider /> */}

            <Carousel
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={true}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                showDots={false}
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    products.map((each) => {
                        return (
                            <NavLink to={`/product/${each.id}`}>
                                <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden  w-[16rem] border mx-3'>
                                <div className='h-[15rem] w-[10rem]'>
                                    <img className='w-full h-full object-top object-cover' src={each.imageUrl} />
                                </div>
                                <div className='p-4'>
                                    <h3 className='text-lg font-medium text-gray-900'>{each.brand}</h3>
                                    <p className='mt-2 text-sm text-gray-500'>{each.title}</p>
                                </div>
                                </div>
                            </NavLink>
                        )
                    })
                }

            </Carousel>
        </div>
    )
}

export default HomeSectionCarousel



// import React, { useState } from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import HomeSectionCard from '../HomeSectionCard';
// import { Button } from '@mui/material';
// import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

// // import ChevronRightIcon from '@material-ui/icons/ChevronRight';


// const HomeSectionCarousel = ({products,sectionName}) => {

//     const [activeIndex, setActiveIndex] = useState(0)
//     const responsive = {
//         0: { items: 1},
//         950: { items: 3 },
//         1250: { items: 7 },
//     };
//     const slidePrev = () => setActiveIndex(activeIndex - 1)
//     const slideNext = () =>setActiveIndex(activeIndex + 1)
//     console.log(activeIndex)
//     const syncActiveindex = ( e) => setActiveIndex(e.items)
//     const items = products.slice(0, 15).map((item) => <HomeSectionCard product={item} />)


//     const renderNextButton = ({ isDisabled }) => {
//         return activeIndex !== items.length - 5 &&  <Button  onClick={slideNext} variant='contained' className='z-50 bg-white' sx={{ position: 'absolute', top: '8rem', right: '0rem', transform: 'translateX(90%) rotate(90deg)', bgcolor: 'white' }} aria-label='next'>
//         <KeyboardArrowLeftIcon sx={{ transform: 'rotate(260deg)', color: "black" }} style={{ transform: 'rotate(90deg)', color: 'black' }} />
//     </Button>
//       };
    
//       const renderPrevButton = ({ isDisabled }) => {
//         return  activeIndex !==0  &&<Button onClick={slidePrev} variant='contained' className='z-50 bg-white' sx={{ position: 'absolute', top: '8rem', left: '0rem', transform: 'translateX(-90%) rotate(-90deg)', bgcolor: 'white' }} aria-label='next'>
//         <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: "black" }} style={{ transform: 'rotate(90deg)', color: 'black' }} />
//     </Button>
//       };


//     return (
//         <div className='border m-10 z-50'>
//             <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
//             <div className='relative p-5  m-1'>
//                 <AliceCarousel
//                     // mouseTracking
//                     items={items}
//                     // autoWidth
//                     // disableButtonsControls
//                     disableDotsControls
//                     responsive={responsive}
//                     onSlidehanged={syncActiveindex}
//                     activeIndex={activeIndex}
//                     controlsStrategy="responsive"
//                     renderPrevButton={renderPrevButton}
//                     renderNextButton={renderNextButton}
                    
                   
//                 />

               
//             </div>

//         </div>

//     )
// };

// export default HomeSectionCarousel