import {
    MdWifiProtectedSetup,
    MdOutlineDataExploration,
    MdOutlineCollectionsBookmark,
    MdTipsAndUpdates,
} from "react-icons/md";
import { AiFillTags } from "react-icons/ai";
import { FaHandsHelping } from "react-icons/fa";
import Message from "../../components/Message";
import Link from "next/link";
import CompanyTwo from "@/components/CompanyTwo";
import ContactSection from "@/components/ContactSectionProps";

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
    category: string;
    img: string;
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    link: string;
}

const WebAnalytics: React.FC = () => {
    const sections: Section[] = [
        {
            id: 1,
            img: "/googleTagManager.png",
            title: "Google Tag Manager",
            description:
                "Implement and manage your website’s tags efficiently with Google Tag Manager. We set up and configure tags to track important data, ensuring you get accurate insights without slowing down your site",
            link: "/contact",
        },
        {
            id: 2,
            img: "/conversionAPI-preview.png",
            title: "Conversion API",
            description:
                "Accurately track conversions and customer interactions with our Conversion API services. We integrate your website with various platforms to provide detailed analytics that help you optimize your marketing strategies.",
            link: "/contact",
        },
        {
            id: 4,
            img: "/googleAnalytics.png",
            title: "Google Analytics",
            description:
                "Optimize your Google Ads campaigns with in-depth analytics and insights. We track and analyze your ad performance, providing detailed reports and recommendations to improve your ad strategies and maximize ROI. From keyword performance to ad spend efficiency, we ensure your Google Ads drive the best possible results.",
            link: "/contact",
        },
        {
            id: 3,
            img: "/pixelInstallation.png",
            title: "Pixel Installation",
            description:
                "Maximize your ad campaigns' effectiveness with precise pixel tracking. We install and configure tracking pixels from platforms like Facebook and Google to monitor user actions and optimize your marketing efforts.",
            link: "/contact",
        },
        {
            id: 5,
            img: "/everyplatformA.PNG",
            title: "Other Marketing Platforms Analytics ",
            description:
                "Lastly, our expert team can also provide you with both the client and server sides with Pinterest, Snap, TikTok, Microsoft Ads, and Twitter Linkedin Conversion Tracking",
            link: "/contact",
        },
    ];

    const processSteps: ProcessStep[] = [
        {
            id: 1,
            icon: MdWifiProtectedSetup,
            title: "Setup & Configuration",
            description:
                "We set up and configure analytics tools on your website for accurate data collection and integrate various data sources for a holistic view.",
        },
        {
            id: 2,
            icon: MdOutlineDataExploration,
            title: "Data Collection & Integration",
            description:
                "We ensure precise data collection from multiple sources, providing a comprehensive overview of your website's performance and user interactions.",
        },
        {
            id: 3,
            icon: MdOutlineCollectionsBookmark,
            title: "Analysis & Reporting",
            description:
                "Our team analyzes data to identify trends, patterns, and areas for improvement, delivering detailed reports with actionable insights and recommendations.",
        },
        {
            id: 4,
            icon: FaHandsHelping,
            title: "Continuous Improvement",
            description:
                "We work with you to implement changes and track their impact, continuously optimizing your web analytics strategy for better results.",
        },
    ];


    const workSamples: WorkSample[] = [
        {
            id: 1,
            category: "Power BI",
            img: "/bi4.png",
            title: "Regional - Distinct Count",
            icon: AiFillTags,
            link: 'https://app.powerbi.com/view?r=eyJrIjoiMzFkNmViN2ItYTFlZS00NGI1LWFmMzMtNTA1MDczODllMDkyIiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 2,
            category: "Power BI",
            img: "/bi2.png",
            title: "Muppet - Inventory",
            icon: AiFillTags,
            link: 'https://app.powerbi.com/view?r=eyJrIjoiZWEyZmYzMmEtOTcwYS00MzUwLWJiZmItYTEyZDczYWJjODhkIiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 3,
            category: "Power BI",
            img: "/bi3.png",
            title: "Magento - Ecommerce",
            icon: AiFillTags,
            link: 'https://app.powerbi.com/view?r=eyJrIjoiODcwNjgwMGMtNzY1Mi00M2VjLThiMTQtZDk2YzQyZmUxZDJmIiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 4,
            category: "Power BI",
            img: "/bi1.png",
            title: "Healthy Food - Revenue",
            icon: AiFillTags,
            link: 'https://app.powerbi.com/view?r=eyJrIjoiYzlmYWFmMzMtYWM5Mi00NTA3LWIxMzYtYWJkNDkzZTNmMjU0IiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 5,
            category: "Power BI",
            img: "/bi6.png",
            title: "Store Insight - Sales",
            icon: AiFillTags,
            link: 'https://app.powerbi.com/view?r=eyJrIjoiMTIzNGVjNmEtOGY0ZC00YTJjLWFhYWItMGU3OTk5ZmU0ZTNhIiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 6,
            category: "Power BI",
            img: "/bi5.png",
            title: "Batex- Data Range",
            icon: AiFillTags,
            link: 'https://app.powerbi.com/view?r=eyJrIjoiMTkxOWIzMDItZGVmMy00MGZmLTkzY2UtZTZiZTdmM2ZkMGNmIiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 7,
            category: "Looker Studio",
            img: "/lookers5.png",
            title: "Debisca - Ecommerce",
            icon: AiFillTags,
            link: 'https://lookerstudio.google.com/reporting/8d0707b4-925f-4397-a690-8861fd306c33/page/rpRbD',
        },
        {
            id: 8,
            category: "Looker Studio",
            img: "/lookers1.png",
            title: "FirePlace - Report",
            icon: AiFillTags,
            link: 'https://lookerstudio.google.com/reporting/7159f089-c0ac-45c5-a6b1-1d9353ee6b25/page/6pNmD',
        },
        {
            id: 9,
            category: "Looker Studio",
            img: "/lookers3.png",
            title: "Nitro House - Lead",
            icon: AiFillTags,
            link: 'https://lookerstudio.google.com/reporting/27d0424e-2712-46ee-b6c7-470108d10031/page/XpgGD',
        },
        {
            id: 10,
            category: "Looker Studio",
            img: "/lookers4.png",
            title: "WW Trauma - Survey",
            icon: AiFillTags,
            link: 'https://lookerstudio.google.com/reporting/f7857c5f-9ea2-40bb-aadd-dcbb0b5ec95d/page/p_onq4gv6a4c',
        },
        {
            id: 11,
            category: "Looker Studio",
            img: "/lookers6.png",
            title: "PK4 - Student tracking",
            icon: AiFillTags,
            link: 'https://lookerstudio.google.com/reporting/13b9f68c-5982-42c5-ad69-461263b0762e/page/PhafC',
        },
        {
            id: 12,
            category: "Looker Studio",
            img: "/lookers2.png",
            title: "Kubla - Report",
            icon: AiFillTags,
            link: 'https://lookerstudio.google.com/reporting/c02faf95-df49-4dfb-95f3-6b13b8be248b/page/p_pr8q1l6ncd',
        },
    ];


    return (
        <div className="bg-white text-black">

            <div className="bg-fixed bg-[url('/datavisualization.jpg')] h-[600px] w-full flex justify-center items-center relative overflow-auto">
                <div className="absolute inset-0 bg-gradient-to-b from-[#feddcb] to-[#ffffff] opacity-95"></div>
                <div className="text-center relative z-10">
                    <h1 className="font-semibold">Web Analytics</h1>
                    <h2 className="text-5xl my-8 leading-[50px] font-semibold">
                        Unlock Actionable Insights with Advanced <br /> {" "}
                        <span className="text-gradient font-bold ">Web Analytics</span>
                    </h2>
                    <p>
                        Info Logic Solution offers comprehensive web analytics services to <br /> help you understand your website's performance and user behavior for both client and server sides. <br /> We use tools like Google Tag Manager, Conversion API, Google Analytics, <br /> and other marketing platforms to provide insights that drive informed business decisions.
                    </p>
                </div>
            </div>

            {/* Choose Yours one - 2nd section */}
            <div className="my-20 page-background">
                <h1 className="primary-text font-bold text-center text-6xl mb-14">
                    Choose Yours One
                </h1>
                <div className="container mx-auto grid md:grid-cols-2 gap-16 px-6 md:px-24 ">
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

            {/* Work sample - 4th section */}
            <div className="bg-white text-black">
                <h1 className="primary-text font-bold text-center text-6xl mt-32 mb-20">
                    Work Samples
                </h1>

                <div className="mx-auto grid md:grid-cols-3 gap-10 px-6 md:px-16">
                    {workSamples.map((sample) => (
                        <div key={sample.id} className="sample-style">
                            <img className="rounded-2xl w-full h-60 object-cover shadow-lg shadow-orange-100" src={sample.img} alt={sample.title} />
                            <div className="sample-inner-style">
                                <div className="text-center text-white p-6">
                                    <h3 className="text-lg font-semibold italic mb-5 text-center">{sample.category}</h3>
                                    <a href={sample.link} target="_blank" rel="noopener noreferrer" className="sample_button">View Sample</a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold my-8 text-center flex items-center gap-1"><AiFillTags className="text-amber-500"></AiFillTags> {sample.title}</h3>

                        </div>
                    ))}
                </div>
            </div>

            <Message />

            <CompanyTwo></CompanyTwo>

            <ContactSection serviceName="Analytics" />

        </div>
    );
};

export default WebAnalytics;
