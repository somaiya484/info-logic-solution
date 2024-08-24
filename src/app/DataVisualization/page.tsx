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
            img: "/looksam12.jpg",
            title: "Regional - Distinct Count",
            link: 'https://app.powerbi.com/view?r=eyJrIjoiMzFkNmViN2ItYTFlZS00NGI1LWFmMzMtNTA1MDczODllMDkyIiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 2,
            category: "Power BI",
            img: "/looksam7.jpg",
            title: "Muppet - Inventory",
            link: 'https://app.powerbi.com/view?r=eyJrIjoiZWEyZmYzMmEtOTcwYS00MzUwLWJiZmItYTEyZDczYWJjODhkIiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 3,
            category: "Power BI",
            img: "/looksam13.jpg",
            title: "Magento - Ecommerce",
            link: 'https://app.powerbi.com/view?r=eyJrIjoiODcwNjgwMGMtNzY1Mi00M2VjLThiMTQtZDk2YzQyZmUxZDJmIiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 4,
            category: "Power BI",
            img: "/looksam5.jpg",
            title: "Healthy Food - Revenue",
            link: 'https://app.powerbi.com/view?r=eyJrIjoiYzlmYWFmMzMtYWM5Mi00NTA3LWIxMzYtYWJkNDkzZTNmMjU0IiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 5,
            category: "Power BI",
            img: "/looksam16.jpg",
            title: "Store Insight - Sales",
            link: 'https://app.powerbi.com/view?r=eyJrIjoiMTIzNGVjNmEtOGY0ZC00YTJjLWFhYWItMGU3OTk5ZmU0ZTNhIiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 6,
            category: "Power BI",
            img: "/looksam11.jpg",
            title: "Batex- Data Range",
            link: 'https://app.powerbi.com/view?r=eyJrIjoiMTkxOWIzMDItZGVmMy00MGZmLTkzY2UtZTZiZTdmM2ZkMGNmIiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 7,
            category: "Looker Studio",
            img: "/looksam7.jpg",
            title: "Promo Business - Report",
            link: 'https://lookerstudio.google.com/u/0/reporting/03084ee0-265e-484e-8cce-7c4659023e6c/page/p_wny5ctoocd',
        },
        {
            id: 8,
            category: "Looker Studio",
            img: "/looksam5.jpg",
            title: "Architectural - Report",
            link: 'https://lookerstudio.google.com/u/0/reporting/5aba887b-c46e-48ac-805b-42c7c6080618/page/VMAzC',
        },
        {
            id: 9,
            category: "Looker Studio",
            img: "/looksam13.jpg",
            title: "Vacation Rental - Report",
            link: 'https://lookerstudio.google.com/u/0/reporting/b3d68400-3d98-4a4f-9182-d9927820b9dd/page/yEsVD',
        },
        {
            id: 10,
            category: "Looker Studio",
            img: "/looksam10.jpg",
            title: "Debisca - Ecommerce",
            link: 'https://lookerstudio.google.com/reporting/8d0707b4-925f-4397-a690-8861fd306c33/page/rpRbD',
        },
        {
            id: 11,
            category: "Looker Studio",
            img: "/looksam7.jpg",
            title: "FirePlace - Report",
            link: 'https://lookerstudio.google.com/reporting/7159f089-c0ac-45c5-a6b1-1d9353ee6b25/page/6pNmD',
        },
        {
            id: 12,
            category: "Looker Studio",
            img: "/looksam5.jpg",
            title: "Nitro House - Lead",
            link: 'https://lookerstudio.google.com/reporting/27d0424e-2712-46ee-b6c7-470108d10031/page/XpgGD',
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
