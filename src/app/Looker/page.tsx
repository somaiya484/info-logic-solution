import ServicePage from "@/components/ServicePage";


const LookerPage: React.FC = () => {
    const sections = [
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

    const processSteps = [
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

    const workSamples = [
        {
            id: 1,
            category: "Looker Studio",
            img: "/lookers5.png",
            title: "Debisca - Ecommerce",
            link: 'https://lookerstudio.google.com/reporting/8d0707b4-925f-4397-a690-8861fd306c33/page/rpRbD',
        },
        {
            id: 2,
            category: "Looker Studio",
            img: "/lookers1.png",
            title: "FirePlace - Report",
            link: 'https://lookerstudio.google.com/reporting/7159f089-c0ac-45c5-a6b1-1d9353ee6b25/page/6pNmD',
        },
        {
            id: 3,
            category: "Looker Studio",
            img: "/lookers3.png",
            title: "Nitro House - Lead",
            link: 'https://lookerstudio.google.com/reporting/27d0424e-2712-46ee-b6c7-470108d10031/page/XpgGD',
        },
        {
            id: 4,
            category: "Looker Studio",
            img: "/lookers4.png",
            title: "WW Trauma - Survey",
            link: 'https://lookerstudio.google.com/reporting/f7857c5f-9ea2-40bb-aadd-dcbb0b5ec95d/page/p_onq4gv6a4c',
        },
        {
            id: 5,
            category: "Looker Studio",
            img: "/lookers6.png",
            title: "PK4 - Student Tracking",
            link: 'https://lookerstudio.google.com/reporting/13b9f68c-5982-42c5-ad69-461263b0762e/page/PhafC',
        },
        {
            id: 6,
            category: "Looker Studio",
            img: "/lookers2.png",
            title: "Kubla - Report",
            link: 'https://lookerstudio.google.com/reporting/c02faf95-df49-4dfb-95f3-6b13b8be248b/page/p_pr8q1l6ncd',
        }
    ];

    const plans = [
        {
            id: 1,
            title: "Basic",
            description: "Targeted insights on a single location",
            features: [
                "Map 100 outlets",
                "Up to 5 brands / products",
                "1 location",
                "Interactive dashboards",
                "Geospatial data visualizations",
                "Raw data downloads",
            ],
            link: "/sample-basic",
        },
        {
            id: 2,
            title: "Pro",
            description: "Broader insights and product tracking",
            features: [
                "Map 300 outlets",
                "Up to 10 brands / products",
                "Multiple locations",
                "Interactive dashboards",
                "Geospatial data visualizations",
                "Raw data downloads",
                "Unlimited users",
            ],
            link: "/sample-pro",
        },
        {
            id: 3,
            title: "Premium",
            description: "Expansive insights and product tracking",
            features: [
                "Map 1000 outlets",
                "Up to 20 brands / products",
                "Multiple locations",
                "Interactive dashboards",
                "Geospatial data visualizations",
                "Raw data downloads",
                "Unlimited users",
                "API access",
            ],
            link: "/sample-premium",
        },
    ];

    return (
        <div className="bg-white text-black">
            <div className="bg-fixed bg-[url('/Google-Looker-Studio-Tutorial.png')] h-[600px] w-full flex justify-center items-center relative overflow-auto">
                <div className="absolute inset-0 banner-background opacity-95"></div>
                <div className="text-center relative z-10">
                    <h1 className="font-semibold">Looker and Reporting</h1>
                    <h2 className="text-2xl md:text-6xl mt-10 font-semibold">Unlock Insights with Powerful</h2>
                    <h2 className="text-2xl md:text-6xl font-semibold py-5 mb-10 text-gradient font-bold">Looker & Reporting</h2>
                    <p className="text-base">At Info Logic Solution, we specialize in transforming complex data into clear and actionable insights. <br /> Our Looker services leverage Looker Studio to help you understand your data, make informed decisions,<br /> and drive business success.</p>
                </div>
            </div>

            <div className="my-16">
                <h2 className="text-center font-bold mb-8 text-6xl text-gradient">Our Plans</h2>
                <div className="md:flex ml-8 md:ml-0 justify-center gap-8">
                    {plans.map((plan, index) => (
                        <div key={plan.id} className={`relative border border-orange-200 p-6 mt-10 rounded-lg shadow-lg w-80 text-center flex flex-col justify-between bg-white hover:shadow-2xl transition-shadow duration-300 ${index === 1 ? 'border-2 border-orange-500' : ''}`}>
                            {index === 1 && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white py-1 px-3 rounded-t-md">
                                    Most Popular
                                </div>
                            )}
                            <div>
                                <h3 className={`text-2xl font-semibold mb-4 ${index === 1 ? 'text-orange-500' : 'text-black'}`}>{plan.title}</h3>
                                <p className="mb-10 text-gray-500 w-[70%] mx-auto text-sm ">{plan.description}</p>
                                <ul className="text-left mb-4 text-gray-800">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="mb-2">• {feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <a
                                href={plan.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-orange-600 text-white py-2 px-4 rounded mt-4 hover:bg-orange-700 transition-colors duration-300"
                            >
                                Preview
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <ServicePage processSteps={processSteps} workSamples={workSamples} serviceName="Looker Studio" />
        </div>
    );
};

export default LookerPage;

