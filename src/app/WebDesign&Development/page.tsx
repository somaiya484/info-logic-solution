import {
    MdOutlineAppRegistration,
    MdOutlineAssessment,
    MdHourglassFull,
    MdOutlineCollectionsBookmark,
    MdRecommend,
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

interface WorkSample {
    id: number;
    img: string;
    title: string;
    icon: React.ElementType;
}

const WebDesignDevelopment: React.FC = () => {
    const sections: Section[] = [
        {
            id: 1,
            img: "/WordPressDevelopment.jpg",
            title: "WordPress Development:",
            description:
                "Leverage the power and flexibility of WordPress to build a dynamic and scalable website. Our team creates custom themes and plugins to meet your specific needs, ensuring your site is both user-friendly and SEO-optimized.",
            link: "/contact",
        },
        {
            id: 2,
            img: "/ShopifyDevelopment.png",
            title: "Shopify Development:",
            description:
                "Build a robust e-commerce platform with Shopify. We design and develop beautiful, responsive online stores that provide an exceptional shopping experience for your customers while being easy to manage on the backend.",
            link: "/contact",
        },
        {
            id: 3,
            img: "/wixDevelopment.PNG",
            title: "Wix Development:",
            description:
                "Create stunning websites quickly with Wix. Our experts use the platform’s versatile tools to craft visually appealing and functional sites tailored to your brand, perfect for small businesses and personal projects.",
            link: "/contact",
        },
        {
            id: 4,
            img: "/WebDevelopment.jpg",
            title: "Web Development:",
            description:
                "When your project requires a more bespoke approach, our front-end Development services are here to help. We develop unique, scalable websites and applications tailored precisely to your business requirements. ",
            link: "/contact",
        }
    ];

    const processSteps: ProcessStep[] = [
        {
            id: 1,
            icon: MdOutlineCollectionsBookmark,
            title: "1. Discovery & Planning",
            description:
                "We start by understanding your goals, target audience, and requirements through thorough research and planning. This ensures we have a clear, strategic roadmap tailored to your unique business needs and objectives.",
        },
        {
            id: 2,
            icon: MdOutlineAppRegistration,
            title: "2. Design & Prototype",
            description:
                "Our creative team designs a prototype that aligns with your brand identity and vision. We meticulously address all your requirements to create an intuitive, engaging, and visually compelling design.",
        },
        {
            id: 3,
            icon: MdHourglassFull,
            title: "3. Development",
            description:
                "Once design requirements are approved, our developers begin building your site using the latest technologies, ensuring it is fast, and scalable, meeting high standards for performance, reliability, and future growth potential.",
        },
        {
            id: 4,
            icon: MdRecommend,
            title: "4. Testing & Launch",
            description:
                "Before going live, we'll ensure everything works perfectly, and compatibility across different devices and browsers. We then launch site, ensuring it is fully optimized for speed, provide an outstanding user experience.",
        },
        {
            id: 5,
            icon: FaHandsHelping,
            title: "5. Maintenance & Support",
            description:
                "After launching, we provide ongoing maintenance, support to keep your website up to date and running smoothly. Our team promptly addresses issues, and makes necessary changes for a seamless user experience.",
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
            <div className="bg-fixed bg-[url('https://i.ibb.co/PxHzBrJ/markus-winkler-Ir-Rb-SND5-EUc-unsplash.jpg')] h-[600px] w-full flex justify-center items-center relative overflow-auto">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="text-center relative z-10 text-white">
                    <h1 className="font-semibold">Web Design and Development</h1>
                    <h2 className="text-5xl my-8 font-semibold leading-[60px]">
                        Transform Your Online Presence with Stunning {" "} <br />
                        <span className="text-gradient font-bold ">Website Design & Development </span>
                    </h2>
                    <p>
                        At Info Logic Solution, we specialize in creating visually appealing and highly functional websites <br /> that reflect your brand's identity and engage your audience. Whether you need a site built on<br />  WordPress, Shopify, Wix, or a custom-coded solution, our team has the expertise to bring your vision to life.
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
                Our Development Process
            </h1>
            <p className="text-center">
                Do you dream of exploring the furthest reaches of outer space? <br />
                Do you live for bringing brands to life and finding new ways to tell exciting
                brand stories? <br />
                If so, you may have just found your people.
            </p>

            <div className="flex flex-col md:flex-row md:mx-24 mt-5  gap-7">
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
                    Let's Talk <br /> about Development
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

export default WebDesignDevelopment;
