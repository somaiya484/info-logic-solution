import Marquee from "react-fast-marquee";
import Image from 'next/image';
// import com1 from '../../public/com1.png'
// import com2 from '../../public/com2.png'
// import com3 from '../../public/com3.png'
// import com4 from '../../public/com4.png'
// import com5 from '../../public/com5.png'
// import com6 from '../../public/com6.png'
// import com7 from '../../public/com7.png'
// import com8 from '../../public/com8.jpg'
// import com9 from '../../public/com9.png'
// import com10 from '../../public/com10.jpg'
// import com11 from '../../public/com11.png'

const Company: React.FC = () => {
    return (
        <div className='mt-60 mx-2 md:mx-8' id="company">
            <h2 className='text-center text-5xl font-bold primary-text pb-3'>Amazing Client</h2>
            <div data-aos="fade-up" data-aos-duration="1000">
                <p className="text-center md:text-xl mt-6 mb-16">The company we keep. We are honored to partner with a diverse range of clients from various industries.<br />We believe direct collaboration Our commitment to delivering exceptional results has earned us<br />the trust and loyalty of some of the most respected brands and companies.</p>
            </div>


            <Marquee pauseOnHover speed={100} direction="left" className='order g-4 hover:cursor-pointer'>
                <div className="flex items-center md:gap-36 ">
                    {/* <Image src={com1} width={250} height={250} alt="Company Logo" className="w-52 md:ml-24" />
                    <Image src={com2} width={250} height={250} alt="Company Logo" className="w-40" />
                    <Image src={com3} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={com4} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={com5} width={250} height={250} alt="Company Logo" className="w-44" />
                    <Image src={com6} width={250} height={250} alt="Company Logo" className="w-52" /> */}
                </div>
            </Marquee>

            <Marquee pauseOnHover speed={100} direction="right" className='order g-4 mt-14 hover:cursor-pointer'>
                <div className="flex items-center md:gap-36">
                    {/* <Image src={com7} width={250} height={250} alt="Company Logo" className="w-52 md:ml-24" />
                    <Image src={com8} width={250} height={250} alt="Company Logo" className="w-40" />
                    <Image src={com9} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={com10} width={250} height={250} alt="Company Logo" className="w-52" />
                    <Image src={com11} width={250} height={250} alt="Company Logo" className="w-52" /> */}
                </div>
            </Marquee>
        </div>
    );
};

export default Company;
