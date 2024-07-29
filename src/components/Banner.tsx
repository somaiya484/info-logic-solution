import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import AnimatedText from "./AnimatedText";
import styles from './Banner.module.css';
import Link from "next/link";

const Banner: React.FC = () => {
  return (
    <div className={`relative overflow-hidden z-30 ${styles.bannerBackground}`}>

      <div className='relative pt-32'>
        <div className='text-center bg-gray-800 py-1 md:py-2 w-1/2 md:w-[28%] mx-auto rounded-2xl'>
          <p className='md:text-xl font-bold animate-text-color-change'>Empower Your Digital Journey</p>
        </div>
      </div>

      <div className='relative text-center mt-10'>
        <h2 className='text-2xl md:text-6xl mx-auto font-semibold'>The Global, Web Design, SEO &</h2>
        <h2 className='text-3xl md:text-6xl mx-auto font-semibold mt-6'>Logical Data-Driven</h2>
        <h2 className='text-3xl md:text-6xl mx-auto text-gradient font-bold py-6'>Digital Marketing Agency</h2>
      </div>

      <AnimatedText />

      <div className='relative mt-10 md:flex justify-center md:justify-start gap-5 w-2/4 mx-auto md:w-[34%]'>
        <Link className='primary-button transition-transform transform hover:scale-105 duration-300' href="/#services">Explore Services <MdKeyboardDoubleArrowDown className='text-xl' /></Link>
        <button className='secondary-button mt-5 md:mt-0'>Get Free Consultation</button>
      </div>

      <div className='relative text-center mt-10 md:text-lg font-semibold w-3/4 mx-auto pb-10 z-10'>
        <p>Go To <span className='text-gradient'>|</span> Easy Contract <span className='text-gradient'>|</span> Specialize Team</p>
      </div>
    </div>
  );
};

export default Banner;
