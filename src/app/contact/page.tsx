import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import CompanyTwo from "@/components/CompanyTwo";
import QaN from "@/components/QaN";
import Image from 'next/image';
import contactImage from '../../../public/contactsection.jpg'

const Contact: React.FC = () => {
    return (
        <div className=" ">

            <div className="bg-[url('/contactimage.webp')] pt-7 pb-20 w-full h-full w-full overflow-auto">

                <p className='primary-text text-center text-7xl text-gradient font-bold mt-32'>Contact Us Today</p>

                {/* section 1 */}
                <div className="md:flex justify-between px-8 mt-20 gap-40 w-[96%]">
                    {/* left side */}
                    <div>
                        <h1 className="text-5xl font-semibold text-gray-700">Get In Touch With Us</h1>
                        <p className="text-xl mt-10 text-gray-500">Whether you choose to drop us a line, please reach out on social media or fill out the lead form. We will make sure to get right back to you!</p>

                        <div className="mt-28">
                            <p className="text-xl text-gray-600 font-bold">Follow Us On Social Media</p>

                            <div className="flex gap-8 items-center mt-5 text-3xl text-orange-700">
                                <FaFacebookF />
                                <FaYoutube />
                                <FaInstagram />
                                <FaLinkedin />
                            </div>

                        </div>
                    </div>

                    {/* right side */}
                    <div className="w-[40%]">
                        <form>
                            <div className="form-control mt-5">
                                <input type="text" placeholder="Name" name='name' className="input bg-white input-bordered border-2  focus:outline-none rounded-xl  w-full py-3 px-4" required />
                            </div>
                            <div className="form-control mt-5">
                                <input type="email" placeholder="Email" name='email' className="input bg-white input-bordered border-2  focus:outline-none rounded-xl  w-full py-3 px-4" required />
                            </div>
                            <div className="form-control mt-5">
                                <input type="tel" placeholder="Phone" name='phone' className="input bg-white input-bordered border-2  focus:outline-none rounded-xl  w-full py-3 px-4" required />
                            </div>
                            <div>
                                <textarea className="input bg-white input-bordered mt-5 h-48 border-2 px-4  focus:outline-none rounded-xl  pt-3" name="text" placeholder="Message" id="" cols={47}></textarea>
                            </div>

                            <input type="submit" value="Submit" className="secondary-button w-[120px] border-orange-700 border-2 bg-transparent text-orange-700 hover:text-white form-control mt-3 text-[15px] font-semibold ml-1" />
                        </form>
                    </div>
                </div>
            </div>


            {/* section 2 */}
            <div className="md:flex px-8 gap-16 items-center bg-orange-600 py-28 w-full text-white">
                <div className="md:w-[50%] -ml-8">
                    <Image
                        src={contactImage}
                        width={250}
                        height={250}
                        alt="Company Logo"
                        className="rounded-e-3xl w-full"
                    />
                </div>

                <div className="md:w-[50%] mt-10 md:mt-0">
                    <h1 className="text-4xl font-semibold">Contact</h1>

                    <div className="flex items-center gap-4 text-lg mt-8">
                        <IoLocationOutline className="text-3xl" />
                        <p>99 Street, Pitsubarge, PA-1532</p>
                    </div>
                    <div className="flex items-center gap-4 text-lg mt-8 ml-1">
                        <FaPhoneAlt className="text-2xl" />
                        <p>923-231-4213</p>
                    </div>
                    <div className="flex items-center gap-4 text-lg mt-8">
                        <IoMailOutline className="text-3xl" />
                        <p>digital@infological.com</p>
                    </div>
                </div>
            </div>

            <div className="pb-20">
                <CompanyTwo></CompanyTwo>
            </div>

            <QaN></QaN>
        </div>
    );
};

export default Contact;
