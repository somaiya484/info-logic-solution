import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import AnimatedText from "./AnimatedText";
import styles from './Banner.module.css';
import Link from "next/link";

const Banner: React.FC = () => {


  return (
    <div className={`relative overflow-hidden z-30 banner-background`}>

      <div className='relative pt-[60px]'>
        <div className='text-center bg-gray-800 py-1 md:py-2 w-1/2 md:w-[28%] mx-auto rounded-2xl'>
          <p className='md:text-[21px] font-bold animate-text-color-change text-center'>Empower Your Digital Journey</p>
        </div>
      </div>

      <div className='relative text-center mt-10'>
        <h2 className='text-2xl md:text-6xl mx-auto font-semibold'>Elevate Your Brand's Online Success</h2>
        <h2 className='text-3xl md:text-6xl mx-auto font-semibold mt-5'>with Cutting-Edge</h2>
        <h2 className='text-3xl md:text-6xl mx-auto banner-gradient font-bold pt-5 pb-3'>Digital Strategies & Solutions</h2>
      </div>

      <AnimatedText />

      <div className='relative mt-9 md:flex justify-center md:justify-start gap-5 w-2/4 mx-auto md:w-[34%]'>
        <Link className='primary-button transition-transform transform hover:scale-105 duration-300' href="/#services">Explore Services <MdKeyboardDoubleArrowDown className='text-xl' /></Link>
        <button className='secondary-button mt-5 md:mt-0'>
          Get Free Consultation
        </button>

      </div>

      <div className='relative text-center mt-10 md:text-lg font-semibold w-3/4 mx-auto pb-10 z-10'>
        <p>Go To <span className='text-gradient'>|</span> Easy Contract <span className='text-gradient'>|</span> Specialize Team</p>
      </div>
    </div>
  );
};

export default Banner;
