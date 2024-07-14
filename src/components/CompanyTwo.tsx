import Marquee from "react-fast-marquee";
import Image from 'next/image';
import com1 from '../../public/com.png'
import com2 from '../../public/comone.png'
import com3 from '../../public/comtwo.png'
import com4 from '../../public/com.png'

const CompanyTwo: React.FC = () => {
    return (
        <div className='mt-24 md:px-8 pb-32 page-background'>

            <div data-aos="fade-up" data-aos-duration="500">
                <h2 className='text-center text-5xl font-bold text-gradient'>Amazing Client</h2>
            </div>

            <div data-aos="fade-up" data-aos-duration="500">
                <p className="text-center md:text-xl mt-6 mb-10">
                    The company we keep. We are honored to partner with a diverse range of clients from various industries.
                    <br />
                    We believe direct collaboration Our commitment to delivering exceptional results has earned us
                    <br />
                    the trust and loyalty of some of the most respected brands and companies.
                </p>
            </div>

            <Marquee pauseOnHover speed={100} direction="left" className='order g-4 '>
                <div className="flex items-center gap-28">
                    <Image src={com1} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={com2} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={com3} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={com4} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={com2} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={com1} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={com2} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={com3} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={com1} width={250} height={250} alt="Company Logo" className="w-52" />
                </div>
            </Marquee>

            <Marquee pauseOnHover speed={100} direction="right" className='order g-4 -mt-16'>
                <div className="flex items-center gap-28">
                <Image src={com1} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={com2} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={com3} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={com4} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={com2} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={com1} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={com2} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={com3} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={com1} width={250} height={250} alt="Company Logo" className="w-52" />
                </div>
            </Marquee>

        </div>
    );
};

export default CompanyTwo;
