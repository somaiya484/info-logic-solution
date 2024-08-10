import React from 'react';
import Image, { StaticImageData } from "next/image";
import DataVisualization from "../../public/visualization.jpg";
import analysis from "../../public/analytics.jpg";
import SEO from "../../public/seo.jpg";
import SEM from "../../public/SEM.jpg";
import web from "../../public/designdevelopment.jpg";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import Link from 'next/link';


interface Service {
    id: number;
    imageSrc: StaticImageData;
    title: string;
    description: string;
    features: string[];
}

const services: Service[] = [
    {
        id: 1,
        imageSrc: DataVisualization,
        title: "Data Visualization",
        description: "Empowering your business with advanced analytics through Looker Studio and Power BI.",
        features: ["Looker Studio", "Power BI"]
    },
    {
        id: 2,
        imageSrc: analysis,
        title: "Web Analytics",
        description: "Unlocking insights with Google Tag Manager, Conversion API, Pixel Installation, and Google Analytics.",
        features: ["Google Analytics", "Facebook conversion API", "Google Tag Manager", "Pixel Installation"]
    },
    {
        id: 3,
        imageSrc: SEO,
        title: "SEO & SEM",
        description: "Boosting your online visibility with expert SEO strategies. Driving targeted traffic with effective Google Ads campaigns.",
        features: ["SEO strategies", "SEM"]
    },
    {
        id: 4,
        imageSrc: SEM,
        title: "Social Media Marketing",
        description: "Engaging your audience with impactful and strategic Facebook Ads.",
        features: ["Google ads", "Facebook ads"]
    },
    {
        id: 5,
        imageSrc: web,
        title: "Design & Development",
        description: "Crafting beautiful and functional websites on WordPress, Shopify, and Wix. Delivering custom-coded solutions tailored to your unique needs.",
        features: ["WordPress Design & Development", "Shopify Design & Development", "Wix Design & Development", "Frontend Development"]
    }
];

const Service: React.FC = () => {
    return (
        <div className='mt-28' id='services'>
            <div className="text-center">
                <div data-aos="fade-up"
                    data-aos-duration="1000">
                    <h2 className="text-5xl font-bold primary-text mb-6">
                        Things we provide!
                    </h2>
                    <p className="text-xl">
                        Let's take your brand to the next level with our comprehensive suite of <br /> marketing services.
                    </p>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="1000">
                    <svg
                        width="500"
                        height="60"
                        viewBox="0 0 200 40"
                        className="invisible md:visible mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M 20 30 Q 100 0 180 30"
                            stroke="url(#gradient)"
                            strokeWidth="4"
                            fill="transparent"
                        />
                        <defs>
                            <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#f97316" />
                                <stop offset="50%" stopColor="#ef4444" />
                                <stop offset="100%" stopColor="#f59e0b" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 mx-2 md:mx-16'
                data-aos="fade-up"
                data-aos-duration="1000"
            >

                <div className=" shadow-lg pt-7 px-8 rounded-lg service-bg">
                    <div className='transition-transform transform hover:scale-110 duration-200'>
                        <MdKeyboardDoubleArrowUp size={27} className='w-[90px] h-[80px] bg-white rounded' />
                        <Link href='/DataVisualization' className='text-3xl my-5 font-bold hover:underline'>Data Visualization with <br />Looker Studio & Power BI</Link>
                        <p className="text-gray-700 mb-7 text-base font-semibold">Access valuable insights and make informed decisions using personalized dashboards and detailed reports powered by Looker Studio and Power BI for empowering your business</p>
                    </div>
                </div>


                <Link href='/WebAnalytics' className='service-bg shadow-lg pt-7 px-8 rounded-lg'>
                    <div className='transition-transform transform hover:scale-110 duration-200'>
                        <MdKeyboardDoubleArrowUp size={27} className='w-[90px] h-[80px] bg-white rounded' />
                        <h2 className='text-3xl my-5 font-bold hover:underline'>Advanced Web App Analytics</h2>
                        <p className="text-gray-700 mb-6 text-base font-semibold">Delve extensively into the performance of your website. Gain insights into your customer's journey and utilize data-driven strategies to improve user experience and drive higher conversion rates.</p>
                    </div>
                </Link>

            </div>



            <div className='grid grid-cols-1 md:grid-cols-3 gap-9 mt-12 mx-2 md:mx-16'
                data-aos="fade-up"
                data-aos-duration="1000">

                <Link href='/SEM' className='service-bg shadow-lg py-7 px-5 rounded-lg transition-transform transform hover:scale-105 duration-200 hover:rounded-sm'>
                    <div className='transition-transform transform hover:scale-105 duration-200'>
                        <MdKeyboardDoubleArrowUp size={27} className='w-[90px] h-[75px] bg-white rounded' />
                        <h2 className='text-xl md:text-3xl my-5 font-bold hover:underline'>Improve Online ROI with SEO & SEM</h2>
                        <p className="text-gray-700 text-base font-semibold">Boosting your online visibility with expert SEO strategies. Driving targeted traffic with effective Google Ads campaigns.</p>
                    </div>
                </Link>

                <Link href='/SMM' className='service-bg shadow-lg py-7 px-5 rounded-lg transition-transform transform hover:scale-105 duration-200 hover:rounded-sm'>
                    <div className='transition-transform transform hover:scale-105 duration-200'>
                        <MdKeyboardDoubleArrowUp size={27} className='w-[90px] h-[75px] bg-white rounded' />
                        <h2 className='text-xl md:text-3xl my-5 font-bold hover:underline'>Comprehensive Social Media Marketing</h2>
                        <p className="text-gray-700 text-base font-semibold">Engaging your audience through impactful and strategic Facebook Ads, managing social channels for optimal results, and building a strong brand reputation.</p>
                    </div>
                </Link>


                <Link href='/GraphicsDesign' className='service-bg shadow-lg py-7 px-5 rounded-lg transition-transform transform hover:scale-105 duration-200 hover:rounded-sm'>
                    <div className='transition-transform transform hover:scale-105 duration-200'>
                        <MdKeyboardDoubleArrowUp size={27} className='w-[90px] h-[75px] bg-white rounded' />
                        <h2 className='text-3xl my-5 font-bold hover:underline'>Design and Develop Your Dream Website</h2>
                        <p className="text-gray-700 text-base font-semibold">Crafting beautiful and functional websites on WordPress, Shopify, and Wix. Delivering custom-coded solutions tailored to your unique needs.</p>
                    </div>
                </Link>

            </div>
        </div>

    );
};

export default Service;
