import ServicePage from "@/components/ServicePage";

const WebAnalytics: React.FC = () => {
    const sections = [
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
            title: "Conversion API",
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

    const processSteps = [
        {
            id: 1,
            title: "Setup & Configuration",
            description:
                "We set up and configure analytics tools on your website for accurate data collection and integrate various data sources for a holistic view.",
        },
        {
            id: 2,
            title: "Data Collection & Integration",
            description:
                "We ensure precise data collection from multiple sources, providing a comprehensive overview of your website's performance and user interactions.",
        },
        {
            id: 3,
            title: "Analysis & Reporting",
            description:
                "Our team analyzes data to identify trends, patterns, and areas for improvement, delivering detailed reports with actionable insights and recommendations.",
        },
        {
            id: 4,
            title: "Continuous Improvement",
            description:
                "We work with you to implement changes and track their impact, continuously optimizing your web analytics strategy for better results.",
        },
    ];

    const workSamples = [
        {
            id: 1,
            category: "Power BI",
            img: "/bi4.png",
            title: "Regional - Distinct Count",
            link: 'https://app.powerbi.com/view?r=eyJrIjoiMzFkNmViN2ItYTFlZS00NGI1LWFmMzMtNTA1MDczODllMDkyIiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 2,
            category: "Power BI",
            img: "/bi2.png",
            title: "Muppet - Inventory",
            link: 'https://app.powerbi.com/view?r=eyJrIjoiZWEyZmYzMmEtOTcwYS00MzUwLWJiZmItYTEyZDczYWJjODhkIiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 3,
            category: "Power BI",
            img: "/bi3.png",
            title: "Magento - Ecommerce",
            link: 'https://app.powerbi.com/view?r=eyJrIjoiODcwNjgwMGMtNzY1Mi00M2VjLThiMTQtZDk2YzQyZmUxZDJmIiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 4,
            category: "Power BI",
            img: "/bi1.png",
            title: "Healthy Food - Revenue",
            link: 'https://app.powerbi.com/view?r=eyJrIjoiYzlmYWFmMzMtYWM5Mi00NTA3LWIxMzYtYWJkNDkzZTNmMjU0IiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 5,
            category: "Power BI",
            img: "/bi6.png",
            title: "Store Insight - Sales",
            link: 'https://app.powerbi.com/view?r=eyJrIjoiMTIzNGVjNmEtOGY0ZC00YTJjLWFhYWItMGU3OTk5ZmU0ZTNhIiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 6,
            category: "Power BI",
            img: "/bi5.png",
            title: "Batex- Data Range",
            link: 'https://app.powerbi.com/view?r=eyJrIjoiMTkxOWIzMDItZGVmMy00MGZmLTkzY2UtZTZiZTdmM2ZkMGNmIiwidCI6ImIzMTY2OTliLWEwNTItNDA0ZS05N2EzLWEzM2Y4NTIyZGZiZCIsImMiOjEwfQ%3D%3D',
        },
        {
            id: 7,
            category: "Looker Studio",
            img: "/lookers5.png",
            title: "Debisca - Ecommerce",
            link: 'https://lookerstudio.google.com/reporting/8d0707b4-925f-4397-a690-8861fd306c33/page/rpRbD',
        },
        {
            id: 8,
            category: "Looker Studio",
            img: "/lookers1.png",
            title: "FirePlace - Report",
            link: 'https://lookerstudio.google.com/reporting/7159f089-c0ac-45c5-a6b1-1d9353ee6b25/page/6pNmD',
        },
        {
            id: 9,
            category: "Looker Studio",
            img: "/lookers3.png",
            title: "Nitro House - Lead",
            link: 'https://lookerstudio.google.com/reporting/27d0424e-2712-46ee-b6c7-470108d10031/page/XpgGD',
        },
        {
            id: 10,
            category: "Looker Studio",
            img: "/lookers4.png",
            title: "WW Trauma - Survey",
            link: 'https://lookerstudio.google.com/reporting/f7857c5f-9ea2-40bb-aadd-dcbb0b5ec95d/page/p_onq4gv6a4c',
        },
        {
            id: 11,
            category: "Looker Studio",
            img: "/lookers6.png",
            title: "PK4 - Student tracking",
            link: 'https://lookerstudio.google.com/reporting/13b9f68c-5982-42c5-ad69-461263b0762e/page/PhafC',
        },
        {
            id: 12,
            category: "Looker Studio",
            img: "/lookers2.png",
            title: "Kubla - Report",
            link: 'https://lookerstudio.google.com/reporting/c02faf95-df49-4dfb-95f3-6b13b8be248b/page/p_pr8q1l6ncd',
        },
    ];


    return (
        <div>
            <div className="bg-fixed bg-[url('/analy.jpg')] h-[600px] w-full flex justify-center items-center relative overflow-auto">
                <div className="absolute inset-0 banner-background opacity-90"></div>
                <div className="text-center relative z-10">
                    <h1 className="font-semibold">Web Analytics</h1>
                    <h2 className="text-2xl md:text-5xl mt-10 font-semibold">Unlock Actionable Insights with Advanced</h2>
                    <h2 className="text-2xl md:text-6xl font-semibold mt-7 mb-10 text-gradient font-bold pb-2">Web Analytics</h2>
                    <p className="md:text-base">Info Logic Solution offers comprehensive web analytics services to help you understand your website's <br />performance and user behavior for both client and server sides. We use tools like Google Tag Manager, Conversion API,<br /> Google Analytics, and other marketing platforms to provide insights that drive informed business decisions.</p>
                </div>
            </div>
            <ServicePage
                sections={sections}
                processSteps={processSteps}
                workSamples={workSamples}
                serviceName="Analytics"
            />
        </div>

    );
};

export default WebAnalytics;