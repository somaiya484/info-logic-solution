import ServicePage from "@/components/ServicePage";

const GraphicsDesign: React.FC = () => {

    const sections = [
        {
            id: 1,
            img: "print.jpg",
            title: "Social Media Graphics",
            description:
                "Enhance your social media presence with stunning graphics that engage and attract your audience. From Instagram posts to Facebook banners, we design visuals that boost your brand’s online profile.",
        },
        {
            id: 2,
            img: "brand-id.jpg",
            title: "Brand Identity",
            description:
                "Develop a cohesive and memorable brand identity with our comprehensive design services. We create logos, color schemes, and brand guidelines that reflect your business’s values and vision.",
        },
        {
            id: 3,
            img: "ads-content.jpg",
            title: "Ad Content Design",
            description:
                "Capture attention and drive action with our expertly designed ad content. We create visually compelling ads for online and offline platforms, ensuring your message stands out in a crowded marketplace.",
        },
        {
            id: 4,
            img: "graphics.jpeg",
            title: "Print Materials",
            description:
                "Make a lasting impression with high-quality print designs. We create everything from business cards and brochures to posters and flyers, ensuring your printed materials are as impactful as your digital ones.",
        }
    ];

    const processSteps = [
        {
            id: 1,
            title: "Concept & Brainstorming",
            description: "We brainstorm to understand your vision and goals, developing creative concepts aligned with your brand."
        },
        {
            id: 2,
            title: "Design Creation",
            description: "Our designers bring concepts to life with advanced tools, creating visually impactful designs."
        },
        {
            id: 3,
            title: "Feedback & Revisions",
            description: "We present designs for feedback and revise them until you're satisfied."
        },
        {
            id: 4,
            title: "Final Delivery",
            description: "Once approved, we deliver the final designs in the required formats for your marketing campaigns."
        },
    ];

    const workSamples = [
        {
            id: 1,
            category: "Graphics Design Sample",
            img: "gp1.jpg",
            title: "Poster Design",
            link: 'https://drive.google.com/file/d/1JeDvebbtWlUGd57zco1qb26tJmVUeKmr/view?usp=drive_link',
        },
        {
            id: 2,
            category: "Graphics Design Sample",
            img: "gp2.png",
            title: "Print Materials",
            link: 'https://drive.google.com/file/d/14-vzmVsYI14kyCrowKHLhpTTJz2lVaq8/view?usp=sharing',
        },
        {
            id: 3,
            category: "Graphics Design Sample",
            img: "gp3.jpg",
            title: "Poster Design",
            link: 'https://drive.google.com/file/d/1TT2Up8GS6yZwibBxA_TPS5tkoLitNbXM/view?usp=drive_link',
        },
        {
            id: 4,
            category: "Graphics Design Sample",
            img: "gp4.jpg",
            title: "Print Materials",
            link: 'https://drive.google.com/file/d/1ohd6rtKR6lVN1x7kEEq-5w75cMiUuOWh/view?usp=drive_link',
        },
        {
            id: 5,
            category: "Graphics Design Sample",
            img: "gp5.jpg",
            title: "Personal Business",
            link: 'https://drive.google.com/file/d/1NZK00zQLvSCItGayukBXbJH975NqOo7d/view?usp=drive_link',
        },
        {
            id: 6,
            category: "Graphics Design Sample",
            img: "gp6.jpg",
            title: "Agency Poster",
            link: 'https://drive.google.com/file/d/1UgVWBQrpwd6fnayGLB6Spo1WB1fSHLy7/view?usp=drive_link',
        },
        {
            id: 7,
            category: "Graphics Design Sample",
            img: "gp7.jpg",
            title: "Print Materials",
            link: 'https://drive.google.com/file/d/1ju7whMCDSUIhcx_UAhRBFyY4AMkzOB-f/view?usp=drive_link',
        },
        {
            id: 8,
            category: "Graphics Design Sample",
            img: "gp8.jpg",
            title: "Business Banner",
            link: 'https://drive.google.com/file/d/1REG72GTthzd098xt0mSfek5srIEZQCkK/view?usp=drive_link',
        },
        {
            id: 9,
            category: "Graphics Design Sample",
            img: "gp9.jpg",
            title: "Business Banner",
            link: 'https://drive.google.com/file/d/1uFdaJBTDkgAooSmE-xnRTTsZPdhdBE-4/view?usp=drive_link',
        },
        {
            id: 10,
            category: "Graphics Design Sample",
            img: "gp10.jpg",
            title: "Print Materials",
            link: 'https://drive.google.com/file/d/1CjoshWyudtfovJPUYNBVXX3e7riAhchk/view?usp=drive_link',
        },
        {
            id: 11,
            category: "Graphics Design Sample",
            img: "brandiden-2.jpg",
            title: "Agency Poster",
            link: 'https://drive.google.com/file/d/13O6XiPG4fK6W0Xj5PhUP4zY954bgFGda/view?usp=drive_link',
        },
        {
            id: 12,
            category: "Graphics Design Sample",
            img: "brandiden-3.jpg",
            title: "Personal Business",
            link: 'https://drive.google.com/file/d/1hfkCFvbjiA2qef7FuR8-XYpC9UWxtwDX/view?usp=drive_link',
        },
        {
            id: 13,
            category: "Graphics Design Sample",
            img: "brandiden-4.jpg",
            title: "Personal Business",
            link: 'https://drive.google.com/file/d/1Pd5eej9wYU8J3mfqPJ0M02Bc36K8NliG/view?usp=drive_link',
        },
        {
            id: 14,
            category: "Graphics Design Sample",
            img: "brandiden-6.png",
            title: "Print Materials",
            link: 'https://drive.google.com/file/d/1e9jQidKGD9VsjFiZqH970oJ8XcZtxo-2/view?usp=drive_link',
        }
    ];

    return (
        <div>
            <div className="bg-fixed bg-[url('/brand-id2.jpg')] h-[600px] w-full flex justify-center items-center relative overflow-auto">
                <div className="absolute inset-0 banner-background opacity-95"></div>
                <div className="text-center relative z-10">
                    <h1 className="font-semibold">Graphics Design</h1>
                    <h2 className="text-2xl md:text-5xl my-8 font-semibold leading-[60px]">
                        Captivate Your Audience with Eye Catching
                    </h2>
                    <h2 className="text-2xl md:text-6xl font-semibold mb-10 text-gradient font-bold pb-2">Graphic Design</h2>
                    <p className="md:text-base">Our graphic design services are tailored to create visually striking content that captures attention<br /> and communicates your brand's message effectively. From ad content to marketing materials,<br /> our designs are crafted to resonate with your audience.</p>
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
