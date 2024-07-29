import ServicePage from "@/components/ServicePage";

const WebDesignDevelopment: React.FC = () => {

    const sections = [
        {
            id: 1,
            img: "/WordPressDevelopment.jpg",
            title: "WordPress Development:",
            description:
                "Leverage the power and flexibility of WordPress to build a dynamic and scalable website. Our team creates custom themes and plugins to meet your specific needs, ensuring your site is both user-friendly and SEO-optimized.",
            link: "/contact",
        },
        {
            id: 2,
            img: "/ShopifyDevelopment.png",
            title: "Shopify Development:",
            description:
                "Build a robust e-commerce platform with Shopify. We design and develop beautiful, responsive online stores that provide an exceptional shopping experience for your customers while being easy to manage on the backend.",
            link: "/contact",
        },
        {
            id: 3,
            img: "/wixDevelopment.PNG",
            title: "Wix Development:",
            description:
                "Create stunning websites quickly with Wix. Our experts use the platform’s versatile tools to craft visually appealing and functional sites tailored to your brand, perfect for small businesses and personal projects.",
            link: "/contact",
        },
        {
            id: 4,
            img: "/WebDevelopment.jpg",
            title: "Web Development:",
            description:
                "When your project requires a more bespoke approach, our front-end Development services are here to help. We develop unique, scalable websites and applications tailored precisely to your business requirements. ",
            link: "/contact",
        }
    ];

    const processSteps = [
        {
            id: 1,
            title: "Research",
            description: "We begin with thorough research to understand your goals, audience, and requirements, creating a strategic roadmap tailored to your business."
        },
        {
            id: 2,
            title: "Design",
            description: "Our team designs a prototype that aligns with your brand, addressing all requirements to create an engaging and visually compelling design."
        },
        {
            id: 3,
            title: "Development",
            description: "We build your site using the latest technologies, ensuring it's fast, scalable, and thoroughly tested for performance and compatibility before launch."
        },
        {
            id: 4,
            title: "Maintenance",
            description: "After a successful launch, we provide ongoing maintenance and support to keep your site updated and running smoothly, addressing any issues promptly."
        }
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
            <div className="bg-fixed bg-[url('/devebg.jpg')] h-[600px] w-full flex justify-center items-center relative overflow-auto">
                <div className="absolute inset-0 bg-gradient-to-b from-[#feddcb] to-[#ffffff] opacity-95"></div>
                <div className="text-center relative z-10">
                    <h1 className="font-semibold">Web Design and Development</h1>
                    <h2 className="text-5xl my-6 font-semibold leading-[60px]">Transform Your Online Presence with Stunning</h2>
                    <h2 className="text-2xl md:text-5xl font-semibold mb-10 text-gradient font-bold pb-2">Website Design & Development </h2>
                    <p>
                        At Info Logic Solution, we specialize in creating visually appealing and highly functional websites <br /> that reflect your brand's identity and engage your audience. Whether you need a site built on<br />  WordPress, Shopify, Wix, or a custom-coded solution, our team has the expertise to bring your vision to life.
                    </p>
                </div>
            </div>

            <ServicePage
                sections={sections}
                processSteps={processSteps}
                workSamples={workSamples}
                serviceName="Development"
            />
        </div>

    );
};

export default WebDesignDevelopment;
