"use client";

import React from 'react';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';

const Banner: React.FC = () => {
  return (
    <div className='relative overflow-hidden z-30 gradient-background'>
      
      <div className='absolute top-24 -left-24 w-full h-full flex'>
        <div className='rounded-full h-[200px] w-[200px] bg-[radial-gradient(circle,_rgba(255,165,0,0.8)_0%,_rgba(255,69,0,0.4)_50%,_rgba(255,193,7,0)_100%)] blur-xl'></div>
      </div>

      <div className='absolute top-[600px] w-full h-full flex justify-end'>
        <div className='rounded-full h-[200px] w-[200px] bg-[radial-gradient(circle,_#FFA500CC_0%,_#FF450066_50%,_#FFC10700_100%)] blur-xl'></div>
      </div>

      <div className='relative pt-40'>
        <div className='text-center bg-gray-800 py-1 md:py-2 w-1/2 md:w-[35%] mx-auto rounded-2xl'>
          <p className='md:text-xl font-bold bg-gradient-to-r from-orange-100 via-red-400 to-amber-400 text-transparent bg-clip-text animate-gradient'>Welcome To InfoLogic Solution</p>
        </div>
      </div>

      <div className='relative text-center mt-10'>
        <h2 className='text-3xl md:text-6xl md:w-3/4 mx-auto leading-[60px]'>The Global, Web Design, SEO & Logical Data-Driven <span className='text-gradient font-bold'>Digital Marketing Agency</span></h2>
      </div>

      <div className="relative h-full flex justify-center items-center mt-10 sm:text-lg md:text-xl font-semibold">
        <TypeAnimation
          sequence={[
            'We are passionate about Website Design & Development',
            1000,
            'We are passionate about Graphic Design',
            1000,
            'We are passionate about Social Media Marketing',
            1000,
            'We are passionate about SEO & SEM',
            1000,
            'We are passionate about Web & Data Analytics',
            1000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>

      <div className='relative mt-10 flex justify-center md:justify-start gap-5 w-[34%] mx-auto'>
        <button className='primary-button'>Explore Services <MdKeyboardDoubleArrowDown className='text-xl' /></button>
        <button className='secondary-button'>Get Free Consultation</button>
      </div>

      <div className='relative text-center mt-10 md:text-lg font-semibold w-3/4 mx-auto pb-10 z-10'>
        <p>Go To <span className='text-gradient'>|</span> Easy Contract <span className='text-gradient'>|</span> Specialize Team</p>
      </div>

      <style jsx>{`
        .gradient-background {
          background: linear-gradient(to bottom, #FFDAB9, #FFF5EE);
          position: relative;
        }

        .gradient-background::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(to bottom, rgba(255,213,182,0) 0%, #FFF5EE 100%);
        }
      `}</style>
    </div>
  );
};

export default Banner;
