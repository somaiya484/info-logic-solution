import ServicePage from "@/components/ServicePage";

const LookerPage: React.FC = () => {
    const sections = [
        {
            id: 1,
            img: "/looksam1.jpg",
            title: "Looker Reporting",
            description:
                "Transform raw data into actionable insights with Looker Studio. We create comprehensive and interactive reports that help you make data-driven decisions and understand key performance metrics at a glance.",
        },
        {
            id: 2,
            img: "/looksam3.jpg",
            title: "Custom Reporting Solution",
            description:
                "Need something unique? We offer custom reporting solutions tailored to your specific requirements. Whether it's combining multiple data sources or creating bespoke visualizations, we've got you covered.",
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
            img: "/looksam7.jpg",
            title: "Promo Business - Report",
            link: 'https://lookerstudio.google.com/u/0/reporting/03084ee0-265e-484e-8cce-7c4659023e6c/page/p_wny5ctoocd',
        },
        {
            id: 2,
            category: "Looker Studio",
            img: "/looksam5.jpg",
            title: "Architectural - Report",
            link: 'https://lookerstudio.google.com/u/0/reporting/5aba887b-c46e-48ac-805b-42c7c6080618/page/VMAzC',
        },
        {
            id: 3,
            category: "Looker Studio",
            img: "/looksam13.jpg",
            title: "Vacation Rental - Report",
            link: 'https://lookerstudio.google.com/u/0/reporting/b3d68400-3d98-4a4f-9182-d9927820b9dd/page/yEsVD',
        },
        {
            id: 4,
            category: "Looker Studio",
            img: "/looksam10.jpg",
            title: "Debisca - Ecommerce",
            link: 'https://lookerstudio.google.com/reporting/8d0707b4-925f-4397-a690-8861fd306c33/page/rpRbD',
        },
        {
            id: 5,
            category: "Looker Studio",
            img: "/looksam7.jpg",
            title: "FirePlace - Report",
            link: 'https://lookerstudio.google.com/reporting/7159f089-c0ac-45c5-a6b1-1d9353ee6b25/page/6pNmD',
        },
        {
            id: 6,
            category: "Looker Studio",
            img: "/looksam5.jpg",
            title: "Nitro House - Lead",
            link: 'https://lookerstudio.google.com/reporting/27d0424e-2712-46ee-b6c7-470108d10031/page/XpgGD',
        },
        {
            id: 7,
            category: "Looker Studio",
            img: "/looksam7.jpg",
            title: "WW Trauma - Survey",
            link: 'https://lookerstudio.google.com/reporting/f7857c5f-9ea2-40bb-aadd-dcbb0b5ec95d/page/p_onq4gv6a4c',
        },
        {
            id: 8,
            category: "Looker Studio",
            img: "/looksam15.jpg",
            title: "PK4 - Student Tracking",
            link: 'https://lookerstudio.google.com/reporting/13b9f68c-5982-42c5-ad69-461263b0762e/page/PhafC',
        },
        {
            id: 9,
            category: "Looker Studio",
            img: "/looksam9.jpg",
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
                    <p className="md:text-base">At Info Logic Solution, we specialize in transforming complex data into clear and actionable insights. <br /> Our Looker services leverage Looker Studio to help you understand your data, make informed decisions,<br /> and drive business success.</p>
                </div>
            </div>

            <ServicePage sections={sections} processSteps={processSteps} workSamples={workSamples} serviceName="Looker Studio" />
        </div>
    );
};

export default LookerPage;

