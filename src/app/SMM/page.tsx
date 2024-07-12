import ServicePage from "@/components/ServicePage";

const SMM: React.FC = () => {

    const sections = [
        {
            id: 1,
            img: "/social-media-marketing.jpg",
            title: "Social Media Marketing",
            description:
                "Through strategic social media marketing, we help you connect with your audience, build brand awareness, and drive engagement across popular platforms such as Facebook, Instagram, and Twitter. From social media audits to content creation and campaign management, we tailor our approach to align with your business goals and target audience.",
            link: "/contact",
        },
        {
            id: 2,
            img: "/facebookads.jpg",
            title: "Facebook Ads Campaigns",
            description:
                "Engage with your audience on the world’s largest social media platform. Our team designs and manages Facebook Ads that resonate with your target market, driving traffic, leads, and sales.",
            link: "/contact",
        },
    ];

    const processSteps = [
        {
            id: 1,
            title: "1. Audit & Analysis",
            description:
                "We analyze your current social media presence and engagement, including audience insights and content performance.",
        },
        {
            id: 2,
            title: "2. Strategy Development",
            description:
                "We develop a customized strategy with targeted campaigns, content calendars, and ad planning.",
        },
        {
            id: 3,
            title: "3. Implementation",
            description:
                "We create and schedule posts, launch ad campaigns, and optimize content for better reach and interaction.",
        },
        {
            id: 4,
            title: "4. Monitoring & Reporting",
            description:
                "We monitor performance and provide regular reports, making adjustments to enhance results and ROI.",
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
            <div className="bg-fixed bg-[url('/datavisualization.jpg')] h-[600px] w-full flex justify-center items-center relative overflow-auto">
                <div className="absolute inset-0 bg-gradient-to-b from-[#feddcb] to-[#ffffff] opacity-95"></div>
                <div className="text-center relative z-10">
                    <h1 className="font-semibold">SMM</h1>
                    <h2 className="text-5xl my-8 font-semibold leading-[60px]">
                        Enhance Your Online Presence <br /> with Comprehensive <br />{" "}
                        <span className="text-gradient font-bold">Social Media Marketing</span>
                    </h2>
                    <p>
                        We provide a full suite of social media marketing services designed to boost your
                        online visibility, <br /> drive targeted traffic, and engage your audience. Our expert team integrates
                        creative and strategic approaches <br /> to ensure your brand reaches its full potential.
                    </p>
                </div>
            </div>

            <ServicePage
                sections={sections}
                processSteps={processSteps}
                workSamples={workSamples}
                serviceName="SMM"
            />
        </div>

    );
};

export default SMM;