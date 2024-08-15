import Link from "next/link";
import { IoMdCall } from "react-icons/io";

const Message = () => {
    return (
        <div className='py-20 mt-24 bg-gray-800'>
            <div data-aos="fade-up"
                data-aos-duration="900">


                <div className=" mx-auto flex flex-col md:flex-row justify-center items-center gap-10 text-center">
                    <p className='text-2xl md:text-4xl font-bold animate-text-color-change'>
                        We make the creative solutions for modern brands
                    </p>
                    <a href='https://forms.gle/kfooAvTuePXRo2ub9' target="_blank" rel="noopener noreferrer" className='hidden md:block'>
                        <button className='primary-button flex items-center transition-transform transform hover:scale-105 duration-300'>
                            Contact Us <IoMdCall className='text-xl ml-2' />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Message;


