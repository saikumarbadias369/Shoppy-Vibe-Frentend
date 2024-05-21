import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

const items = [
    <img src="https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/G/31/img23/WA/2024/feb/style-icon/herotator-ingress/Cat__Af_PC_hero-MA._SX3000_QL85_.jpg" role='presentation' className='cursor-pointer' />,
    <img src="https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/G/31/img24/Fashion/Event/MFD/Feb/AF/Topheros/pc._SX3000_QL85_.jpg" role='presentation' className='cursor-pointer'/>,
<img src="ttps://m.media-amazon.com/images/G/31/img23/Fashion/AF/Winterwearflip/womens/PC/Kurta-Sets-Saree-more_2._SX3000_QL85_FMpng_.png" role='presentation' className='cursor-pointer'/>,
    <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/Event/MFD/Feb/AF/Topheros/Kids_clothing_3000x900_3._SX3000_QL85_FMpng_.png" role='presentation' className='cursor-pointer'/>,
  
    <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/AF/Winterwearflip/womens/PC/Tops-Dresses-more_3._SX3000_QL85_FMpng_.png" role='presentation' className='cursor-pointer'/>,
]

const MainCarousel = () => (
    <AliceCarousel
        // mouseTracking
        autoPlayStrategy='all'
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        
        // responsive={responsive}
        // controlsStrategy="alternate"
    />
);

export default MainCarousel