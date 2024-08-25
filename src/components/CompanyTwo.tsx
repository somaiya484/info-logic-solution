import Marquee from "react-fast-marquee";


const CompanyTwo: React.FC = () => {
    return (
        <div className='mt-24 md:px-8 pb-32 page-background'>

            <div data-aos="fade-up" data-aos-duration="500">
                <h2 className='text-center text-5xl font-bold text-gradient pb-3'>Amazing Client</h2>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000">
                <p className="text-center md:text-xl mt-6 mb-16">The company we keep. We are honored to partner with a diverse range of clients from various industries.<br />We believe direct collaboration Our commitment to delivering exceptional results has earned us<br />the trust and loyalty of some of the most respected brands and companies.</p>
            </div>
            <Marquee pauseOnHover speed={100} direction="left" className='order g-4 hover:cursor-pointer'>
                <div className="flex items-center gap-5 md:gap-36  mt-20">
                    <img src='/partner3.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-40 ml-5 md:ml-24" />
                    <img src='/partner5.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-40" />
                    <img src='/partner6.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-52" />
                    <img src='/partner18.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-44" />
                    <img src='/partner19.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-52" />
                    <img src='/partner20.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-52" />
                    <img src='/partner7.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-44" />
                    <img src='/partner8.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-52" />
                </div>
            </Marquee>

            <Marquee pauseOnHover speed={100} direction="right" className='order g-4 mt-14 hover:cursor-pointer'>
                <div className="flex items-center gap-5 md:gap-36">
                    <img src='/partner9.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-44 ml-5 md:ml-24 " />
                    <img src='/partner10.jpg' width={250} height={250} alt="Company Logo" className="w-24 md:w-40" />
                    <img src='/partner11.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-52" />
                    <img src='/partner13.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-52" />
                    <img src='/partner14.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-52" />
                    <img src='/partner16.jpg' width={250} height={250} alt="Company Logo" className="w-24 md:w-44" />
                    <img src='/partner17.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-44" />
                    <img src='/partner2.png' width={250} height={250} alt="Company Logo" className="w-24 md:w-40" />
                </div>
            </Marquee>

        </div>
    );
};

export default CompanyTwo;
