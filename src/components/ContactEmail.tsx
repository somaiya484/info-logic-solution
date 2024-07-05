import Link from "next/link";
import { IoMdCall } from "react-icons/io";

const ContactEmail: React.FC = () => {
    return (
        <div className="bg-fixed bg-[url('../../public/message.jpg')] h-[600px] flex justify-center items-center relative overflow-auto">
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className='text-center relative z-10 text-white'>
                <h1 className='font-bold primary-text'>Get In Touch</h1>
                <h2 className='text-5xl my-6 leading-10 font-semibold'>Let's Make the Solution</h2>
                <p>Do you dream of exploring the furthest reaches of outer space? <br />Do you live for bringing brands to life and finding new ways to tell exciting brand stories? <br />If so, you may have just found your people.</p>

                <Link href='/contact'>
                    <button className='primary-button w-[135px] mx-auto mt-10'>
                        Contact Us <IoMdCall className='text-xl ml-2' />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ContactEmail;
