import Link from "next/link";
import { IoMdCall } from "react-icons/io";

interface ContactSectionProps {
    serviceName: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ serviceName }) => {
    return (
        <div className="md:w-2/4 mx-auto  mb-32 px-10 md:px-0 mt-16">
            <div data-aos="fade-up" data-aos-duration="1000">
                <h1 className="font-bold text-4xl md:text-6xl mb-10">
                    Let's Talk <br /> <span className='text-gradient'>About {serviceName}</span>
                </h1>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000">

                <p className='md:text-lg text-gray-700'>
                    We thrive on innovation and turning brilliant ideas into reality. Our goal is
                    to create exceptional experiences through meticulous execution. If you share
                    our passion, don't hesitate to reach out via phone or email to begin your
                    journey with us.
                </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">

                <Link href='/contact'    >
                    <button className="primary-button mt-7 hover:scale-105 duration-300 transition-all">
                        Contact Us <IoMdCall className="text-xl ml-2" />
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ContactSection;
