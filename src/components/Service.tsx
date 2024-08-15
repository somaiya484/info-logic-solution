import Link from 'next/link';
import { GrAnalytics } from "react-icons/gr";
import { RiSeoFill } from "react-icons/ri";
import { SiSemanticweb, SiDatabricks, SiEclipsemosquitto } from "react-icons/si";

interface Service {
    id: number;
    title: string;
    description: string;
    link: string;
    icon: React.ReactNode;
}

const services: Service[] = [
    {
        id: 1,
        title: "Data Visualization with Looker Studio & Power BI",
        description: "Access valuable insights and make informed decisions using personalized dashboards and detailed reports powered by Looker Studio and Power BI for empowering your business.",
        link: '/DataVisualization',
        icon: <SiDatabricks size={45} className='text-[#fea32c]' />,
    },
    {
        id: 2,
        title: "Advanced Web App Analytics",
        description: "Delve extensively into the performance of your website. Gain insights into your customer's journey and utilize data-driven strategies to improve user experience and drive higher conversion rates.",
        link: '/WebAnalytics',
        icon: <GrAnalytics size={45} className='text-[#fea32c]' />,
    },
    {
        id: 3,
        title: "Improve Online ROI with SEO & SEM",
        description: "Boosting your online visibility with expert SEO strategies. Driving targeted traffic with effective Google Ads campaigns.",
        link: '/SEM',
        icon: <RiSeoFill size={45} className='text-[#fea32c]' />,
    },
    {
        id: 4,
        title: "Comprehensive Social Media Marketing",
        description: "Engaging your audience through impactful and strategic Facebook Ads, managing social channels for optimal results, and building a strong brand reputation.",
        link: '/SMM',
        icon: <SiEclipsemosquitto size={45} className='text-[#fea32c]' />,
    },
    {
        id: 5,
        title: "Design and Develop Your Dream Website",
        description: "Crafting beautiful and functional websites on WordPress, Shopify, and Wix. Delivering custom-coded solutions tailored to your unique needs.",
        link: '/GraphicsDesign',
        icon: <SiSemanticweb size={45} className='text-[#fea32c]' />,
    }
];

const Service: React.FC = () => {
    return (
        <div className='mt-28' id='services'>
            <div className="text-center">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="text-5xl font-bold primary-text mb-6">Things we provide!</h2>
                    <p className="md:text-xl">Let's take your brand to the next level with our comprehensive suite of <br /> marketing services.</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <svg
                        width="500"
                        height="60"
                        viewBox="0 0 200 40"
                        className="hidden md:block mx-auto"
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

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 mx-2 md:mx-16' data-aos="fade-up" data-aos-duration="1000">
                {services.slice(0, 2).map(service => (
                    <div key={service.id} className="shadow-lg pt-7 px-8 rounded-xl service-bg">
                        <div className='transition-transform transform hover:scale-110 duration-200'>
                            <div className="mt-2 mb-4 w-24 h-20 bg-white rounded flex justify-center items-center">{service.icon}</div>
                            <Link href={service.link} className='text-xl md:text-3xl font-bold hover:underline'>{service.title}</Link>
                            <p className="text-gray-700 mb-7 text-base font-semibold mt-4">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-9 mt-12 mx-2 md:mx-16' data-aos="fade-up" data-aos-duration="1000">
                {services.slice(2).map(service => (
                    <div key={service.id} className='service-bg shadow-lg py-7 px-5 rounded-xl transition-transform transform hover:scale-105 duration-200 hover:rounded-sm'>
                        <div className='transition-transform transform hover:scale-105 duration-200'>
                            <div className="mt-2 mb-4 w-24 h-20 bg-white rounded flex justify-center items-center">{service.icon}</div>
                            <Link href={service.link} className='text-xl md:text-3xl font-bold hover:underline'>{service.title}</Link>
                            <p className="text-gray-700 text-base font-semibold mt-4">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;
