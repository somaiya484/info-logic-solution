import { MdOutlineAssessment, MdOutlineDataExploration, MdOutlineCollectionsBookmark, MdRecommend } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import Message from "../../components/Message";
import { IoMdCall } from "react-icons/io";
import Link from "next/link";
import ContactSection from "@/components/ContactSectionProps";
import QaN from "@/components/QaN";
import Company from "@/components/Company";
import CompanyTwo from "@/components/CompanyTwo";

interface Section {
    id: number;
    img: string;
    title: string;
    description: string;
    link: string;
}

interface ProcessStep {
    id: number;
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

interface WorkSample {
    id: number;
    img: string;
    title: string;
    icon: React.ComponentType<{ className?: string }>;
}

const DataVisualization: React.FC = () => {
    const sections: Section[] = [
        {
            id: 1,
            img: "/looker.png",
            title: "Looker Studio",
            description:
                "Our Expert Looker Master will transform your data into clear, actionable insights with Looker Studio. We design custom dashboards and reports that help you visualize your data and make informed business decisions.",
            link: "/contact",
        },
        {
            id: 2,
            img: "/powerBi.jpg",
            title: "Power BI",
            description:
                "Unlock the power of your data with Microsoft Power BI. Our experts create interactive dashboards and reports that provide in-depth insights into your business performance, helping you drive strategic decisions.",
            link: "/contact",
        },
    ];

    const processSteps: ProcessStep[] = [
        {
            id: 1,
            icon: MdOutlineAssessment,
            title: "Assessment",
            description:
                "We assess your current data sources and analytics needs for better understanding.",
        },
        {
            id: 2,
            icon: MdOutlineDataExploration,
            title: "Integration & Analysis",
            description:
                "We gather and integrate data from various sources, then analyze it to uncover insights.",
        },
        {
            id: 3,
            icon: MdOutlineCollectionsBookmark,
            title: "Reporting",
            description:
                "We create visualizations and detailed reports using advanced tools to highlight findings.",
        },
        {
            id: 4,
            icon: FaHandsHelping,
            title: "Guidance & Support",
            description:
                "We provide actionable recommendations and ongoing support to refine your analytics strategy.",
        }
    ];

    const workSamples: WorkSample[] = [
        {
            id: 1,
            img: "https://cratosai-backend.itechnolabs.tech/images/17105094850.png",
            title: "Google Ads - Light",
            icon: MdOutlineAssessment,
        },
        {
            id: 2,
            img: "https://cratosai-backend.itechnolabs.tech/images/17105094850.png",
            title: "Google Ads - Light",
            icon: MdOutlineAssessment,
        },
        {
            id: 3,
            img: "https://cratosai-backend.itechnolabs.tech/images/17105094850.png",
            title: "Google Ads - Light",
            icon: MdOutlineAssessment,
        },
    ];

    return (
        <div className="bg-white text-black">

            <div className="bg-fixed bg-[url('/datavisualization.jpg')] h-[600px] w-full flex justify-center items-center relative overflow-auto">
                <div className="absolute inset-0 bg-white opacity-95"></div>
                <div className="text-center relative z-10">
                    <h1 className="font-semibold">Data Visualization</h1>
                    <h2 className="text-5xl my-8 leading-[50px] font-semibold">
                        Empower Your Business with{" "} <br />
                        <span className="text-gradient font-bold">Data Visualization</span>
                    </h2>
                    <p>
                        Our data analytics services at Info Logic Solution leverage powerful tools like Looker Studio and Power BI <br /> to transform raw data into actionable insights. We help you make informed decisions that<br /> drive growth and improve business performance.
                    </p>
                </div>
            </div>

            {/* Choose Yours one - 2nd section */}
            <div className="page-background">
                <div className="py-16">
                    <h1 className="primary-text font-bold text-center text-6xl mb-10">
                        Choose Yours One
                    </h1>
                    <div className="container mx-auto grid md:grid-cols-2 gap-16 px-6 md:px-24">
                        {sections.map((section) => (
                            <div key={section.id} className="shadow-xl rounded bg-white overflow-hidden">
                                <img
                                    src={section.img}
                                    alt={section.title}
                                    className="h-80 w-full object-cover p-3"
                                />
                                <div className="p-6">
                                    <h2 className="text-4xl my-5">{section.title}</h2>
                                    <p className="text-gray-700 mb-7">{section.description}</p>
                                    <Link href="/contact">
                                        <button className="secondary-button hover:scale-105 duration-200">
                                            Reach Us
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            {/* Our Visualization Process - 3rd section */}
            <h1 className="font-bold text-center text-4xl mt-10 mb-10 ">
                Our <span className="text-gradient">Process</span>
            </h1>
            <p className="text-center text-lg">
                Do you dream of exploring the furthest reaches of outer space? <br />
                Do you live for bringing brands to life and finding new ways to tell exciting
                brand stories? <br />
                If so, you may have just found your people.
            </p>

            <div className=" grid md:grid-cols-4 px-6 gap-6 mt-8 page-background">
                {processSteps
                    .map((step) => (
                        <div key={step.id} className="border-b pb-5 border-gray-700 hover:border-transparent  duration-300 ease-in-out transition-transform transform hover:scale-105 md:hover:scale-110">
                            <h1 className="text-4xl md:text-7xl text-gradient font-bold">{step.id}.</h1>
                            <h2 className="text-xl md:text-2xl font-semibold mt-12">{step.title}</h2>
                            <p className="md:text-lg font-semibold text-stone-600 mt-3">{step.description}</p>
                        </div>
                    ))}
            </div>



            <h1 className="primary-text font-bold text-center text-6xl mt-32 mb-10">
                Work Samples
            </h1>
            {/* Implement it in work smaple  */}
            {/* <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6 md:px-24">
                    {sections.map((section) => (
                        <div key={section.id} className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
                            <div className="relative">
                                <img
                                    src={section.img}
                                    alt={section.title}
                                    className="h-80 w-full object-cover rounded-t-lg"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100">
                                    <div className="text-center text-white p-6">
                                        <h2 className="text-3xl md:text-4xl font-bold mb-2">{section.title}</h2>
                                        <p className="text-base md:text-lg mb-4">{section.description}</p>
                                        <Link href={section.link}>
                                            <button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-800 text-white px-6 py-3 rounded-full text-lg md:text-xl font-semibold shadow-md hover:shadow-xl transition duration-300">
                                                Learn More
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}

            {[0, 1, 2].map((row) => (
                <div
                    key={row}
                    className={`md:flex items-center gap-10 md:mx-14 py-7 ${row !== 0 ? "-mt-7" : ""
                        }`}
                >
                    {workSamples.map((sample) => (
                        <div key={sample.id} className="shadow-lg py-7 px-4 rounded-lg">
                            <img className="rounded" src={sample.img} alt={sample.title} />
                            <div className="flex items-center gap-4 mt-5">
                                <sample.icon className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                                <h3 className="text-2xl">{sample.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            ))}

            <Message />

            <CompanyTwo></CompanyTwo>

            {/* 4th section */}
            <ContactSection serviceName="Visualization" />

        </div>
    );
};

export default DataVisualization;
