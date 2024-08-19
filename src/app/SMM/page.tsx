import ServicePage from "@/components/ServicePage";

const SMM: React.FC = () => {

    const sections = [
        {
            id: 1,
            img: "/sem-service.jpg",
            title: "Social Media Marketing",
            description:
                "Through strategic social media marketing, we help you connect with your audience, build brand awareness, and drive engagement across popular platforms such as Facebook, Instagram, and Twitter. From social media audits to content creation and campaign management, we tailor our approach to align with your business goals and target audience.",
        },
        {
            id: 2,
            img: "/ppc.jpg",
            title: "Facebook Ads Campaigns",
            description:
                "Engage with your audience on the world’s largest social media platform. Our team designs and manages Facebook Ads that resonate with your target market, driving traffic, leads, and sales.",
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
            id: 11,
            category: "SEO",
            img: "/seosample11.jpeg",
            title: "SEO Ranking",
            link: 'https://drive.google.com/file/d/1kjcb9Tbp9HvlOKYv8ReEsijte0rM_sft/view?usp=sharing',
        },
        {
            id: 2,
            category: "SEO",
            img: "/seosample2.jpeg",
            title: "User Analytics Graph",
            link: 'https://drive.google.com/file/d/1YmBwgFR13UInCpKRxElF_-dQ860KiDLe/view?usp=sharing',
        },
        {
            id: 3,
            category: "SEO",
            img: "/seosample3.jpeg",
            title: "User Analytics",
            link: 'https://drive.google.com/file/d/1Sai850P6yEC9aoJeReh38sEXfFrtcFLy/view?usp=sharing',
        },
        {
            id: 4,
            category: "SEO",
            img: "/seosample4.jpeg",
            title: "User Analytics",
            link: 'https://drive.google.com/file/d/1dDr5lBypNbTlxF8SsAFeszcumHx0nNt3/view?usp=sharing',
        },
        {
            id: 5,
            category: "SEO",
            img: "/seosample5.jpeg",
            title: "User Analytics",
            link: 'https://drive.google.com/file/d/1Xv4B9mFsMsOlqgXk7TsoC1St0IrpZuOq/view?usp=sharing',
        },
        {
            id: 6,
            category: "SEO",
            img: "/seosample6.jpeg",
            title: "Total User Graph",
            link: 'https://drive.google.com/file/d/1Dldxhta57uJSbW_WXja8YbD3drgTuNiA/view?usp=sharing',
        },
        {
            id: 7,
            category: "SEO",
            img: "/seosample7.jpeg",
            title: "User Graph",
            link: 'https://drive.google.com/file/d/1tYSErwVUAKcUc_taCY5F0a6Fz_q0ZnY9/view?usp=sharing',
        },
        {
            id: 8,
            category: "SEO",
            img: "/seosample8.jpeg",
            title: "Location Graph",
            link: 'https://drive.google.com/file/d/1oi7IT13NK_YYCldxOO1MMSn2GVVpJF0A/view?usp=sharing',
        },
        {
            id: 9,
            category: "SEO",
            img: "/seosample9.jpeg",
            title: "User Analytics",
            link: 'https://drive.google.com/file/d/1TvE1ApKsNMw65RRXilh-qQNFTbNVo9Z8/view?usp=sharing',
        },
        {
            id: 10,
            category: "SEO",
            img: "/seosample10.jpeg",
            title: "Location Graph",
            link: 'https://drive.google.com/file/d/1rxkd73DoP85uRtuy6YFBTpfbhUlx348N/view?usp=sharing',
        },
        {
            id: 1,
            category: "SEO ",
            img: "/seosample1.jpeg",
            title: "Total User Graph",
            link: 'https://drive.google.com/file/d/1IutY_0eWf0yuiClG9g5vs6tBjrZvX0NZ/view?usp=sharing',
        }
    ];

    return (
        <div>
            <div className="bg-fixed bg-[url('/smm.jpg')] bg-no-repeat h-[600px] w-full flex justify-center items-center relative overflow-auto">
                <div className="absolute inset-0 banner-background opacity-95"></div>
                <div className="text-center relative z-10">
                    <h1 className="font-semibold mt-5">SMM</h1>
                    <h2 className="text-2xl md:text-6xl my-8 font-semibold leading-[60px]"> Enhance Your Online Presence <br /> with Comprehensive<br /></h2>
                    <h2 className="text-2xl md:text-6xl font-semibold mt-5 mb-10 text-gradient font-bold pb-3">Social Media Marketing</h2>
                    <p className="md:text-base">We provide a full suite of social media marketing services designed to boost your online visibility, <br /> drive targeted traffic, and engage your audience. Our expert team integrates creative and strategic approaches <br /> to ensure your brand reaches its full potential.</p>
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