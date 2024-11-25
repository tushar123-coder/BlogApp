import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from '../../assets/banner-images/img1.jpg'
import img2 from '../../assets/banner-images/img2.jpg'
import img3 from '../../assets/banner-images/img3.jpg'
import img4 from '../../assets/banner-images/img4.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
function About() {
  return (
    <>
    <div className='min-h-screen'>
      <div className='container mt-16'>
        <br />
      </div>
      <div className='text-center'>
        <hr className='mb-2 ' />
        <h1>More than <span className='font-bold text-blue-700 '>32K</span> users post their blogs !</h1>
        <hr className='mt-2' />
      </div>
      <div className='max-w-screen mx-auto container md:px-20 px-4 flex justify-center flex-col md:flex-row my-10'>
        <div className="order-1 col-5 w-full md:w-1/3" >
        <div className='w-full mx-auto '>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay:1500,
            disableOnInteraction:false
        }
        }
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img3} alt="" className="w-full rounded-lg lg:h-[420px] sm:h-96 h-80"/></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" className="w-full rounded-lg lg:h-[420px] sm:h-96 h-80"/></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" className="w-full rounded-lg lg:h-[420px] sm:h-96 h-80"/></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" className="w-full rounded-lg lg:h-[420px] sm:h-96 h-80"/></SwiperSlide>
      </Swiper>
      </div>
        </div>
        <div className="order-2 md:order-1 w-full md:w-1/3 mt-20">
          <div className='space-y-2 ml-10'>
            <span className='text-blue-700  font-bold'>
              Blog app works to connect readers with independent booksellers all over the world.
            </span>
            <p>
              We believe local bookstores are essential community hubs that foster culture, curiosity, and a love of reading, and we're committed to helping them thrive.
            </p>
            <p className='font-bold'>
              Every purchase on the site financially supports independent bookstores.
            </p>
            <p>
              Our platform gives independent blog tools to compete online and financial support to help them maintain their presence in local communities.
            </p>
          </div>
        </div>
      </div>
      
      <div className='flex justify-center my-10'>
        <img src="" alt="" />
      </div>
      <div className=''>
        <div className='bg-blue-300 mt-[50px]  dark:bg-slate-800 text-white mb-3 dark:text-white'>
          <div className='grid md:grid-flow-col grid-flow-row gap-8 mx-20'>

            <div>
              <div className='text-center mb-5 mt-7'>
                <q>This funding came at the most perfect time when I prayed I would have rent for next month and payroll and purchases. Your team will never, ever, know how much booksellers like me appreciate your business.</q>
              </div>
              <div className='flex justify-center items-center'>
                <div>
                  <h3 className='text-2xl font-bold text-center'>VaLinda Miller</h3>
                  <div className='mt-1 text-center mb-10'>
                    <strong className='font-semibold'>Turning Page Blog</strong>
                    <p>Goose Creek, SC</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className='text-center mb-5 mt-7'>
                <q>These funds mean more than money. It means community to me. And for that, I will be forever grateful.</q>
              </div>
              <div className='flex justify-center items-center'>
                <div>
                  <h3 className='text-2xl font-bold text-center'>Fawn Fernandes</h3>
                  <div className='mt-1 text-center mb-10'>
                    <strong className='font-semibold'>Curious Capybara Blog</strong>
                    <p>Hendersonville, TN</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className='text-center mb-5 mt-7'>
                <q>My blogs has absolutely transformed our business, and I am just so continually grateful for your service and, ultimately, support. Thank you so much for your vision and your commitment to us indies.</q>
              </div>
              <div className='flex justify-center items-center'>
                <div>
                  <h3 className='text-2xl font-bold text-center'>Lexi Walter Wright</h3>
                  <div className='mt-1 text-center mb-10'>
                    <strong className='font-semibold'>High Five Blogs</strong>
                    <p>Northampton, MA</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default About
