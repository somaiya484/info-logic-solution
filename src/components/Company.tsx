import Marquee from "react-fast-marquee";
import React from "react";

const Company: React.FC = () => {
    return (
        <div className='mt-60 mx-2 md:mx-8 pb-32' id="company">
            <h2 className='text-center text-5xl font-bold primary-text'>Amazing Client</h2>
            <p className="text-center md:text-xl mt-6">
                The company we keep. We are honored to partner with a diverse range of clients from various industries.
                <br /> 
                We believe direct collaboration Our commitment to delivering exceptional results has earned us
                <br /> 
                the trust and loyalty of some of the most respected brands and companies.
            </p>

            <Marquee pauseOnHover speed={100} direction="left" className='order g-4 '>
                <div className="flex items-center gap-28">
                    <img className="w-44" src="https://i.ibb.co/jZ1SFDN/channels4-profile-removebg-preview.png" alt="" />
                    <img className="w-44" src="https://i.ibb.co/bLbnq4B/Autodesk-Logo-removebg-preview.png" alt="" />
                    <img className="w-44" src="https://i.ibb.co/HxkW6fL/Intel-Logo-Design-in-BLue-1024x640-removebg-preview.png" alt="" />
                    <img className="w-44" src="https://i.ibb.co/s5nx3K5/download-removebg-preview.png" alt="" />
                    <img className="w-44" src="https://i.ibb.co/pJzyNhN/download-1-removebg-preview.png" alt="" />
                </div>
            </Marquee>

            <Marquee pauseOnHover speed={100} direction="right" className='order g-4 -mt-16'>
                <div className="flex items-center gap-28">
                    <img className="w-44" src="https://i.ibb.co/HxkW6fL/Intel-Logo-Design-in-BLue-1024x640-removebg-preview.png" alt="" />
                    <img className="w-44" src="https://i.ibb.co/jZ1SFDN/channels4-profile-removebg-preview.png" alt="" />
                    <img className="w-44" src="https://i.ibb.co/pJzyNhN/download-1-removebg-preview.png" alt="" />
                    <img className="w-44" src="https://i.ibb.co/bLbnq4B/Autodesk-Logo-removebg-preview.png" alt="" />
                    <img className="w-44" src="https://i.ibb.co/s5nx3K5/download-removebg-preview.png" alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default Company;
