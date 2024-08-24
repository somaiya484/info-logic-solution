import ServicePage from "@/components/ServicePage";

const DataVisualizationPage: React.FC = () => {
    const sections = [
        {
            id: 1,
            img: "/Looker-s.png",
            title: "Looker Studio",
            description:
                "Our Expert Looker Master will transform your data into clear, actionable insights with Looker Studio. We design custom dashboards and reports that help you visualize your data and make informed business decisions.",
        },
        {
            id: 2,
            img: "/power-BI2.jpg",
            title: "Power BI",
            description:
                "Unlock the power of your data with Microsoft Power BI. Our experts create interactive dashboards and reports that provide in-depth insights into your business performance, helping you drive strategic decisions.",
        },
    ];

    const processSteps = [
        {
            id: 1,
            title: "Assessment",
            description:
                "We assess your current data sources and analytics needs for better understanding.",
        },
        {
            id: 2,
            title: "Integration & Analysis",
            description:
                "We gather and integrate data from various sources, then analyze it to uncover insights.",
        },
        {
            id: 3,
            title: "Reporting",
            description:
                "We create visualizations and detailed reports using advanced tools to highlight findings.",
        },
        {
            id: 4,
            title: "Guidance & Support",
            description:
                "We provide actionable recommendations and ongoing support to refine your analytics strategy.",
        }
    ];

    const workSamples = [
        {
            id: 1,
            category: "Power BI",
            img: "/pb.jpg",
            title: "Regional - Distinct Count",
            link: 'https://app.powerbi.com/view?r=eyJrIjoiZGJmMWYyODQtYTNkMS00ZjI3LTllMmItOGVlNTU5ZmE3NmZkIiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 2,
            category: "Power BI",
            img: "/pb2.jpg",
            title: "Muppet - Inventory",
            link: 'https://app.powerbi.com/view?r=eyJrIjoiY2E5NTkyNTEtMjY2Yi00ZTNiLWFhZjItYjk0MGM5YWYyYjc0IiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 3,
            category: "Power BI",
            img: "/pb3.jpg",
            title: "Magento - Ecommerce",
            link: 'https://app.powerbi.com/view?r=eyJrIjoiODcwNjgwMGMtNzY1Mi00M2VjLThiMTQtZDk2YzQyZmUxZDJmIiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 4,
            category: "Power BI",
            img: "/pb4.jpg",
            title: "Healthy Food - Revenue",
            link: 'https://app.powerbi.com/view?r=eyJrIjoiMWFjZjkxOGQtOTYwMi00MGUwLThmMTctOTc1NzlmNDk0MzliIiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 5,
            category: "Power BI",
            img: "/pb5.jpg",
            title: "Store Insight - Sales",
            link: 'https://app.powerbi.com/view?r=eyJrIjoiNDcwOGNmYjUtNDY2OS00MTgzLTk5ZmItNWE4ZTlmNGU0ODk2IiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 6,
            category: "Power BI",
            img: "/pb6.jpg",
            title: "Batex- Data Range",
            link: 'https://app.powerbi.com/view?r=eyJrIjoiYTdlMmFiM2UtYWFmZS00OTM4LWIzYjgtZjlhNjhmZjg1YTlhIiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 9,
            category: "Looker Studio",
            img: "/12.jpg",
            title: "Vacation Rental - Report",
            link: 'https://lookerstudio.google.com/reporting/7d2ec008-b23f-4a44-b840-a91aaa81a1ad',
        },
        {
            id: 10,
            category: "Looker Studio",
            img: "/13.jpg",
            title: "Debisca - Ecommerce",
            link: 'https://lookerstudio.google.com/reporting/ee7b9dcb-a23e-42a4-a63f-5f4ae384833e',
        },
        {
            id: 11,
            category: "Looker Studio",
            img: "/14.jpg",
            title: "FirePlace - Report",
            link: 'https://lookerstudio.google.com/reporting/89ec4268-3e3c-47ee-a9d6-622b873c1dd0',
        },
        {
            id: 12,
            category: "Looker Studio",
            img: "/15.jpg",
            title: "Nitro House - Lead",
            link: 'https://lookerstudio.google.com/reporting/f0a492ed-9ee5-4fa5-86ae-f7dd0ad44f55',
        },
        {
            id: 13,
            category: "Looker Studio",
            img: "/16.jpg",
            title: "Kubla - Report",
            link: 'https://lookerstudio.google.com/u/0/reporting/b55fc700-00eb-40bb-a697-41dd25424997/page/p_x16l377g7c',
        }
    ];

    return (
        <div>

            <div className="bg-fixed bg-[url('/datavisualization.jpg')] h-[600px] w-full flex justify-center items-center relative overflow-auto">
                <div className="absolute inset-0 banner-background opacity-95"></div>
                <div className="text-center relative z-10">
                    <h1 className="font-semibold">Data Visualization</h1>
                    <h2 className="text-2xl md:text-6xl mt-10 font-semibold">Empower Your Business with</h2>
                    <h2 className="text-2xl md:text-6xl font-semibold mt-5 mb-10 text-gradient font-bold ">Data Visualization</h2>
                    <p className="md:text-base">Our data analytics services at Info Logic Solution leverage powerful tools like Looker Studio and Power BI <br /> to transform raw data into actionable insights. We help you make informed decisions that<br /> drive growth and improve business performance.</p>
                </div>
            </div>

            <ServicePage
                sections={sections}
                processSteps={processSteps}
                workSamples={workSamples}
                serviceName="Visualization"
            />
        </div>

    );
};

export default DataVisualizationPage;
