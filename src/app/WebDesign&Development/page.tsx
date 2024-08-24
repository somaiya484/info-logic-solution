import ServicePage from "@/components/ServicePage";

const WebDesignDevelopment: React.FC = () => {

    const sections = [
        {
            id: 1,
            img: "/WordPressDevelopment.jpg",
            title: "WordPress Development",
            description: "Leverage the power and flexibility of WordPress to build a dynamic and scalable website. Our team creates custom themes and plugins to meet your specific needs, ensuring your site is both user-friendly and SEO-optimized.",
        },
        {
            id: 2,
            img: "/ShopifyDevelopment.png",
            title: "Shopify Development",
            description: "Build a robust e-commerce platform with Shopify. We design and develop beautiful, responsive online stores that provide an exceptional shopping experience for your customers while being easy to manage on the backend.",
        },
        {
            id: 3,
            img: "/wixDevelopment.PNG",
            title: "Wix Development",
            description: "Create stunning websites quickly with Wix. Our experts use the platform’s versatile tools to craft visually appealing and functional sites tailored to your brand, perfect for small businesses and personal projects.",
        },
        {
            id: 4,
            img: "/WebDevelopment.jpg",
            title: "Frontend Development",
            description: "When your project requires a more bespoke approach, our front-end Development services are here to help. We develop unique, scalable websites and applications tailored precisely to your business requirements. ",
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
            category: "",
            img: "/devs2.jpg",
            title: "Daily News",
            link: 'https://the-universal-news.vercel.app/',
        },
        {
            id: 5,
            category: "",
            img: "/devs5.png",
            title: "Job Hunting",
            link: 'https://intelliwave-ai.vercel.app/',
        },
        {
            id: 2,
            category: "",
            img: "/devs1.jpg",
            title: "College Admission",
            link: 'https://64da95262317310ceba545b2--prismatic-crepe-a94a96.netlify.app/',
        },
        {
            id: 3,
            category: "",
            img: "/devs3.jpg",
            title: "Justice Laws",
            link: 'https://somaiya484.github.io/assignment-3/',
        },
        {
            id: 4,
            category: "",
            img: "/devs4.jpg",
            title: "Job Hunting",
            link: 'https://vermillion-bombolone-f5585c.netlify.app/',
        }
    ];

    return (
        <div>
            <div className="bg-fixed bg-[url('/devebg.jpg')] h-[600px] w-full flex justify-center items-center relative overflow-auto">
                <div className="absolute inset-0 banner-background opacity-95"></div>
                <div className="text-center relative z-10">
                    <h1 className="font-semibold mt-20">Web Design and Development</h1>
                    <h2 className="text-2xl md:text-6xl my-6 font-semibold leading-[60px] mt-9">Transform Your Online Presence with Stunning</h2>
                    <h2 className="text-2xl md:text-6xl mb-10 text-gradient font-bold pb-2">Website Design & Development </h2>
                    <p className="text-sm md:text-base">At Info Logic Solution, we specialize in creating visually appealing and highly functional websites <br /> that reflect your brand's identity and engage your audience. Whether you need a site built on<br />  WordPress, Shopify, Wix, or a custom-coded solution, our team has the expertise to bring your vision to life.</p>
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
