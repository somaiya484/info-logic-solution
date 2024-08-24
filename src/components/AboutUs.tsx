"use client"
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs: React.FC = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='mt-20 page-background' id='about'>

            <div className='w-[98%] mx-auto md:flex justify-center items-center gap-5 mt-10 md:pl-10'>
                <div data-aos="fade-up"
                    data-aos-duration="1000"
                    className="w-full md:w-[45%]">
                    <img
                        src='/aboutus.jpg'
                        width={500}
                        height={500}
                        alt="About us"
                        className='md:pl-5 rounded'
                    />

                </div>
                <div data-aos="fade-up"
                    data-aos-duration="1000"
                    className="w-full md:w-[50%]">

                    <div className='md:pr-16 text-balance text-center md:text-left'>
                        <h2 className=' font-bold primary-text'>Who We Are</h2>
                        <p className='text-3xl md:text-5xl mt-6 leading-10 font-semibold'>SOLUTIONS THAT</p>
                        <p className='text-3xl md:text-5xl mt-4 leading-10 font-semibold'>ELEVATE EXPERIENCES </p>
                        <p className='mt-8 mb-4 leading-7 md:text-xl'>Info Logic Solution is your dedicated partner for navigating the digital landscape. We deliver <span className='font-bold text-gradient'>comprehensive marketing services </span> to elevate your brand and drive growth. Our solutions are rooted in thorough brand research and designed to enhance your unique identity. <br /><br /> Our team's singular purpose is to craft impactful marketing experiences that captivate audiences and elevate brands. With our expertise and enthusiasm, we create strategies that drive businesses to new heights. <span className='font-bold text-gradient'>We are committed</span> to constant innovation and creative storytelling, ensuring that your brand stands out in a dynamic market. Join us and see your business thrive.
                        </p>

                        <div className='flex justify-center sm:justify-start'>
                            <a
                                href='https://forms.gle/kfooAvTuePXRo2ub9'
                                target="_blank"
                                rel="noopener noreferrer"
                                className='secondary-button mt-5 sm:mt-0 w-[200px] transition-transform transform hover:scale-105 duration-300 text-center'
                            >
                                Get Free Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default AboutUs;
