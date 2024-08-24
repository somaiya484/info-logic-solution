import Marquee from "react-fast-marquee";
import Image from 'next/image';
import partner2 from '../../public/partner2.png'
import partner3 from '../../public/partner3.png'
import partner5 from '../../public/partner5.png'
import partner6 from '../../public/partner6.png'
import partner8 from '../../public/partner7.png'
import partner9 from '../../public/partner8.png'
import partner10 from '../../public/partner9.png'
import partner11 from '../../public/partner10.jpg'
import partner12 from '../../public/partner11.png'
import partner14 from '../../public/partner13.png'
import partner15 from '../../public/partner14.png'
import partner17 from '../../public/partner16.jpg'
import partner18 from '../../public/partner17.png'
import partner19 from '../../public/partner18.png'
import partner20 from '../../public/partner19.png'
import partner21 from '../../public/partner20.png'


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
                <div className="flex items-center md:gap-36  mt-20">
                    <Image src={partner3} width={250} height={250} alt="Company Logo" className="w-40 md:ml-24" />
                    <Image src={partner5} width={250} height={250} alt="Company Logo" className="w-40" />
                    <Image src={partner6} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={partner19} width={250} height={250} alt="Company Logo" className="w-44" />
                    <Image src={partner20} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={partner21} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={partner8} width={250} height={250} alt="Company Logo" className="w-44" />
                    <Image src={partner9} width={250} height={250} alt="Company Logo" className="w-52" />
                </div>
            </Marquee>

            <Marquee pauseOnHover speed={100} direction="right" className='order g-4 mt-14 hover:cursor-pointer'>
                <div className="flex items-center md:gap-36">
                    <Image src={partner10} width={250} height={250} alt="Company Logo" className="w-44 md:ml-24" />
                    <Image src={partner11} width={250} height={250} alt="Company Logo" className="w-40" />
                    <Image src={partner12} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={partner14} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={partner15} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={partner17} width={250} height={250} alt="Company Logo" className="w-44" />
                    <Image src={partner18} width={250} height={250} alt="Company Logo" className="w-44" />
                    <Image src={partner2} width={250} height={250} alt="Company Logo" className="w-40" />
                </div>
            </Marquee>

        </div>
    );
};

export default CompanyTwo;
