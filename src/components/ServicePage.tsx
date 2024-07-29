"use client"
import React, { useEffect } from "react";
import { AiFillTags } from "react-icons/ai";
import Link from "next/link";
import ContactSection from "@/components/ContactSectionProps";
import CompanyTwo from "@/components/CompanyTwo";
import Message from "./Message";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';

interface Section {
    id: number;
    img: string;
    title: string;
    description: string;
    link: string;
}

interface ProcessStep {
    id: number;
    title: string;
    description: string;
}

interface WorkSample {
    id: number;
    category: string;
    img: string;
    title: string;
    link: string;
}

interface ServicePageProps {
    sections?: Section[];
    processSteps: ProcessStep[];
    workSamples: WorkSample[];
    serviceName: string;
}

const ServicePage: React.FC<ServicePageProps> = ({ sections, processSteps, workSamples, serviceName }) => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="bg-white text-black">

            {/* Conditionally render "Our Services" section */}
            {sections && (
                <div className="my-20 page-background">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <h1 className="text-gradient font-bold text-center text-6xl mb-14">
                            Our Services
                        </h1>
                    </div>

                    <div className="container mx-auto grid md:grid-cols-2 gap-16 px-6 md:px-24">
                        {sections.map((section) => (
                            <div data-aos="fade-up" data-aos-duration="1000">

                                <div key={section.id} className="shadow-xl rounded bg-white transition-transform transform hover:scale-105  duration-300 h-full w-full">
                                    <Image src={section.img} width={250} height={250} alt="Company Logo" className="h-80 w-full object-cover p-3" />
                                    <div className="p-6">
                                        <h2 className="text-4xl my-5">{section.title}</h2>
                                        <p className="text-gray-700 mb-7">{section.description}</p>
                                        <Link href={section.link}>
                                            <button className="secondary-button hover:scale-105 duration-200">
                                                Reach Us
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            )}

            {/* Process Steps Section */}
            <div data-aos="fade-up" data-aos-duration="1000">
                <h1 className="font-bold text-center text-4xl mt-10 mb-10">
                    Our <span className="text-gradient">Process</span>
                </h1>
                <p className="text-center md:text-lg">
                    Do you dream of exploring the furthest reaches of outer space? <br />
                    Do you live for bringing brands to life and finding new ways to tell exciting
                    brand stories? <br />
                    If so, you may have just found your people.
                </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000">
                <div className="grid md:grid-cols-4 px-6 gap-6 mt-8 page-background">
                    {processSteps.map((step) => (
                        <div key={step.id} className="border-b pb-5 border-gray-700 hover:border-transparent duration-300 ease-in-out transition-transform transform hover:scale-105 md:hover:scale-110">
                            <h1 className="text-4xl md:text-7xl text-gradient font-bold">{step.id}.</h1>
                            <h2 className="text-xl md:text-2xl font-semibold mt-12">{step.title}</h2>
                            <p className="md:text-lg font-semibold text-stone-600 mt-3">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Work Samples Section */}
            <div className="bg-white text-black">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="text-gradient font-bold text-center text-6xl mt-32 mb-20">
                        Work Samples
                    </h1>
                </div>

                <div className="mx-auto grid md:grid-cols-3 gap-10 px=6 md:px-16">
                    {workSamples.map((sample) => (
                        <div key={sample.id} className="sample-style" data-aos="fade-up" data-aos-duration="1000">
                            <Image
                                src={sample.img} width={250} height={250} alt="Company Logo"
                                className="rounded-2xl w-full h-60 object-cover shadow-lg shadow-orange-100" />

                            <div className="sample-inner-style">
                                <div className="text-center text-white p-6">
                                    <h3 className="text-lg font-semibold italic mb-5 text-center">{sample.category}</h3>
                                    <a href={sample.link} target="_blank" rel="noopener noreferrer" className="sample_button">Preview</a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold my-8 text-center flex items-center gap-1"><AiFillTags className="text-amber-500" /> {sample.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <Message />

            <CompanyTwo />

            <ContactSection serviceName={serviceName} />
        </div>
    );
};

export default ServicePage;
