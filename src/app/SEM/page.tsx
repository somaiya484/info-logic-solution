import ServicePage from "@/components/ServicePage";

const SEM: React.FC = () => {

    const sections = [
        {
            id: 1,
            img: "/seo-service.jpg",
            title: "SEO",
            description:
                "Boost your website's search engine rankings and attract more organic traffic with our proven SEO techniques. We focus on comprehensive keyword research, on-page optimization, and high-quality content creation to improve your visibility.",
        },
        {
            id: 2,
            img: "/Google-Ads.jpg",
            title: "Google Ads Campaigns",
            description:
                "Maximize your reach and drive targeted traffic to your website through our expertly managed Google Ads campaigns. We ensure high ROI by optimizing ad performance and targeting the right audience at the right time.",
        },
        {
            id: 3,
            img: "/bing-ads.jpeg",
            title: "Bing Ads",
            description:
                "Expand your reach with Bing Ads and attract more customers through strategic ad placements. Our team optimizes your campaigns for higher click-through rates and better conversion rates, ensuring your marketing budget is used effectively.",
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
            category: "SEO",
            img: "/seosm7.jpg",
            title: "SEO Ranking",
            link: 'https://drive.google.com/file/d/1kjcb9Tbp9HvlOKYv8ReEsijte0rM_sft/view?usp=sharing',
        },
        {
            id: 2,
            category: "SEO",
            img: "/seosm8.jpg",
            title: "User Analytics Graph",
            link: 'https://drive.google.com/file/d/1YmBwgFR13UInCpKRxElF_-dQ860KiDLe/view?usp=sharing',
        },
        {
            id: 3,
            category: "SEO",
            img: "/seosm1.jpg",
            title: "User Analytics",
            link: 'https://drive.google.com/file/d/1Sai850P6yEC9aoJeReh38sEXfFrtcFLy/view?usp=sharing',
        },
        {
            id: 4,
            category: "SEO",
            img: "/seosm2.jpg",
            title: "User Analytics",
            link: 'https://drive.google.com/file/d/1dDr5lBypNbTlxF8SsAFeszcumHx0nNt3/view?usp=sharing',
        },
        {
            id: 5,
            category: "SEO",
            img: "/seosm3.jpg",
            title: "User Analytics",
            link: 'https://drive.google.com/file/d/1Xv4B9mFsMsOlqgXk7TsoC1St0IrpZuOq/view?usp=sharing',
        },
        {
            id: 6,
            category: "SEO",
            img: "/seosm4.jpg",
            title: "Total User Graph",
            link: 'https://drive.google.com/file/d/1Dldxhta57uJSbW_WXja8YbD3drgTuNiA/view?usp=sharing',
        },
        {
            id: 7,
            category: "SEO",
            img: "/seosm3.jpg",
            title: "User Graph",
            link: 'https://drive.google.com/file/d/1tYSErwVUAKcUc_taCY5F0a6Fz_q0ZnY9/view?usp=sharing',
        },
        {
            id: 8,
            category: "SEO",
            img: "/seosm5.jpg",
            title: "Location Graph",
            link: 'https://drive.google.com/file/d/1oi7IT13NK_YYCldxOO1MMSn2GVVpJF0A/view?usp=sharing',
        },
        {
            id: 9,
            category: "SEO",
            img: "/seosm1.jpg",
            title: "User Analytics",
            link: 'https://drive.google.com/file/d/1TvE1ApKsNMw65RRXilh-qQNFTbNVo9Z8/view?usp=sharing',
        },
        {
            id: 10,
            category: "SEO",
            img: "/seosm6.jpg",
            title: "Location Graph",
            link: 'https://drive.google.com/file/d/1rxkd73DoP85uRtuy6YFBTpfbhUlx348N/view?usp=sharing',
        },
        {
            id: 11,
            category: "SEO ",
            img: "/seosm2.jpg",
            title: "Total User Graph",
            link: 'https://drive.google.com/file/d/1IutY_0eWf0yuiClG9g5vs6tBjrZvX0NZ/view?usp=sharing',
        }
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