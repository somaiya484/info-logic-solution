import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedin} from "react-icons/fa";
import QaN from "@/components/QaN";
import Company from "@/components/Company";
import ContactDetails from "@/components/ContactDetails";

const Contact: React.FC = () => {


    return (
        <div>
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
                                <input
                                    type="text" name="name" placeholder="Name" required
                                    className="input bg-white input-bordered border-2  focus:outline-none rounded-xl  w-full py-3 px-4" />
                            </div>
                            <div className="form-control mt-5">
                                <input
                                    type="email" name="email" placeholder="Email"
                                    className="input bg-white input-bordered border-2  focus:outline-none rounded-xl  w-full py-3 px-4" />
                            </div>
                            <div className="form-control mt-5">
                                <input
                                    type="tel" name="phone" placeholder="Phone" required
                                    className="input bg-white input-bordered border-2  focus:outline-none rounded-xl  w-full py-3 px-4" />
                            </div>
                            <div>
                                <textarea className="input bg-white input-bordered mt-5 h-48 border-2 px-4  focus:outline-none rounded-xl  pt-3"
                                    name="message" placeholder="Message" required
                                    cols={47}></textarea>
                            </div>

                            <input type="submit" value="Submit" className="secondary-button w-[120px] border-orange-700 border-2 bg-transparent text-orange-700 hover:text-white form-control mt-3 text-[15px] font-semibold ml-1" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="-mt-16 mb-20"><Company></Company></div>
            <ContactDetails></ContactDetails>
            <QaN></QaN>
        </div>
    );
};

export default Contact;
