import ServicePage from "@/components/ServicePage";

const SEM: React.FC = () => {

    const sections = [
        {
            id: 1,
            img: "/seo-service.jpg",
            title: "SEO",
            description:
                "Boost your website's search engine rankings and attract more organic traffic with our proven SEO techniques. We focus on comprehensive keyword research, on-page optimization, and high-quality content creation to improve your visibility and drive long-term results.",
            link: "/contact",
        },
        {
            id: 2,
            img: "/Google-Ads.jpg",
            title: "Google Ads Campaigns",
            description:
                "Maximize your reach and drive targeted traffic to your website through our expertly managed Google Ads campaigns. We ensure high ROI by optimizing ad performance and targeting the right audience at the right time.",
            link: "/contact",
        },
        {
            id: 3,
            img: "/bing-ads.jpeg",
            title: "Bing Ads",
            description:
                "Expand your reach with Bing Ads and attract more customers through strategic ad placements. Our team optimizes your campaigns for higher click-through rates and better conversion rates, ensuring your marketing budget is used effectively.",
            link: "/contact",
        }
    ];

    const processSteps = [
        {
            id: 1,
            title: "1. Audit & Analysis",
            description:
                "We audit your online presence, including website performance, keyword rankings, competition, and social media engagement.",
        },
        {
            id: 2,
            title: "2. Strategy Development",
            description:
                "We develop a strategy based on our audit, including SEO, keyword research, SEM campaigns, and social media plans.",
        },
        {
            id: 3,
            title: "3. Implementation",
            description:
                "We implement the strategy, optimizing SEO, setting up SEM campaigns, and creating social media content.",
        },
        {
            id: 4,
            title: "4. Monitoring & Reporting",
            description:
                "We monitor SEO, SEM, and social media, making adjustments for maximum ROI and engagement, and provide regular reports.",
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
            <div className="bg-fixed bg-[url('/SEMbg.jpg')] h-[600px] w-full flex justify-center items-center relative overflow-auto">
                <div className="absolute inset-0 banner-background opacity-95"></div>
                <div className="text-center relative z-10">
                    <h1 className="font-semibold mt-5">SEO & SEM</h1>
                    <h2 className="text-2xl md:text-6xl mt-10 font-semibold">Elevate Your Online Presence <br /> with Comprehensive</h2>
                    <h2 className="text-2xl md:text-6xl font-semibold mt-8 mb-10 text-gradient font-bold pb-2">SEO, SEM & Ads Campaigns</h2>
                    <p className="md:text-base">We will provide a full suite of digital marketing services designed to boost your <br /> online visibility, drive targeted traffic, and engage your audience. Our expert team integrates SEO, SEM, <br />and social media marketing strategies to ensure your brand reaches its full potential</p>
                </div>
            </div>

            <ServicePage
                sections={sections}
                processSteps={processSteps}
                workSamples={workSamples}
                serviceName="SEM"
            />
        </div>

    );
};

export default SEM;