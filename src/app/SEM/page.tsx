import {
    MdOutlineAppRegistration,
    MdOutlineAssessment,
    MdHourglassFull,
    MdOutlineCollectionsBookmark,
    MdTipsAndUpdates,
} from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import Message from "../../components/Message";
import Link from "next/link";

interface Section {
    id: number;
    img: string;
    title: string;
    description: string;
    link: string;
}

interface ProcessStep {
    id: number;
    icon: React.ElementType;
    title: string;
    description: string;
}

const SEM: React.FC = () => {
    const sections: Section[] = [
        {
            id: 1,
            img: "/seoPage.jpg",
            title: "SEO",
            description:
                "Our SEO strategies are designed to improve your website's visibility in search engine results pages (SERPs), driving organic traffic and increasing your online presence. From on-page optimization to keyword research and content strategy, we ensure your website is optimized to rank higher and attract relevant visitors.",
            link: "/contact",
        },
        {
            id: 2,
            img: "/googleAdsCampaigns.png",
            title: "Google Ads Campaigns",
            description:
                " Drive targeted traffic to your website with effective Google Ads campaigns. We create, manage, and optimize your ads to ensure maximum ROI, helping you reach potential customers exactly when they’re searching for your products or services.",
            link: "/contact",
        },
        {
            id: 3,
            img: "/bingAds.jpeg",
            title: "Bing Ads",
            description:
                " Drive targeted traffic to your website with effective Bing Ads campaigns. We create, manage, and optimize your ads to ensure maximum ROI, helping you reach potential customers exactly when they’re searching for your products or services.",
            link: "/contact",
        }
    ];

    const processSteps: ProcessStep[] = [
        {
            id: 1,
            icon: MdOutlineCollectionsBookmark,
            title: "1. Audit & Analysis",
            description:
                " We start with a thorough audit of your current online presence, including website performance, keyword rankings, competitive analysis, and social media engagement.",
        },
        {
            id: 2,
            icon: MdOutlineAppRegistration,
            title: "2. Strategy Development",
            description:
                " Based on our findings, we develop a customized strategy that includes on-page SEO optimization, keyword research, targeted SEM ad campaigns, and tailored social media plans.",
        },
        {
            id: 3,
            icon: MdHourglassFull,
            title: "3. Implementation",
            description:
                "Our team implements the strategy, optimizes your website content and structure for SEO, sets up effective SEM campaigns on platforms like Google Ads, and creates engaging content for social media platforms like Facebook, Instagram, and Twitter.",
        },
        {
            id: 4,
            icon: FaHandsHelping,
            title: "4. Monitoring & Optimization",
            description:
                "We continuously monitor the performance of your SEO, SEM, and social media efforts, making adjustments and optimizations to ensure maximum ROI and engagement.",
        },
        {
            id: 5,
            icon: MdTipsAndUpdates,
            title: "5. Reporting",
            description:
                "We provide regular reports detailing the progress and results of our SEO, SEM, and social media activities, keeping you informed every step of the way.",
        },
    ];

    const workSamples: Section[] = [
        {
            id: 1,
            img: "https://cratosai-backend.itechnolabs.tech/images/17105094850.png",
            title: "Google Ads - Light",
            description: "Sample description",
            link: "/sample-link",
        },
        {
            id: 2,
            img: "https://cratosai-backend.itechnolabs.tech/images/17105094850.png",
            title: "Google Ads - Light",
            description: "Sample description",
            link: "/sample-link",
        },
        {
            id: 3,
            img: "https://cratosai-backend.itechnolabs.tech/images/17105094850.png",
            title: "Google Ads - Light",
            description: "Sample description",
            link: "/sample-link",
        },
    ];

    return (
        <div className="bg-white text-black">
            <div className="bg-fixed bg-[url('https://i.ibb.co/CQPDZv7/marvin-meyer-SYTO3xs06f-U-unsplash.jpg')] h-[600px] w-full flex justify-center items-center relative overflow-auto">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="text-center relative z-10 text-white">
                    <h1 className="font-semibold">SEO & SEM & SMM</h1>
                    <h2 className="text-5xl my-8 font-semibold leading-[60px]">
                        Elevate Your Online Presence <br /> with Comprehensive <br /> {" "}
                        <span className="text-gradient font-bold ">SEO, SEM, Social Media Marketing</span>
                    </h2>
                    <p>
                        We will provide a full suite of digital marketing services designed to boost your <br /> online visibility, drive targeted traffic, and engage your audience. Our expert team integrates SEO, SEM, <br />and social media marketing strategies to ensure your brand reaches its full potential
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
                            className="h-[370px] w-full bg-orange-300"
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
            <h1 className="text-gradient font-bold text-center text-6xl mt-32 mb-10">
                Our Optimization Process
            </h1>
            <p className="text-center">
                Do you dream of exploring the furthest reaches of outer space? <br />
                Do you live for bringing brands to life and finding new ways to tell exciting
                brand stories? <br />
                If so, you may have just found your people.
            </p>

            <div className="flex flex-col md:flex-row md:mx-14 mt-5  gap-7">
                <div className="md:w-1/2">
                    {processSteps
                        .filter((_, index) => index % 2 === 0)
                        .map((step) => (
                            <div key={step.id} className="flex items-center gap-7 mt-16">
                                <step.icon className="bg-orange-600 p-2 w-[100px] rounded-full text-5xl text-white" />
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
                                <step.icon className="bg-orange-600 p-2 w-[100px] text-center rounded-full text-5xl text-white" />
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
                    className={`md:flex items-center gap-10 md:mx-14 py-7 ${row !== 0 ? "-mt-7" : ""
                        }`}
                >
                    {workSamples.map((sample) => (
                        <div key={sample.id} className="shadow-lg py-7 px-4 rounded-lg">
                            {/* <img className="rounded" src={sample.img} alt={sample.title} /> */}
                            <div className="flex items-center gap-4 mt-5">
                                <MdOutlineAssessment className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                                <h3 className="text-2xl">{sample.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            ))}

            {/* 4th section */}
            <div className="w-2/4 mx-auto py-32">
                <h1 className="text-gradient font-bold text-6xl mb-10">
                    Let's Talk <br /> about Optimization
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

export default SEM;
