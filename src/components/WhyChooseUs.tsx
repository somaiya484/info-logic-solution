import Image from "next/image";
import img1 from "../../public/Expertise.jpg";
import img2 from "../../public/Client.jpg";
import img3 from "../../public/Proven.jpg";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const WhyChooseUs: React.FC = () => {
    return (
        <div className='mt-32'>
            <div className="text-center">
                <h2 className='text-center text-5xl font-bold primary-text'>Why Choose Us?</h2>
                <svg
                    width="500"
                    height="60"
                    viewBox="0 0 200 40"
                    className="mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M 20 30 Q 100 0 180 30"
                        stroke="url(#gradient)"
                        strokeWidth="4"
                        fill="transparent"
                    />
                    <defs>
                        <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#f97316" />
                            <stop offset="50%" stopColor="#ef4444" />
                            <stop offset="100%" stopColor="#f59e0b" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="mt-16">
                <div className="relative">
                    <div className="z-10 lg:h-[450px] w-full md:w-2/5 bg-indigo-500 absolute md:rounded-r-lg"></div>
                    <div className="flex flex-col md:flex-row justify-evenly pt-12 items-center">
                        <Image
                            src={img1}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className="z-30 w-full md:w-[500px] rounded-lg"
                        />
                        <div className="text-center md:text-left md:ml-8">
                            <h3 className="text-5xl">Exceptional Expertise</h3>
                            <p className="text-xl my-7 leading-8">
                                We deliver top-tier marketing solutions backed <br /> by extensive industry experience.
                            </p>
                            <button className='primary-button'>
                                Explore Services <MdKeyboardDoubleArrowUp className='text-xl' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-42 lg:mt-32">
                <div className="relative">
                    <div className="z-10 md:h-[300px] lg:h-[400px] w-full md:w-[400px] bg-purple-600/35 absolute md:right-0 md:rounded-l-lg"></div>
                    <div className="flex flex-col-reverse md:flex-row justify-evenly pt-12 items-center">
                        <div className="text-center md:text-left md:mr-8">
                            <h3 className="text-5xl">Client-Focused Excellence</h3>
                            <p className="text-xl my-7 leading-8">
                                Personalized strategies tailored to <br /> achieve your business goals.
                            </p>
                            <button className='primary-button'>
                                Explore Services <MdKeyboardDoubleArrowUp className='text-xl' />
                            </button>
                        </div>
                        <Image
                            src={img2}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className="z-30 w-full md:w-[450px] rounded-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-32">
                <div className="relative">
                    <div className="z-10 lg:h-[450px] w-full md:w-2/5 bg-lime-500/60 absolute md:rounded-r-lg"></div>
                    <div className="flex flex-col md:flex-row justify-evenly pt-12 items-center">
                        <Image
                            src={img3}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className="z-30 w-full md:w-[500px] rounded-lg"
                        />
                        <div className="text-center md:text-left md:ml-8">
                            <h3 className="text-5xl">Proven Track Record</h3>
                            <p className="text-xl my-7 leading-8">
                                Proven excellence with a track record of <br /> impactful, high-performing campaigns.
                            </p>
                            <button className='primary-button'>
                                Explore Services <MdKeyboardDoubleArrowUp className='text-xl' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
