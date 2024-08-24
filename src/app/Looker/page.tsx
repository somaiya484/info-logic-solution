import ServicePage from "@/components/ServicePage";

const LookerPage: React.FC = () => {
    const sections = [
        {
            id: 1,
            img: "look.png",
            title: "Looker Reporting",
            description:
                "Transform raw data into actionable insights with Looker Studio. We create comprehensive and interactive reports that help you make data-driven decisions and understand key performance metrics at a glance.",
        },
        {
            id: 2,
            img: "23.jpg",
            title: "Custom Reporting",
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
            img: "1.jpg",
            title: "Promo Business - Report",
            link: 'https://lookerstudio.google.com/reporting/d6375d72-f428-413d-86a0-d815f627be2d',
        },
        {
            id: 2,
            category: "Looker Studio",
            img: "2.jpg",
            title: "Architectural - Report",
            link: 'https://lookerstudio.google.com/u/0/reporting/f9f8a5b5-145b-4312-8992-c0783b7d62de/page/p_i69ns9r9fd',
        },
        {
            id: 3,
            category: "Looker Studio",
            img: "3.jpg",
            title: "Vacation Rental - Report",
            link: 'https://lookerstudio.google.com/reporting/ad232a63-0375-4c88-bd6e-371ec96b420a',
        },
        {
            id: 4,
            category: "Looker Studio",
            img: "4.jpg",
            title: "Debisca - Ecommerce",
            link: 'https://lookerstudio.google.com/reporting/82ce4ad1-5e15-41e9-b0c8-7812d928ffc0',
        },
        {
            id: 6,
            category: "Looker Studio",
            img: "6.jpg",
            title: "Nitro House - Lead",
            link: 'https://lookerstudio.google.com/reporting/04f4c7a9-9940-42ad-af52-8cf1d5daa1a2',
        },
        {
            id: 7,
            category: "Looker Studio",
            img: "7.jpg",
            title: "WW Trauma - Survey",
            link: 'https://lookerstudio.google.com/reporting/f7857c5f-9ea2-40bb-aadd-dcbb0b5ec95d',
        },
        {
            id: 8,
            category: "Looker Studio",
            img: "8.jpg",
            title: "PK4 - Student Tracking",
            link: 'https://lookerstudio.google.com/reporting/b9322e31-ea0e-426e-ae9b-5716332ebdfc',
        },
        {
            id: 9,
            category: "Looker Studio",
            img: "9.jpg",
            title: "Kubla - Report",
            link: 'https://lookerstudio.google.com/reporting/a28e4820-6555-4083-82fa-9d31866c93c5',
        }
    ];

    return (
        <div className="bg-white text-black">
            <div className="bg-fixed bg-[url('/Google-Looker-Studio-Tutorial.png')] h-[600px] w-full flex justify-center items-center relative overflow-auto">
                <div className="absolute inset-0 banner-background opacity-95"></div>
                <div className="text-center relative z-10">
                    <h1 className="font-semibold">Looker and Reporting</h1>
                    <h2 className="text-2xl md:text-6xl mt-10 font-semibold">Unlock Insights with Powerful</h2>
                    <h2 className="text-2xl md:text-6xl py-5 mb-10 text-gradient font-bold">Looker & Reporting</h2>
                    <p className="md:text-base">At Info Logic Solution, we specialize in transforming complex data into clear and actionable insights. <br /> Our Looker services leverage Looker Studio to help you understand your data, make informed decisions,<br /> and drive business success.</p>
                </div>
            </div>

            <ServicePage sections={sections} processSteps={processSteps} workSamples={workSamples} serviceName="Looker Studio" />
        </div>
    );
};

export default LookerPage;
