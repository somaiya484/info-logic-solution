import { AiFillTags } from "react-icons/ai";
import Message from "../../components/Message";
import Link from "next/link";
import ContactSection from "@/components/ContactSectionProps";
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

const Looker: React.FC = () => {
    const sections: Section[] = [
        {
            id: 1,
            img: "/LookerStudio.png",
            title: "Looker Studio Reporting",
            description:
                "Transform raw data into actionable insights with Looker Studio. We create comprehensive and interactive reports that help you make data-driven decisions and understand key performance metrics at a glance.",
            link: "/contact",
        },
        {
            id: 3,
            img: "/CustomReports.png",
            title: "Custom Reporting Solutions",
            description:
                "Need something unique? We offer custom reporting solutions tailored to your specific requirements. Whether it's combining multiple data sources or creating bespoke visualizations, we've got you covered.",
            link: "/contact",
        }
    ];

    const processSteps: ProcessStep[] = [
        {
            id: 1,
            title: "Data Collection",
            description: "We gather and analyze your data sources, ensuring we have all the necessary information to create meaningful visualizations."
        },
        {
            id: 2,
            title: "Data Processing",
            description: "Our team processes the collected data, cleaning and structuring it to ensure accuracy and relevance for the reports."
        },
        {
            id: 3,
            title: "Visualization",
            description: "We design and develop interactive and visually appealing reports that make complex data easy to understand and act upon."
        },
        {
            id: 4,
            title: "Review & Feedback",
            description: "We review the reports with you, incorporating your feedback to ensure the final product meets your expectations and needs."
        }
    ];

    const workSamples: WorkSample[] = [
        {
            id: 1,
            category: "Looker Studio",
            img: "/lookers5.png",
            title: "Debisca - Ecommerce",
            icon: AiFillTags,
            link: 'https://lookerstudio.google.com/reporting/8d0707b4-925f-4397-a690-8861fd306c33/page/rpRbD',
        },
        {
            id: 2,
            category: "Looker Studio",
            img: "/lookers1.png",
            title: "FirePlace - Report",
            icon: AiFillTags,
            link: 'https://lookerstudio.google.com/reporting/7159f089-c0ac-45c5-a6b1-1d9353ee6b25/page/6pNmD',
        },
        {
            id: 3,
            category: "Looker Studio",
            img: "/lookers3.png",
            title: "Nitro House - Lead",
            icon: AiFillTags,
            link: 'https://lookerstudio.google.com/reporting/27d0424e-2712-46ee-b6c7-470108d10031/page/XpgGD',
        },
        {
            id: 4,
            category: "Looker Studio",
            img: "/lookers4.png",
            title: "WW Trauma - Survey",
            icon: AiFillTags,
            link: 'https://lookerstudio.google.com/reporting/f7857c5f-9ea2-40bb-aadd-dcbb0b5ec95d/page/p_onq4gv6a4c',
        },
        {
            id: 5,
            category: "Looker Studio",
            img: "/lookers6.png",
            title: "PK4 - Student Tracking",
            icon: AiFillTags,
            link: 'https://lookerstudio.google.com/reporting/13b9f68c-5982-42c5-ad69-461263b0762e/page/PhafC',
        },
        {
            id: 6,
            category: "Looker Studio",
            img: "/lookers2.png",
            title: "Kubla - Report",
            icon: AiFillTags,
            link: 'https://lookerstudio.google.com/reporting/c02faf95-df49-4dfb-95f3-6b13b8be248b/page/p_pr8q1l6ncd',
        }
    ];

    return (
        <div className="bg-white text-black">

            <div className="bg-fixed bg-[url('/datavisualization.jpg')] h-[600px] w-full flex justify-center items-center relative overflow-auto">
                <div className="absolute inset-0 bg-gradient-to-b from-[#feddcb] to-[#ffffff] opacity-95"></div>
                <div className="text-center relative z-10">
                    <h1 className="font-semibold">Looker and Reporting</h1>
                    <h2 className="text-5xl my-8 font-semibold leading-[60px]">
                        Unlock Insights with Powerful {" "} <br />
                        <span className="text-gradient font-bold ">Looker & Reporting</span>
                    </h2>
                    <p>
                        At Info Logic Solution, we specialize in transforming complex data into clear and actionable insights. <br /> Our Looker services leverage Looker Studio to help you understand your data, make informed decisions,<br /> and drive business success.
                    </p>
                </div>
            </div>

            {/* Choose Yours one - 2nd section */}
            <div className="my-20 page-background">
                <h1 className="text-gradient font-bold text-center text-6xl mb-14">
                    Our Services
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
                                <Link href={section.link}>
                                    <button className="secondary-button hover:scale-105 duration-200">
                                        Reach Us
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Our Process - 3rd section */}
            <h1 className="font-bold text-center text-4xl mt-10 mb-10 ">
                Our <span className="text-gradient">Process</span>
            </h1>
            <p className="text-center text-lg">
                Do you dream of exploring the furthest reaches of outer space? <br />
                Do you live for bringing brands to life and finding new ways to tell exciting
                brand stories? <br />
                If so, you may have just found your people.
            </p>

            <div className="grid md:grid-cols-4 px-6 gap-6 mt-8 page-background">
                {processSteps.map((step) => (
                    <div key={step.id} className="border-b pb-5 border-gray-700 hover:border-transparent duration-300 ease-in-out transition-transform transform hover:scale-105 md:hover:scale-110">
                        <h1 className="text-4xl md:text-7xl text-gradient font-bold">{step.id}.</h1>
                        <h2 className="text-xl md:text-2xl font-semibold mt-12">{step.title}</h2>
                        <p className="md:text-lg font-semibold text-stone-600 mt-3">{step.description}</p>
                    </div>
                ))}
            </div>

            {/* Work sample - 4th section */}
            <div className="bg-white text-black">
                <h1 className="text-gradient font-bold text-center text-6xl mt-32 mb-20">
                    Work Samples
                </h1>

                <div className="mx-auto grid md:grid-cols-3 gap-10 px-6 md:px-16">
                    {workSamples.map((sample) => (
                        <div key={sample.id} className="sample-style">
                            <img className="rounded-2xl w-full h-60 object-cover shadow-lg shadow-orange-100" src={sample.img} alt={sample.title} />
                            <div className="sample-inner-style">
                                <div className="text-center text-white p-6">
                                    <h3 className="text-lg font-semibold italic mb-5 text-center">{sample.category}</h3>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-3">{sample.title}</h2>
                                    <Link href={sample.link}>
                                        <sample.icon className="text-4xl mx-auto hover:text-orange-500 duration-200 transition-colors" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Message />

            <CompanyTwo></CompanyTwo>

            {/* 4th section */}
            <ContactSection serviceName="Looker" />

        </div>
    );
};

export default Looker;

