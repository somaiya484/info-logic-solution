import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";


interface FooterProps {
    logoSrc: StaticImageData;
    message: string;
    services: { name: string, link: string }[];
    companyLinks: { name: string, link: string }[];
    contact: { email: string };
}

const Footer: React.FC<FooterProps> = ({ logoSrc, message, services, companyLinks, contact }) => {
    return (
        <footer className="footer bg-slate-900 text-white py-16 px-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="text-center md:text-left">
                    <Link href='/'>
                        <Image
                            src={logoSrc}
                            width={250}
                            height={250}
                            alt="Company Logo"
                            className="w-[180px] mx-auto md:mx-0"
                        />
                    </Link>
                    <p className='mt-5 md:pr-10'>
                        {message}
                    </p>
                </div>
                <nav className="text-center md:text-left">
                    <h6 className="footer-title text-lg font-semibold mb-4">Services</h6>
                    <ul>
                        {services.map(service => (
                            <li key={service.name}>
                                <Link className="link link-hover text-gray-400 hover:underline hover:text-white" href={service.link}>{service.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <nav className="text-center md:text-left">
                    <h6 className="footer-title text-lg font-semibold mb-4">Company</h6>
                    <ul>
                        {companyLinks.map(link => (
                            <li key={link.name}>
                                <Link className="link link-hover text-gray-400 hover:underline hover:text-white" href={link.link}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <nav className="text-center md:text-left">
                    <h6 className="footer-title text-lg font-semibold mb-4">Say Hello to Us</h6>
                    <ul>
                        <li><a className="link link-hover text-gray-400 hover:underline hover:text-white" href={`mailto:${contact.email}`}>Email: {contact.email}</a></li>
                    </ul>
                    <div className="flex gap-8 items-center mt-5 text-2xl  text-gray-400 ">
                        <a href='https://www.linkedin.com/company/infologicsolution/' target="_blank" rel="noopener noreferrer" className='cursour-pointer hover:text-white' ><FaLinkedin /></a>
                        <a href=' https://www.instagram.com/infologicsolution/' target="_blank" rel="noopener noreferrer" className='cursour-pointer hover:text-white' ><FaInstagram /></a>
                        <a href='https://www.facebook.com/infologicsolution/' target="_blank" rel="noopener noreferrer" className='cursour-pointer hover:text-white' ><FaFacebookF /></a>
                        <a href='https://www.youtube.com/@InfoLogicSolutions' target="_blank" rel="noopener noreferrer" className='cursour-pointer hover:text-white' ><FaYoutube /></a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
