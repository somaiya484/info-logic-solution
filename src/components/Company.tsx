import Marquee from "react-fast-marquee";
import Image from 'next/image'

const Company: React.FC = () => {
    return (
        <div className='mt-60 mx-2 md:mx-8' id="company">
            <h2 className='text-center text-5xl font-bold primary-text pb-3'>Amazing Client</h2>
            <p className="text-center md:text-xl mt-6">The company we keep. We are honored to partner with a diverse range of clients from various industries.<br />We believe direct collaboration Our commitment to delivering exceptional results has earned us<br />the trust and loyalty of some of the most respected brands and companies.</p>


            <Marquee pauseOnHover speed={100} direction="left" className='order g-4 hover:cursor-pointer'>
                <div className="flex items-center md:gap-36  mt-20">
                    <Image src='/partner3.png' width={250} height={250} alt="Company Logo" className="w-40 md:ml-24" />
                    <Image src='/partner5.png' width={250} height={250} alt="Company Logo" className="w-40" />
                    <Image src='/partner6.png' width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src='/partner18.png' width={250} height={250} alt="Company Logo" className="w-44" />
                    <Image src='/partner19.png' width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src='/partner20.png' width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src='/partner7.png' width={250} height={250} alt="Company Logo" className="w-44" />
                    <Image src='/partner8.png' width={250} height={250} alt="Company Logo" className="w-52" />
                </div>
            </Marquee>

            <Marquee pauseOnHover speed={100} direction="right" className='order g-4 mt-14 hover:cursor-pointer'>
                <div className="flex items-center md:gap-36">
                    <Image src='/partner9.png' width={250} height={250} alt="Company Logo" className="w-44 md:ml-24" />
                    <Image src='/partner10.jpg' width={250} height={250} alt="Company Logo" className="w-40" />
                    <Image src='/partner11.png' width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src='/partner13.png' width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src='/partner14.png' width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src='/partner16.jpg' width={250} height={250} alt="Company Logo" className="w-44" />
                    <Image src='/partner17.png' width={250} height={250} alt="Company Logo" className="w-44" />
                    <Image src='/partner2.png' width={250} height={250} alt="Company Logo" className="w-40" />
                </div>
            </Marquee>
        </div>
    );
};

export default Company;
