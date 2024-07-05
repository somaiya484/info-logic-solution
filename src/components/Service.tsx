import React from 'react';
import Image, { StaticImageData } from "next/image";
import DataVisualization from "../../public/visualization.jpg";
import analysis from "../../public/analytics.jpg";
import SEO from "../../public/seo.jpg";
import SEM from "../../public/SEM.jpg";
import web from "../../public/designdevelopment.jpg";

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
        <div className='mt-32'>
            <div className="text-center">
                <h2 className="text-5xl font-bold primary-text mb-6">
                    Things we provide!
                </h2>

                <p className="text-xl">
                    Let's take your brand to the next level with our comprehensive suite of <br /> marketing services.
                </p>
                <svg
                    width="500"
                    height="60"
                    viewBox="0 0 200 40"
                    className="mx-auto"
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-10 md:mx-24 mt-10">
                {services.map(service => (
                    <div key={service.id} className="shadow-lg rounded p-6 transition-transform transform hover:scale-105 hover:shadow-xl service-bg flex flex-col justify-between duration-300">
                        <div>
                            <Image
                                src={service.imageSrc}
                                width={500}
                                height={500}
                                alt={service.title}
                                className="w-full h-[300px] object-cover rounded"
                            />
                            <h2 className="text-4xl my-5 font-semibold">{service.title}</h2>
                            <p className="text-gray-700 mb-6">{service.description}</p>
                            <div className="flex items-center justify-between gap-10 mt-8 mb-5 font-semibold">
                                {service.features.slice(0, 2).map((feature, index) => (
                                    <p key={index} className="border-b w-full border-gray-300">{feature}</p>
                                ))}
                            </div>
                            {service.features.length > 2 && (
                                <div className="flex items-center justify-between gap-10 mb-5 font-semibold">
                                    {service.features.slice(2).map((feature, index) => (
                                        <p key={index} className="border-b w-full border-gray-300">{feature}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button className='secondary-button mt-8 hover:scale-105 transition-transform duration-300 self-start'>Learn More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;
