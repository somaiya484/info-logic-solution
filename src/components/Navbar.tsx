"use client";
import React, { useState, useEffect } from 'react';
import { IoMdMenu, IoMdCall, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import logo from "../../public/navlogo.png";
import Link from "next/link";

interface MainLink {
    name: string;
    link?: string;
    subLinks?: {
        name: string;
        link: string;
    }[];
}

const Navbar: React.FC = () => {
    const mainLinks: MainLink[] = [
        { name: "Looker", link: "/Looker" },
        {
            name: "Analytics",
            subLinks: [
                { name: "Data Visualization", link: "/DataVisualization" },
                { name: "Web and App", link: "/WebAnalytics" },
            ]
        },
        {
            name: "Marketing",
            subLinks: [
                { name: "SEM", link: "/SEM" },
                { name: "SMM", link: "/SMM" },
            ]
        },
        {
            name: "Design and Development",
            subLinks: [
                { name: "Graphic Design", link: "/GraphicsDesign" },
                { name: "Development", link: "/WebDesign&Development" },
            ]
        },
    ];

    const [open, setOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
    const [scrolled, setScrolled] = useState(false);

    const handleSubMenuToggle = (index: number) => {
        setOpenSubMenu(openSubMenu === index ? null : index);
    };

    const handleSubCategoryClick = () => {
        setOpenSubMenu(null);
        setOpen(false);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-[radial-gradient(circle,_rgba(255,165,0,0.8)_0%]'} `}>
            <div className='container mx-auto flex items-center justify-between px-6'>
                <div className='flex items-center'>
                    <Link href='/'>
                        <Image
                            src={logo}
                            width={230}
                            height={80}
                            alt="Logo"
                            className="h-[80px] w-[230px]"
                        />
                    </Link>
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl md:hidden cursor-pointer mr-16'>
                    <IoMdMenu />
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-6 transition-all duration-500 ease-in ${open ? 'top-20' : '-top-32'} ${open ? 'flex flex-col md:flex-row bg-white md:bg-transparent' : 'hidden'} justify-center`}>
                    {
                        mainLinks.map((mainLink, index) => (
                            <li key={mainLink.name} className='md:ml-4 lg:ml-6 md:mt-0 mt-2 relative group'>
                                <div className='flex items-center'>
                                    <Link href={mainLink.link || '#'} className='hover:text-orange-600 focus:text-orange-600 duration-200 block md:inline-block font-semibold text-base' onClick={() => handleSubMenuToggle(index)}>
                                        {mainLink.name}
                                    </Link>
                                    {mainLink.subLinks && (
                                        <IoIosArrowDown className='ml-1 text-lg text-gray-600' />
                                    )}
                                </div>
                                {mainLink.subLinks && openSubMenu === index && (
                                    <ul className='absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md z-50'>
                                        {
                                            mainLink.subLinks.map((subLink) => (
                                                <li key={subLink.name}>
                                                    <Link href={subLink.link} className='block px-4 py-2 text-gray-800 hover:bg-orange-100' onClick={handleSubCategoryClick}>
                                                        {subLink.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )}
                                {mainLink.subLinks && (
                                    <div className='absolute -top-4 right-0 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity'>click</div>
                                )}
                            </li>
                        ))
                    }
                </ul>

                 <a href='https://forms.gle/kfooAvTuePXRo2ub9' target="_blank" rel="noopener noreferrer"  className='hidden md:block'>
                    <button className='primary-button flex items-center transition-transform transform hover:scale-105 duration-300'>
                        Contact Us <IoMdCall className='text-xl ml-2' />
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Navbar;
