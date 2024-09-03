"use client";  // Add this at the very top

// src/app/contact/page.tsx
import { useState } from 'react';
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import QaN from "@/components/QaN";
import Company from "@/components/Company";
import ContactDetails from "@/components/ContactDetails";

const Contact: React.FC = () => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('')

    const sendMail = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                subject,
                message
            })
        })
        console.log(await response.json())
    }

    return (
        <div>
            <div className="bg-[url('/contactimage.webp')] pt-7 pb-20 w-full h-full overflow-auto">
                <p className='primary-text text-center text-7xl text-gradient font-bold mt-32'>Contact Us Today</p>
                <div className="md:flex justify-between px-8 mt-20 gap-40 w-[96%]">
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
                    <div className="w-[40%]">
                        <form onSubmit={sendMail} className="h-full w-1/3 space-y-6">
                            <div className="flex flex-col items-start w-full justify-start">
                                <h1 className="text-xl font-semibold">Tutorial Email</h1>
                            </div>
                            <div className="relative flex flex-col space-y-1">
                                <label htmlFor="title" className="text-sm font-light text-gray-500">
                                    Subject
                                </label>
                                <input
                                    name="title"
                                    type="text"
                                    id="title"
                                    required
                                    value={subject}
                                    onChange={(e) => {
                                        setSubject(e.target.value)
                                    }}
                                    placeholder="What will you title this goal?"
                                    className="rounded-xl border-2 border-gray-400 p-2"
                                />
                            </div>
                            <div className="relative flex flex-col space-y-1">
                                <label htmlFor="title" className="text-sm font-light text-gray-500">
                                    What would you need help with?
                                </label>
                                <textarea
                                    name="description"
                                    id="description"
                                    required
                                    cols={10}
                                    rows={5}
                                    value={message}
                                    onChange={(e) => {
                                        setMessage(e.target.value)
                                    }}
                                    placeholder="What will you title this goal?"
                                    className="rounded-xl border-2 border-gray-400 p-2"
                                />
                            </div>
                            <button type='submit' className="ml-auto flex w-1/2 items-center justify-center space-x-3 rounded-lg bg-blue-600 p-2 text-white shadow-blue-500 hover:bg-blue-700 hover:shadow-md">
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="-mt-16 mb-20"><Company /></div>
            <ContactDetails />
            <QaN />
        </div>
    );
};

export default Contact;
