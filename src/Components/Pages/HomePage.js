import React from 'react'
import MainCarousel  from '../HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../HomeCarousel/HomeSectionCarousel'
import Footer from '../Footer/Footer'
import mens_kurta from '../../Data/men_kurta.js'
import  men_jeans  from '../../Data/men_shoes'
import  mens_shirts  from '../../Data/men_shirts'
import women_dress  from '../../Data/women_dress.js'
import women_jeans from '../../Data/women_jeans.js' 

const HomePage = () => {
  return (
    <div style={{'background-color': '#e7e7e7'}}>
      
      <MainCarousel />

      <div className='space-y-15 py-3 flex-col justify-center px-5 ;lg:px-10 '>
      <HomeSectionCarousel products={mens_kurta} sectionName={"Men's Kurta"}/>
      <HomeSectionCarousel products={men_jeans} sectionName={"Men's Jeans"}/>
      <HomeSectionCarousel products={mens_shirts} sectionName={"Men's Shirt"}/>
      <HomeSectionCarousel products={women_jeans} sectionName={" Women's Jeans"}/>
      <HomeSectionCarousel  products={women_dress} sectionName={"Women's Dress"}/>
      </div>
      
    </div>
  )
}

export default HomePage
