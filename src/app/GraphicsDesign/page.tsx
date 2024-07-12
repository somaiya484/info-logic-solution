import ServicePage from "@/components/ServicePage";

const GraphicsDesign: React.FC = () => {

    const sections = [
        {
            id: 1,
            img: "/adContentDesign.jpg",
            title: "Ad Content Design",
            description:
                "Capture attention and drive action with our expertly designed ad content. We create visually compelling ads for online and offline platforms, ensuring your message stands out in a crowded marketplace.",
            link: "/contact",
        },
        {
            id: 2,
            img: "/socialmediaad.png",
            title: "Social Media Graphics",
            description:
                "Enhance your social media presence with stunning graphics that engage and attract your audience. From Instagram posts to Facebook banners, we design visuals that boost your brand’s online profile.",
            link: "/contact",
        },
        {
            id: 3,
            img: "/PrintedMarketingMaterials.jpg",
            title: "Print Materials",
            description:
                "Make a lasting impression with high-quality print designs. We create everything from business cards and brochures to posters and flyers, ensuring your printed materials are as impactful as your digital ones.",
            link: "/contact",
        },
        {
            id: 4,
            img: "/brandIdentity.PNG",
            title: "Brand Identity",
            description:
                "Develop a cohesive and memorable brand identity with our comprehensive design services. We create logos, color schemes, and brand guidelines that reflect your business’s values and vision.",
            link: "/contact",
        },
    ];

    const processSteps = [
        {
            id: 1,
            title: "1. Concept & Brainstorming",
            description: "We brainstorm to understand your vision and goals, developing creative concepts aligned with your brand."
        },
        {
            id: 2,
            title: "2. Design Creation",
            description: "Our designers bring concepts to life with advanced tools, creating visually impactful designs."
        },
        {
            id: 3,
            title: "3. Feedback & Revisions",
            description: "We present designs for feedback and revise them until you're satisfied."
        },
        {
            id: 4,
            title: "4. Final Delivery",
            description: "Once approved, we deliver the final designs in the required formats for your marketing campaigns."
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
                    <h1 className="font-semibold">Graphics Design</h1>
                    <h2 className="text-5xl my-8 font-semibold leading-[60px]">
                        Captivate Your Audience with Eye <br /> Catching  <span className="text-gradient font-bold ">Graphic Design</span>
                    </h2>
                    <p>
                        Our graphic design services are tailored to create visually striking content that captures attention<br /> and communicates your brand's message effectively. From ad content to marketing materials,<br /> our designs are crafted to resonate with your audience.
                    </p>
                </div>
            </div>
            <ServicePage
                sections={sections}
                processSteps={processSteps}
                workSamples={workSamples}
                serviceName="Graphics"
            />
        </div>

    );
};

export default GraphicsDesign;
