import {
    MdWifiProtectedSetup,
    MdOutlineAssessment,
    MdOutlineDataExploration,
    MdOutlineCollectionsBookmark,
    MdTipsAndUpdates,
} from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import Message from "../../components/Message";
import Link from "next/link";

interface Section {
    id: number;
    img?: string;
    title?: string;
    description: string;
    link: string;
}

interface ProcessStep {
    id: number;
    icon: React.ElementType;
    title: string;
    description: string;
}

interface WorkSample {
    id: number;
    img: string;
    title: string;
    icon: React.ElementType;
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
            title: "1. Setup & Configuration",
            description:
                "We set up and configure analytics tools on your website, ensuring accurate data collection.",
        },
        {
            id: 2,
            icon: MdOutlineDataExploration,
            title: "2. Data Collection & Integration",
            description:
                "We integrate various data sources to provide a holistic view of your website's performance and user interactions..",
        },
        {
            id: 3,
            icon: MdOutlineCollectionsBookmark,
            title: "3. Analysis & Interpretation",
            description:
                "Our team analyzes the collected data to identify trends, patterns, and areas for improvement.",
        },
        {
            id: 4,
            icon: MdTipsAndUpdates,
            title: "4. Reporting",
            description:
                "We deliver detailed reports that provide actionable insights and recommendations based on our analysis.",
        },
        {
            id: 5,
            icon: FaHandsHelping,
            title: "5. Continuous Improvement",
            description:
                "We work with you to implement changes and track their impact, continuously optimizing your web analytics strategy.",
        },
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
            <div className="bg-fixed bg-[url('https://i.ibb.co/dDQSgyb/visual.jpg')] h-[600px] w-full flex justify-center items-center relative overflow-auto">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="text-center relative z-10 text-white">
                    <h1 className="font-semibold">Web Analytics</h1>
                    <h2 className="text-5xl my-8 font-semibold leading-[60px]">
                        Unlock Actionable Insights with Advanced <br /> {" "}
                        <span className="text-gradient font-bold ">Web Analytics</span>
                    </h2>
                    <p>
                        Info Logic Solution offers comprehensive web analytics services to <br /> help you understand your website's performance and user behavior for both client and server sides. <br /> We use tools like Google Tag Manager, Conversion API, Google Analytics, <br /> and other marketing platforms to provide insights that drive informed business decisions.
                    </p>
                </div>
            </div>

            {/* Choose Yours one - 2nd section */}
            <h1 className="text-gradient font-bold text-center text-6xl mt-32 mb-10">
                Choose Yours one
            </h1>
            <div className="grid md:grid-cols-2 mx-6 md:mx-24 gap-16 mt-16">
                {sections.map((section) => (
                    <div key={section.id} className="shadow-xl rounded px-6 py-7">
                        {/* <img
                            src={section.img}
                            alt={section.title}
                            className="h-[350px] w-full bg-orange-300"
                        /> */}
                        <h2 className="text-4xl my-5">{section.title}</h2>
                        <p>{section.description}</p>
                        <Link href={section.link}>
                            <button className="secondary-button mt-5 hover:scale-100">
                                Reach us
                            </button>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Our Visualization Process - 3rd section */}

            {/* <div className='absolute left-0 w-full h-full flex justify-center items-center -mt-64'>
                <div className='h-[300px] w-[800px] bg-[radial-gradient(circle,_rgba(255,183,77,0.8)_0%,_rgba(255,123,0,0.6)_50%,_rgba(255,69,0,0.4)_100%)] blur-xl'></div>
            </div> */}


            <h1 className="text-gradient font-bold text-center text-6xl mt-32 mb-10">
                Our Analytics Process
            </h1>
            <p className="text-center" >
                Do you dream of exploring the furthest reaches of outer space? <br />
                Do you live for bringing brands to life and finding new ways to tell exciting
                brand stories? <br />
                If so, you may have just found your people.
            </p>

            <div className="flex flex-col md:flex-row mx-10 md:mx-24 mt-5  gap-7">
                <div className="md:w-1/2">
                    {processSteps
                        .filter((_, index) => index % 2 === 0)
                        .map((step) => (
                            <div key={step.id} className="flex items-center gap-7 mt-16">
                                <step.icon className="bg-orange-600 p-2 w-[60px] rounded-full text-5xl text-white" />
                                <div>
                                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="md:w-1/2">
                    {processSteps
                        .filter((_, index) => index % 2 !== 0)
                        .map((step) => (
                            <div key={step.id} className="flex items-center gap-7 mt-16">
                                <step.icon className="bg-orange-600 p-2 w-[70px] text-center rounded-full text-5xl text-white" />
                                <div>
                                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <Message />

            <h1 className="text-gradient font-bold text-center text-6xl mt-32 mb-10">
                Work Samples
            </h1>

            {[0, 1, 2].map((row) => (
                <div
                    key={row}
                    className={`md:flex items-center gap-10 md:mx-24 py-7 ${row !== 0 ? "-mt-7" : ""
                        }`}
                >
                    {workSamples.map((sample) => (
                        <div key={sample.id} className="shadow-lg py-7 px-4 rounded-lg">
                            {/* <img className="rounded" src={sample.img} alt={sample.title} /> */}
                            <div className="flex items-center gap-4 mt-5">
                                <sample.icon className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                                <h3 className="text-2xl">{sample.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            ))}

            {/* 4th section */}
            <div className="w-2/4 mx-auto py-32">
                <h1 className="text-gradient font-bold text-6xl mb-10">
                    Let's Talk <br /> about Analytics
                </h1>
                <p>
                    We thrive on innovation and turning brilliant ideas into reality. Our goal is
                    to create exceptional experiences through meticulous execution. If you share
                    our passion, don't hesitate to reach out via phone or email to begin your
                    journey with us.
                </p>
                <Link href="/contact">
                    <button className="primary-button mt-5">
                        Contact Us <IoMdCall className="text-xl ml-2" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default WebAnalytics;
