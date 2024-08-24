import ServicePage from "@/components/ServicePage";

const WebAnalytics: React.FC = () => {
    const sections = [
        {
            id: 1,
            img: "/googleTagManager.png",
            title: "Google Tag Manager",
            description: "Implement and manage your website’s tags efficiently with Google Tag Manager. We set up and configure tags to track important data, ensuring you get accurate insights without slowing down your site",
        },
        {
            id: 2,
            img: "/metacapi.jpeg",
            title: "Conversion API",
            description:
                "Accurately track conversions and customer interactions with our Conversion API services. We integrate your website with various platforms to provide detailed analytics that help you optimize your marketing strategies.",
        },
        {
            id: 4,
            img: "/GOOGLE-ANALYTICS4.jpg",
            title: "Google Analytics",
            description:
                "Optimize your website tracking with in-depth analytics and insights. We track and analyze your website performance, providing detailed reports and and maximize ROI. From keyword performance to ad spend efficiency, we ensure your GA4 drive the accurate possible results.",
        },
        {
            id: 7,
            img: "/googleAdsCampaigns.png",
            title: "Google ADs",
            description:
                "We'll Optimize your Google Ads campaigns with in-depth analytics and insights. We track and analyze your ad performance, and provide you the most accourate data. From keyword performance to ad spend efficiency, we ensure your Google Ads drive the best possible results.",
        },
        {
            id: 3,
            img: "/meta-pixel.jpeg",
            title: "Pixel Installation",
            description:
                "Maximize your ad campaigns' effectiveness with precise pixel tracking. We install and configure tracking pixels from platforms like Facebook and Google to monitor user actions and optimize your marketing efforts.",
        },
        {
            id: 5,
            img: "/everyplatformA.PNG",
            title: "Other Platform Analytics ",
            description:
                "Lastly, our expert team can also provide you with both the client and server sides with Pinterest, Snap, TikTok, Microsoft Ads, and Twitter Linkedin Conversion Tracking with most accourate data",
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
            category: "GA4",
            img: "/analytcis6.jpg",
            title: "Google Analytics 4",
            link: 'https://docs.google.com/presentation/d/10fvECmpmb6UYziZSIfouk-ZefrFEGL_2mlL8cu_E7YQ/edit?usp=sharing',
        },
        {
            id: 2,
            category: "Conversion API",
            img: "/analytcis5.jpg",
            title: "Meta Conversion API",
            link: 'https://docs.google.com/presentation/d/1TqmedYQ2L886QMeGM3RGBcEIdBPLqvK7-lWTtU7MhqI/edit?usp=sharing',
        },
        {
            id: 3,
            category: "GADs",
            img: "/analytcis2.jpg",
            title: "Google ADs",
            link: 'https://docs.google.com/presentation/d/1jPFb25PVg-kYjZPYoyGpryRsh2rp5R79uamTw_I1v9k/edit?usp=sharing',
        },
        {
            id: 4,
            category: "Meta Pixel",
            img: "/analytcis3.jpg",
            title: "Meta Pixel",
            link: 'https://docs.google.com/presentation/d/1Uqc5J5DGjguiHTrlQgIQ4KZ2JFtlBEc2Nd40du-0BuI/edit?usp=sharing',
        },
        {
            id: 5,
            category: "Conversion API",
            img: "/analytcis5.jpg",
            title: "Meta Conversion API",
            link: 'https://docs.google.com/presentation/d/1og3_cbjXBT6s89SIOioTE7YeGMhX4sBOWWPuvvMAAbM/edit?usp=sharing',
        },
        {
            id: 6,
            category: "Conversion API",
            img: "/analytcis4.jpg",
            title: "Meta Conversion API",
            link: 'https://docs.google.com/presentation/d/18A0vRAmQ9HPKaOgZ-7TY_XBhmMcTKz5GB-8vqCqh8aE/edit?usp=sharing',
        },
        {
            id: 7,
            category: "Conversion API",
            img: "/analytcis5.jpg",
            title: "Meta Conversion API",
            link: 'https://docs.google.com/presentation/d/1Za0C0QteANNFGqIDjkJ3lx4ky1tZh4_ZC4MIx7KffAM/edit?usp=sharing',
        },
        {
            id: 8,
            category: "GA4",
            img: "/analytcis7.jpg",
            title: "Google Analytics 4",
            link: 'https://docs.google.com/presentation/d/1fr2VCEBaVmpe8EeRCsGXFbsTboKCX3rbN_Xn43sjsO0/edit?usp=sharing',
        },
        {
            id: 9,
            category: "GA4",
            img: "/analytcis6.jpg",
            title: "Google Analytics 4",
            link: 'https://docs.google.com/presentation/d/16oyWmzH7JEAuNb7yUFquB-ibbO8NaBOA1XV_JpbqEB4/edit?usp=sharing',
        },
        {
            id: 10,
            category: "GA4",
            img: "/analytcis7.jpg",
            title: "Google Analytics 4",
            link: 'https://docs.google.com/presentation/d/13f1W7R8GHXUzVHA7G4V3ToVZpJviruc2XZXmdt450UY/edit?usp=sharing',
        },
        {
            id: 11,
            category: "GA4",
            img: "/analytcis6.jpg",
            title: "Google Analytics 4",
            link: 'https://docs.google.com/presentation/d/1Kz1eNZ_oz93QB6f-6uV9-ZcVLTtxL8kpXh3EyNyQjdc/edit?usp=sharing',
        },
        {
            id: 12,
            category: "Meta Pixel",
            img: "/analytcis3.jpg",
            title: "Meta Pixel",
            link: 'https://docs.google.com/presentation/d/1Op5klxpp-YdbcdLGjMAp3NqSgkB1jXJHSvYFwMjGqRU/edit?usp=sharing',
        },
        {
            id: 13,
            category: "GADs",
            img: "/analytcis2.jpg",
            title: "Google ADs",
            link: 'https://docs.google.com/presentation/d/1RDfpw_x7zfoaxVaQsmmHdQXZMdMva0y0Xzoze-u3p3A/edit?usp=sharing',
        },

        {
            id: 14,
            category: "Meta Pixel",
            img: "/analytcis3.jpg",
            title: "Meta Pixel",
            link: 'https://docs.google.com/presentation/d/1WWxbvzVUSYAcu9ltVEU0AFQ8zWWkOsZGOhIpOXIJsyA/edit?usp=sharing',
        },
        {
            id: 15,
            category: "GADs",
            img: "/analytcis1.jpg",
            title: "Google ADs",
            link: 'https://docs.google.com/presentation/d/1Kcms28pYcLGIdiqcqhrULvjaH1qS1IvyUM0_c6KHY7Q/edit?usp=sharing',
        }
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