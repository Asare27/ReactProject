import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules

import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'There are many ways to to this, either by using swiper js for the front end There are many ways to to this, either by using swiper js for the front end by the nd of the lesson the'
    
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'There are many ways to to this, either by using swiper js for the front end by the nd of the lesson the There are many ways to to this, either by using swiper js for the front end by the nd of the lesson the'
    
  },
  {
    avatar: AVTR3,
    name: 'Meel Mill',
    review: 'There are many ways to to this, either by using swiper js for the front end There are many ways to to this, either by using swiper js for the front end by the nd of the lesson the'
    
  },
  {
    avatar: AVTR4,
    name: 'Rick Ross',
    review: 'There are many ways to to this, either by using swiper js for the front end There are many ways to to this, either by using swiper js for the front end by the nd of the lesson the'
    
  },

]



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

    < Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      
      
        {
          data.map(({avatar, name,review},index) => {
            return(
              <SwiperSlide key={index} className='testimonials'>
                <div className="client__avatar">
                  <img src={avatar} alt='Me' /> 
                </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
             </SwiperSlide>
        
            )
          })
        }
        
        
        
      </Swiper>

    </section>
  )
}

export default Testimonials;