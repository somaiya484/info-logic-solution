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

    return (
        <div>

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
            <ServicePage
                sections={sections}
                processSteps={processSteps}
                workSamples={workSamples}
                serviceName="Looker"
            />
        </div>

    );
};

export default LookerPage;
